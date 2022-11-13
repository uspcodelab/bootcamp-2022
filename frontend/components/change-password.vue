<template>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header 
          expand-icon=""
          style="max-width: 250px"
        >
          <v-btn
           depressed
           color="#DAE3F0"
           light 
           @click="open=!open"
          >
         Alterar a senha 
      </v-btn>
        </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.min]"
              :type="hide ? 'text' : 'password'"
              name="input-10-2"
              label="Senha antiga"
              color="red"
              hint="Senha deve possuir ao menos 8 caracteres"
              value=""
              class="input-group--focused mt-2"
              style="width: 300px"
              @click:append="hide = !hide"
            />
            <v-text-field
              :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.min]"
              :type="hide ? 'text' : 'password'"
              name="input-10-2"
              label="Senha nova"
              color="red"
              hint="Senha deve possuir ao menos 8 caracteres"
              value=""
              class="input-group--focused mt-2"
              style="width: 300px"
              @click:append="hide = !hide"
            />
            <v-text-field
              :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.min]"
              :type="hide ? 'text' : 'password'"
              name="input-10-2"
              label="Senha nova"
              color="red"
              hint="Senha deve possuir ao menos 8 caracteres"
              value=""
              class="input-group--focused mt-2"
              style="width: 300px"
              @click:append="hide = !hide"
            />
            <v-btn
             depressed
             color="green"
             dark 
             @click="open=!open"
            >
              Confirma
            </v-btn>
          </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
  data () {
    return {
      open: false,
      hide: false,
      rules: {
        min: v => v.length >= 8 || 'No mínimo 8 caracteres',
      },
    }
  }

}
</script>
