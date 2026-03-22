<script setup lang="ts">
import * as v from 'valibot'

const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, 'Nome deve ter pelo menos 2 caracteres')
  ),
  email: v.pipe(v.string(), v.email('E-mail inválido')),
  phone: v.optional(v.string()),
  subject: v.pipe(v.string(), v.minLength(1, 'Selecione um assunto')),
  message: v.pipe(
    v.string(),
    v.minLength(10, 'Mensagem deve ter pelo menos 10 caracteres')
  )
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Partial<Schema>>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const subjects = [
  { label: 'Agendamento', value: 'Agendamento' },
  { label: 'Dúvidas', value: 'Dúvidas' },
  { label: 'Encaminhamento médico', value: 'Encaminhamento médico' },
  { label: 'Ação Social', value: 'Ação Social' },
  { label: 'Outros', value: 'Outros' }
]

const sent = ref(false)
const sending = ref(false)
const error = ref('')

async function onSubmit() {
  sending.value = true
  error.value = ''
  try {
    // Integração Formspree — substitua YOUR_FORM_ID pelo ID do Formspree
    const { formspreeUrl } = useSiteContact()
    const res = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(state)
    })
    if (res.ok) {
      sent.value = true
    } else {
      error.value
        = 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.'
    }
  } catch {
    error.value = 'Erro de conexão. Tente novamente.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <EyebrowBadge text="✦ Fale conosco" />
      <h2 class="font-display font-extrabold text-2xl text-primary-700 mt-3">
        Envie uma mensagem
      </h2>
    </div>

    <!-- Sucesso -->
    <div
      v-if="sent"
      class="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center flex flex-col items-center gap-4"
    >
      <UIcon
        name="i-lucide-check-circle"
        class="text-primary-500 text-4xl"
      />
      <h3 class="font-display font-extrabold text-primary-700 text-xl">
        Mensagem enviada!
      </h3>
      <p class="font-sans text-zinc-600">
        Retornaremos em breve. Obrigado pelo contato.
      </p>
    </div>

    <!-- Formulário -->
    <UForm
      v-else
      :schema="schema"
      :state="state"
      class="flex flex-col gap-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Nome completo"
        name="name"
        required
      >
        <UInput
          v-model="state.name"
          placeholder="Seu nome completo"
          icon="i-lucide-user"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UFormField
          label="E-mail"
          name="email"
          required
        >
          <UInput
            v-model="state.email"
            type="email"
            placeholder="seu@email.com"
            icon="i-lucide-mail"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Telefone / WhatsApp"
          name="phone"
        >
          <UInput
            v-model="state.phone"
            type="tel"
            placeholder="(11) 99999-9999"
            icon="i-lucide-phone"
            size="lg"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField
        label="Assunto"
        name="subject"
        required
      >
        <USelect
          v-model="state.subject"
          :items="subjects"
          value-key="value"
          label-key="label"
          placeholder="Selecione um assunto"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Mensagem"
        name="message"
        required
      >
        <UTextarea
          v-model="state.message"
          placeholder="Conte-nos como podemos ajudar..."
          :rows="5"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UAlert
        v-if="error"
        color="error"
        variant="subtle"
        :description="error"
        icon="i-lucide-alert-circle"
      />

      <UButton
        type="submit"
        color="primary"
        size="lg"
        block
        :loading="sending"
        icon="i-lucide-send"
      >
        Enviar mensagem
      </UButton>
    </UForm>
  </div>
</template>
