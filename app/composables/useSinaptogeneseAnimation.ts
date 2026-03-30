import { ref, computed } from 'vue'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface SinaptogenesePhase {
  id: number
  name: string
  desc: string
  duration: number // ms at speed=1
}

// ── Static data ───────────────────────────────────────────────────────────────

export const PHASES: SinaptogenesePhase[] = [
  {
    id: 1,
    name: 'Proliferação Neuronal',
    desc: 'Células-tronco neurais se dividem rapidamente, gerando bilhões de neurônios nos primeiros meses de gestação.',
    duration: 7000
  },
  {
    id: 2,
    name: 'Migração Neuronal',
    desc: 'Os neurônios percorrem longas distâncias ao longo de células gliais radiais até alcançar sua posição definitiva no córtex.',
    duration: 8000
  },
  {
    id: 3,
    name: 'Diferenciação Morfológica',
    desc: 'Cada neurônio desenvolve sua identidade: axônio único e ramificações dendríticas que definem como ele se conectará.',
    duration: 9000
  },
  {
    id: 4,
    name: 'Sinaptogênese',
    desc: 'O cone de crescimento do axônio navega pelo tecido neural e estabelece sinapses com neurônios-alvo — a base do aprendizado.',
    duration: 11000
  },
  {
    id: 5,
    name: 'Refinamento Sináptico',
    desc: 'Sinapses pouco usadas são eliminadas (poda sináptica) e as mais ativas são fortalecidas (LTP) — "use it or lose it".',
    duration: 10000
  }
]

// ── Neuron / Synapse classes (canvas internals) ───────────────────────────────

interface Vec2 { x: number; y: number }

class Neuron {
  id: number
  // spawn position (center of canvas)
  sx: number; sy: number
  // target position (final resting place)
  tx: number; ty: number
  // current position
  x: number; y: number
  r: number
  hue: number
  birthProgress: number  // 0→1 fade-in during phase 1
  dendrites: { angle: number; maxLen: number; grown: number }[]
  axonPts: Vec2[]
  growthCone: boolean
  connected: boolean
  connectedTo: Neuron | null
  apoptosis: boolean
  activity: number

  constructor(id: number, cx: number, cy: number, W: number, H: number) {
    this.id = id
    this.sx = cx + (Math.random() - 0.5) * 60
    this.sy = cy + (Math.random() - 0.5) * 60
    // assign target in the inner 70% of canvas
    this.tx = W * 0.15 + Math.random() * W * 0.7
    this.ty = H * 0.15 + Math.random() * H * 0.7
    this.x = this.sx
    this.y = this.sy
    this.r = 7 + Math.random() * 7
    this.hue = 185 + (id * 37) % 80
    this.birthProgress = 0
    const dendCount = 4 + Math.floor(Math.random() * 4)
    this.dendrites = Array.from({ length: dendCount }, (_, i) => ({
      angle: (i / dendCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
      maxLen: (18 + Math.random() * 22) * (this.r / 10),
      grown: 0
    }))
    this.axonPts = []
    this.growthCone = false
    this.connected = false
    this.connectedTo = null
    this.apoptosis = false
    this.activity = 0
  }
}

class Synapse {
  pre: Neuron
  post: Neuron
  strength: number
  alpha: number
  pulseT: number
  alive: boolean

