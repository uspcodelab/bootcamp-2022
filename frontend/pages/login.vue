<template>
  <v-main class="pt-0">
    <SecaoTitulo title="Login" icon="mdi-account-circle" class="mb-10" />
    <div class="d-flex align-center justify-center">
      <div class="d-flex flex-column align-end">
        <v-row class="d-flex justify-end">
          <v-col cols="3">
            <h2 class="mt-4">Login</h2>
            <h2 class="mt-4">Senha</h2>
          </v-col>

          <v-col cols="8" class="d-flex flex-column">
            <input
              type="email"
              class="form-control mt-4 mr-8 pa-4 mailField"
              required
            />
            <input
              type="password"
              class="form-control mt-4 mr-8 pa-4 passwdField"
              required
            />
          </v-col>
        </v-row>
        <v-row class="mt-4 mr-8">
          <v-btn solid color="#65AF4B">Entrar</v-btn>
        </v-row>
      </div>

      <v-col cols="2" class="d-flex align-center">
        <v-btn color="#30167C" height="7em" weight="8em">
          Cadastre-se<br />
          aqui
        </v-btn>
      </v-col>
    </div>
  </v-main>
</template>

<script></script>

<style>
.passwdField {
  background-color: #d9d9d9;
  height: 2.2em;
  border-radius: 0.5em;
}

.mailField {
  background-color: #d9d9d9;
  height: 2.2em;
  border-radius: 0.5em;
}
</style>
