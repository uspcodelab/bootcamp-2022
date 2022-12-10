<template>
  <div>
    <SecaoTitulo title="Login" icon="mdi-account-circle" />
    <div class="d-flex align-center justify-center mt-10">
      <div class="d-flex flex-column align-end">
        <v-row class="d-flex justify-end">
          <v-col cols="3">
            <h2 class="my-2">Login</h2>
            <h2 class="my-2">Senha</h2>
          </v-col>

          <v-col cols="8" class="d-flex flex-column">
            <input
              type="email"
              class="form-control my-2 mx-8 pa-4 inputField"
              required
            />
            <input
              type="password"
              class="form-control my-2 mx-8 pa-4 inputField"
              required
            />
          </v-col>
        </v-row>
        <v-row class="my-2 mx-8">
          <v-btn solid color="#65AF4B">Entrar</v-btn>
        </v-row>
      </div>

      <v-col cols="2" class="d-flex align-center">
        <v-btn color="#30167C" height="7em" width="8em">
          Cadastre-se<br />
          aqui
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script></script>

<style>
.inputField {
  background-color: #d9d9d9;
  height: 2.2em;
  border-radius: 0.5em;
}
</style>