  constructor(pre: Neuron, post: Neuron) {
    this.pre = pre
    this.post = post
    this.strength = 0.3 + Math.random() * 0.5
    this.alpha = 0
    this.pulseT = -1
    this.alive = true
  }
}

// ── Composable ────────────────────────────────────────────────────────────────

export function useSinaptogeneseAnimation() {
  // Controls (reactive)
  const speed = ref(1.0)
  const neuronCount = ref(12)
  const isPaused = ref(false)
  const currentPhase = ref(1)
  const progress = ref(0)

  const currentPhaseData = computed(() => PHASES[currentPhase.value - 1])

  // Internal animation state (not reactive — canvas engine owns these)
  let canvasEl: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null
  let rafId: number | null = null
  let resizeObserver: ResizeObserver | null = null
  let lastTimestamp: number | null = null
  let phaseTimer = 0
  let neurons: Neuron[] = []
  let synapses: Synapse[] = []

  // Brand colors read from CSS custom props at init time
  let C = {
    teal400: '#45aab9',
    teal500: '#1A7A8A',
    teal300: '#7ecad4',
    teal900: '#0a333c',
    amber400: '#fab432',
    amber500: '#E8A020',
    white: '#ffffff'
  }

  function readColors() {
    if (typeof document === 'undefined') return
    const s = getComputedStyle(document.documentElement)
    const get = (v: string) => s.getPropertyValue(v).trim() || undefined
    C = {
      teal400: get('--color-primary-400') || C.teal400,
      teal500: get('--color-primary-500') || C.teal500,
      teal300: get('--color-primary-300') || C.teal300,
      teal900: get('--color-primary-900') || C.teal900,
      amber400: get('--color-secondary-400') || C.amber400,
      amber500: get('--color-secondary-500') || C.amber500,
      white: '#ffffff'
    }
  }

  // ── Canvas sizing ──────────────────────────────────────────────────────────

  function sizeCanvas() {
    if (!canvasEl) return
    const dpr = window.devicePixelRatio || 1
    const W = canvasEl.offsetWidth
    const H = canvasEl.offsetHeight
    canvasEl.width = W * dpr
    canvasEl.height = H * dpr
    ctx = canvasEl.getContext('2d')!
    ctx.scale(dpr, dpr)
  }

  function canvasW() { return canvasEl ? canvasEl.offsetWidth : 0 }
  function canvasH() { return canvasEl ? canvasEl.offsetHeight : 0 }

  // ── Neuron initialisation ──────────────────────────────────────────────────

  function buildNeurons() {
    if (!canvasEl) return
    const W = canvasW(); const H = canvasH()
    const cx = W / 2; const cy = H / 2
    neurons = Array.from({ length: neuronCount.value }, (_, i) => new Neuron(i, cx, cy, W, H))
    synapses = []
    phaseTimer = 0
    currentPhase.value = 1
    progress.value = 0
    lastTimestamp = null
  }

  // ── Drawing helpers ────────────────────────────────────────────────────────

  function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
  function rand(a: number, b: number) { return a + Math.random() * (b - a) }

  function hexAlpha(hex: string, a: number) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r},${g},${b},${a.toFixed(3)})`
  }

  function drawBackground() {
    if (!ctx) return
    const W = canvasW(); const H = canvasH()
    ctx.fillStyle = C.teal900
    ctx.fillRect(0, 0, W, H)
    // subtle grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'
    ctx.lineWidth = 0.5
    for (let x = 0; x < W; x += 48) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
    }
    for (let y = 0; y < H; y += 48) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }
  }

  function drawNeuron(n: Neuron) {
    if (!ctx || n.birthProgress <= 0) return
    const scale = Math.min(n.birthProgress * 2, 1)
    const alpha = n.apoptosis ? 0.2 : 0.9 * scale

    ctx.save()
    ctx.translate(n.x, n.y)

    // glow when active
    if (n.activity > 0) {
      const g = ctx.createRadialGradient(0, 0, n.r, 0, 0, n.r * 4)
      g.addColorStop(0, hexAlpha(C.teal400, 0.4 * n.activity))
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(0, 0, n.r * 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // dendrites (phase ≥ 3)
    if (currentPhase.value >= 3) {
      ctx.strokeStyle = hexAlpha(C.teal300, 0.55)
      ctx.lineWidth = 1.1
      for (const d of n.dendrites) {
        const prog = Math.min(d.grown / d.maxLen, 1)
        if (prog <= 0) continue
        ctx.beginPath()
        ctx.moveTo(0, 0)
        const ex = Math.cos(d.angle) * d.maxLen * prog
        const ey = Math.sin(d.angle) * d.maxLen * prog
        ctx.lineTo(ex, ey)
        ctx.stroke()
        if (prog > 0.6) {
          ctx.fillStyle = hexAlpha(C.teal300, 0.8)
          ctx.beginPath()
          ctx.arc(ex, ey, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // axon path (phase ≥ 4)
    if (currentPhase.value >= 4 && n.axonPts.length > 1) {
      ctx.strokeStyle = hexAlpha(C.amber400, 0.7)
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(n.axonPts[0].x - n.x, n.axonPts[0].y - n.y)
      for (let i = 1; i < n.axonPts.length; i++) {
        ctx.lineTo(n.axonPts[i].x - n.x, n.axonPts[i].y - n.y)
      }
      ctx.stroke()

      // growth cone dot
      if (n.growthCone && !n.connected) {
        const tip = n.axonPts[n.axonPts.length - 1]
        ctx.fillStyle = '#ffffa0'
        ctx.beginPath()
        ctx.arc(tip.x - n.x, tip.y - n.y, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // soma
    ctx.fillStyle = n.apoptosis ? '#334' : C.teal400
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.arc(0, 0, n.r * scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    // nucleus highlight
    ctx.fillStyle = 'rgba(255,255,255,0.18)'
    ctx.beginPath()
    ctx.arc(0, 0, n.r * 0.42 * scale, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  function drawSynapses() {
    if (!ctx) return
    for (const s of synapses) {
      if (s.alpha <= 0) continue
      const tip = s.pre.axonPts.length > 0
        ? s.pre.axonPts[s.pre.axonPts.length - 1]
        : { x: s.pre.x, y: s.pre.y }

      const cx = (tip.x + s.post.x) / 2 + (s.post.y - tip.y) * 0.18
      const cy = (tip.y + s.post.y) / 2 - (s.post.x - tip.x) * 0.18

      ctx.save()
      ctx.globalAlpha = s.alpha * Math.max(0.1, s.strength)
      ctx.strokeStyle = s.strength > 0.6 ? C.teal300 : C.amber400
      ctx.lineWidth = s.strength > 0.6 ? 1.8 : 1.1
      ctx.beginPath()
      ctx.moveTo(tip.x, tip.y)
      ctx.quadraticCurveTo(cx, cy, s.post.x, s.post.y)
      ctx.stroke()

      // pulse dot travelling along synapse
      if (s.pulseT >= 0) {
        const t = s.pulseT
        const px = lerp(lerp(tip.x, cx, t), lerp(cx, s.post.x, t), t)
        const py = lerp(lerp(tip.y, cy, t), lerp(cy, s.post.y, t), t)
        ctx.fillStyle = C.amber500
        ctx.globalAlpha = 0.95
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }
  }

  // ── Phase update logic ─────────────────────────────────────────────────────

  function updatePhase1(dt: number) {
    const interval = PHASES[0].duration / neurons.length
    neurons.forEach((n, i) => {
      if (phaseTimer > i * interval) {
        n.birthProgress = Math.min(n.birthProgress + dt * 0.002, 1)
      }
    })
  }

  function updatePhase2(dt: number) {
    neurons.forEach(n => {
      n.birthProgress = Math.min(n.birthProgress + dt * 0.002, 1)
      const t = Math.min(dt * 0.0015, 0.04)
      n.x = lerp(n.x, n.tx, t)
      n.y = lerp(n.y, n.ty, t)
    })
  }

  function updatePhase3(dt: number) {
    neurons.forEach(n => {
      for (const d of n.dendrites) {
        d.grown = Math.min(d.grown + dt * rand(0.02, 0.06), d.maxLen)
      }
    })
  }

  function updatePhase4(dt: number) {
    neurons.forEach(n => {
      if (n.connected) return
      if (n.axonPts.length === 0) n.axonPts.push({ x: n.x, y: n.y })

      // find nearest unconnected neuron
      let target: Neuron | null = null
      let best = Infinity
      neurons.forEach(m => {
        if (m === n || m.connected) return
        const dx = m.x - n.x; const dy = m.y - n.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < best && d > 30) { best = d; target = m }
      })
      if (!target) return

      const tip = n.axonPts[n.axonPts.length - 1]
      const dx = (target as Neuron).x - tip.x
      const dy = (target as Neuron).y - tip.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist > (target as Neuron).r + 6) {
        const step = dt * rand(0.08, 0.18)
        n.axonPts.push({
          x: tip.x + (dx / dist) * step + rand(-1.2, 1.2),
          y: tip.y + (dy / dist) * step + rand(-1.2, 1.2)
        })
        n.growthCone = true
      } else {
        n.connected = true
        n.growthCone = false
        n.connectedTo = target
        synapses.push(new Synapse(n, target as Neuron))
      }
    })
    synapses.forEach(s => {
      s.alpha = Math.min(s.alpha + dt * 0.002, 1)
    })
  }

  function updatePhase5(dt: number) {
    synapses.forEach(s => {
      if (!s.alive) {
        s.alpha = Math.max(s.alpha - dt * 0.0015, 0)
        return
      }
      s.strength += dt * rand(-0.0002, 0.0004)
      s.strength = Math.max(0, Math.min(1, s.strength))
      if (s.strength < 0.06) s.alive = false

      if (Math.random() < 0.0004 * dt) s.pulseT = 0
      if (s.pulseT >= 0) {
        s.pulseT += dt * 0.0018
        if (s.pulseT > 1) {
          s.pulseT = -1
          s.post.activity = 1
        }
      }
      s.alpha = Math.min(s.alpha + dt * 0.0008, 1)
    })
    neurons.forEach(n => {
      n.activity = Math.max(n.activity - dt * 0.002, 0)
      if (!n.connected && Math.random() < 0.00005 * dt) n.apoptosis = true
    })
  }

  // ── Main tick ──────────────────────────────────────────────────────────────

  function tick(timestamp: number) {
    if (!ctx || !canvasEl) return

    const raw = timestamp - (lastTimestamp ?? timestamp)
    lastTimestamp = timestamp
    // clamp delta (ms) to avoid huge jumps after tab switch, then scale by speed
    const delta = Math.min(raw, 100) * speed.value

    phaseTimer += delta

    const phaseDuration = PHASES[currentPhase.value - 1].duration
    progress.value = Math.min(phaseTimer / phaseDuration, 1)

    switch (currentPhase.value) {
      case 1: updatePhase1(delta); break
      case 2: updatePhase2(delta); break
      case 3: updatePhase3(delta); break
      case 4: updatePhase4(delta); break
      case 5: updatePhase5(delta); break
    }

    drawBackground()
    drawSynapses()
    neurons.forEach(n => drawNeuron(n))

    // advance to next phase when timer exceeds duration (ms)
    if (phaseTimer >= phaseDuration && currentPhase.value < PHASES.length) {
      currentPhase.value++
      phaseTimer = 0
      progress.value = 0
    }
  }

  // ── RAF loop ───────────────────────────────────────────────────────────────

  function scheduleFrame() {
    rafId = requestAnimationFrame((timestamp) => {
      if (!isPaused.value) {
        tick(timestamp)
      }
      scheduleFrame()
    })
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  function initCanvas(canvas: HTMLCanvasElement) {
    canvasEl = canvas
    readColors()
    sizeCanvas()
    buildNeurons()

    resizeObserver = new ResizeObserver(() => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      sizeCanvas()
      buildNeurons()
      scheduleFrame()
    })
    resizeObserver.observe(canvas)

    scheduleFrame()
  }

  function destroyCanvas() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
    ctx = null
    canvasEl = null
    lastTimestamp = null
    neurons = []
    synapses = []
  }

  function restart() {
    const el = canvasEl
    destroyCanvas()
    if (el) initCanvas(el)
  }

  function togglePause() {
    isPaused.value = !isPaused.value
    if (!isPaused.value) {
      // reset lastTimestamp so we don't get a huge delta after unpausing
      lastTimestamp = null
    }
  }

  function seekPhase(n: number) {
    currentPhase.value = Math.max(1, Math.min(PHASES.length, n))
    phaseTimer = 0
    progress.value = 0
    lastTimestamp = null
    // rebuild neurons so visual state is consistent
    buildNeurons()
    currentPhase.value = n
  }

  return {
    PHASES,
    speed,
    neuronCount,
    isPaused,
    currentPhase,
    progress,
    currentPhaseData,
    initCanvas,
    destroyCanvas,
    restart,
    togglePause,
    seekPhase
  }
}
