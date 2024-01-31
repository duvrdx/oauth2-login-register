<template>
  <q-card bordered flat class="q-pa-md column justify-center items-center text-grey-10 bg-white">
    <q-form @submit="login(apiInstance, username, password)" class="login-form">
      <q-card-section class="column justify-center items-center q-pa-md section">
        <q-icon name="account_circle" size="1.5rem" />
        <q-card-title class="title">Login</q-card-title>
      </q-card-section>

      <q-card-section class="q-pa-md section">
        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="username"
          label="Username"
          clearable
        />
        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="password"
          label="Password"
          type="password"
          clearable
        />
      </q-card-section>

      <q-card-section class="row items-center justify-center">
        <q-item clickable class="text-grey-10">Forgot password?</q-item>
      </q-card-section>

      <q-card-section class="row items-center justify-center">
        <q-btn
          color="grey-10"
          label="Sign In"
          unelevated
          rounded
          class="q-ma-md"
          @click="login(apiInstance, username, password)"/>

          <q-btn
          color="grey-10"
          label="Sign Up"
          unelevated
          outline
          rounded
          class="q-ma-md"
          :to="registerRedirect"
          />
      </q-card-section>
    </q-form>


  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthService from '../services/AuthService';
import { useQuasar } from 'quasar';
import { AxiosInstance } from 'axios';


const username = ref('');
const password = ref('');

const authService = AuthService;
const $q = useQuasar();

export interface RegisterComponentProps {
  apiInstance: AxiosInstance;
  registerRedirect: string;
}

withDefaults(defineProps<RegisterComponentProps>(), {});

const login = async (apiInstance: AxiosInstance, username: string, password: string) => {
  await authService.login(apiInstance, username, password).then((res) => {

    $q.notify({
      color: 'positive',
      message: 'Login successful',
      position: 'top',
      icon: 'check_circle',
      timeout: 1000
    });
  }).catch((err) => {
    $q.notify({
      color: 'negative',
      message: 'Login failed',
      position: 'top',
      icon: 'error',
      timeout: 1000
    });
  })
}
</script>

<style lang="scss" scoped>
.q-card {
  max-width: 100%;
  min-height: 20rem;
  max-height: 38rem;
}

.register-form {
  width: 100%;
}

.section {
  width: 100%;
}

.title {
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 600px) {
  .q-card {
    min-height: auto;
    max-height: none;
  }
}

</style>

