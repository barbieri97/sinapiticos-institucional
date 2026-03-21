<script setup lang="ts">
import * as v from "valibot";

const schema = v.object({
  nomeResponsavel: v.pipe(
    v.string(),
    v.minLength(2, "Nome deve ter pelo menos 2 caracteres"),
  ),
  nomeCrianca: v.pipe(
    v.string(),
    v.minLength(2, "Nome deve ter pelo menos 2 caracteres"),
  ),
  idadeCrianca: v.pipe(
    v.string(),
    v.minLength(1, "Informe a idade da criança"),
  ),
  whatsapp: v.pipe(v.string(), v.minLength(10, "Informe um telefone válido")),
  email: v.optional(v.pipe(v.string(), v.email("E-mail inválido"))),
  rendaFamiliar: v.pipe(
    v.string(),
    v.minLength(1, "Selecione a faixa de renda"),
  ),
  pessoasNaFamilia: v.optional(v.string()),
  descricao: v.pipe(
    v.string(),
    v.minLength(20, "Por favor, descreva um pouco mais a situação"),
  ),
  comoSoube: v.optional(v.string()),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive<Partial<Schema>>({
  nomeResponsavel: "",
  nomeCrianca: "",
  idadeCrianca: "",
  whatsapp: "",
  email: "",
  rendaFamiliar: "",
  pessoasNaFamilia: "",
  descricao: "",
  comoSoube: "",
});

const faixasRenda = [
  { label: "Até 1 salário mínimo", value: "Até 1 SM" },
  { label: "De 1 a 2 salários mínimos", value: "1 a 2 SM" },
  { label: "De 2 a 3 salários mínimos", value: "2 a 3 SM" },
  { label: "Prefiro não informar agora", value: "Não informado" },
];

const comoSoubeoOptions = [
  { label: "Indicação médica / pediatra", value: "Indicação médica" },
  { label: "Indicação de escola ou professor", value: "Indicação escolar" },
  { label: "Redes sociais", value: "Redes sociais" },
  { label: "Indicação de amigo ou familiar", value: "Indicação pessoal" },
  { label: "Busca na internet", value: "Internet" },
  { label: "Outro", value: "Outro" },
];

const sent = ref(false);
const sending = ref(false);
const error = ref("");

async function onSubmit() {
  sending.value = true;
  error.value = "";
  try {
    const { formspreeUrl } = useSiteContact()
    const res = await fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...state, tipo: "Cadastro Ação Social" }),
    });
    if (res.ok) {
      sent.value = true;
    } else {
      error.value =
        "Erro ao enviar o cadastro. Tente novamente ou entre em contato pelo WhatsApp.";
    }
  } catch {
    error.value = "Erro de conexão. Verifique sua internet e tente novamente.";
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <section
    id="cadastro"
    class="bg-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8"
    aria-label="Cadastro para ação social"
  >
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-10">
        <EyebrowBadge text="✦ Primeiro passo" />
        <SectionTitle
          title="Cadastro para acompanhamento social"
          centered
          class="mt-4"
        />
        <p class="font-sans text-zinc-500 mt-3 max-w-xl mx-auto">
          Preencha o formulário abaixo para iniciar o processo. Todas as
          informações são confidenciais e serão usadas exclusivamente para
          avaliar a elegibilidade ao programa.
        </p>
      </div>

      <!-- Sucesso -->
      <div
        v-if="sent"
        class="bg-primary-50 border border-primary-200 rounded-2xl p-10 text-center flex flex-col items-center gap-5"
      >
        <div class="p-4 bg-primary-100 rounded-full">
          <UIcon
            name="i-lucide-check-circle"
            class="text-primary-500 text-4xl"
          />
        </div>
        <h3 class="font-display font-extrabold text-primary-700 text-2xl">
          Cadastro recebido!
        </h3>
        <p class="font-sans text-zinc-600 max-w-sm leading-relaxed">
          Entraremos em contato em até <strong>5 dias úteis</strong> pelo
          WhatsApp informado. Se não receber nosso contato, verifique também seu
          e-mail.
        </p>
        <p class="font-sans text-zinc-500 text-sm">
          Obrigado por confiar no sinapíticos. Cuidaremos bem da sua
          solicitação.
        </p>
      </div>

      <!-- Formulário -->
      <UCard v-else class="bg-white shadow-md">
        <UForm
          :schema="schema"
          :state="state"
          class="flex flex-col gap-5 p-2"
          @submit="onSubmit"
        >
          <!-- Dados do responsável -->
          <div>
            <p
              class="font-display font-bold text-primary-600 text-sm uppercase tracking-widest mb-4"
            >
              Dados do responsável
            </p>
            <div class="flex flex-col gap-4">
              <UFormField
                label="Nome completo do responsável"
                name="nomeResponsavel"
                required
              >
                <UInput
                  v-model="state.nomeResponsavel"
                  placeholder="Seu nome completo"
                  icon="i-lucide-user"
                  size="lg"
                  class="w-full"
                />
              </UFormField>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UFormField label="WhatsApp" name="whatsapp" required>
                  <UInput
                    v-model="state.whatsapp"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    icon="i-lucide-phone"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>

                <UFormField label="E-mail (opcional)" name="email">
                  <UInput
                    v-model="state.email"
                    type="email"
                    placeholder="seu@email.com"
                    icon="i-lucide-mail"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>
              </div>
            </div>
          </div>

          <USeparator />

          <!-- Dados da criança -->
          <div>
            <p
              class="font-display font-bold text-primary-600 text-sm uppercase tracking-widest mb-4"
            >
              Sobre a criança
            </p>
            <div class="flex flex-col gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UFormField label="Nome da criança" name="nomeCrianca" required>
                  <UInput
                    v-model="state.nomeCrianca"
                    placeholder="Nome completo ou apelido"
                    icon="i-lucide-baby"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>

                <UFormField
                  label="Idade da criança"
                  name="idadeCrianca"
                  required
                >
                  <UInput
                    v-model="state.idadeCrianca"
                    placeholder="Ex: 7 anos"
                    icon="i-lucide-calendar"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>
              </div>

              <UFormField
                label="Descreva brevemente a situação e o que busca"
                name="descricao"
                required
              >
                <UTextarea
                  v-model="state.descricao"
                  placeholder="Conte um pouco sobre as dificuldades da criança e o que motivou buscar atendimento. Não há resposta certa ou errada — queremos entender para poder ajudar da melhor forma."
                  :rows="5"
                  size="lg"
                  class="w-full"
                />
              </UFormField>
            </div>
          </div>

          <USeparator />

          <!-- Dados socioeconômicos -->
          <div>
            <p
              class="font-display font-bold text-primary-600 text-sm uppercase tracking-widest mb-4"
            >
              Contexto familiar
            </p>
            <div class="flex flex-col gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UFormField
                  label="Renda familiar mensal aproximada"
                  name="rendaFamiliar"
                  required
                >
                  <USelect
                    v-model="state.rendaFamiliar"
                    :items="faixasRenda"
                    value-key="value"
                    label-key="label"
                    placeholder="Selecione a faixa de renda"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>

                <UFormField label="Pessoas na família" name="pessoasNaFamilia">
                  <UInput
                    v-model="state.pessoasNaFamilia"
                    placeholder="Ex: 4"
                    icon="i-lucide-users"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>
              </div>

              <UFormField
                label="Como ficou sabendo do sinapíticos?"
                name="comoSoube"
              >
                <USelect
                  v-model="state.comoSoube"
                  :items="comoSoubeoOptions"
                  value-key="value"
                  label-key="label"
                  placeholder="Selecione uma opção"
                  size="lg"
                  class="w-full"
                />
              </UFormField>
            </div>
          </div>

          <UAlert
            v-if="error"
            color="error"
            variant="subtle"
            :description="error"
            icon="i-lucide-alert-circle"
          />

          <div class="bg-primary-50 rounded-xl p-4 flex gap-3">
            <UIcon
              name="i-lucide-lock"
              class="text-primary-400 text-lg shrink-0 mt-0.5"
            />
            <p class="font-sans text-zinc-500 text-xs leading-relaxed">
              Suas informações são confidenciais e protegidas. Utilizamos esses
              dados exclusivamente para avaliar a elegibilidade ao programa e
              entrar em contato com você.
            </p>
          </div>

          <UButton
            type="submit"
            color="primary"
            size="xl"
            block
            :loading="sending"
            icon="i-lucide-send"
          >
            Enviar cadastro
          </UButton>
        </UForm>
      </UCard>
    </div>
  </section>
</template>
