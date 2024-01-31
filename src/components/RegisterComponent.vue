<template>
  <q-card bordered flat class="q-pa-md column justify-center items-center text-grey-10 bg-white">
    <q-form @submit="register(coach)" class="register-form">
      <q-card-section class="column justify-center items-center q-pa-md section">
        <q-icon name="account_circle" size="1.5rem" />
        <q-card-title class="title">Sign Up</q-card-title>
      </q-card-section>

      <q-card-section class="q-pa-md section">
        <div class="row items-center justify-between">
          <q-input
            color="grey-10"
            label-color="grey-10"
            text-color="grey-10"
            v-model="coach.first_name"
            label="First Name"
            clearable
            />

            <q-input
            color="grey-10"
            label-color="grey-10"
            text-color="grey-10"
            v-model="coach.last_name"
            label="Last Name"
            clearable
            />
        </div>
        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="coach.username"
          label="Username"
          :rules="[
                    (val: string ) => checkLength(val) || 'Username must be between 6 and 20 characters',
                  ]"
          clearable
        />
        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="coach.email"
          label="E-mail"
          type="email"
          :rules = "[
                    (val: string ) => /.+@.+\..+/.test(val) || 'Invalid e-mail',
                  ]"
          clearable
        />
        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="coach.password"
          label="Password"
          type="password"
          :rules="[
                    (val: string ) => checkLength(val) || 'Password must be between 6 and 20 characters',
                    (val: string ) => checkUpperCase(val) || 'Password must contain at least one uppercase letter',
                    (val: string ) => checkLowerCase(val) || 'Password must contain at least one lowercase letter',
                    (val: string ) => checkSpecialCharacter(val) || 'Password must contain at least one special character',
                    (val: string ) => checkNumber(val) || 'Password must contain at least one number',
                  ]"
          clearable
          hint="Password must contain (0-9), (a-z), (A-Z), and (!@#$%^&*)"
        />


        <q-input
          color="grey-10"
          label-color="grey-10"
          text-color="grey-10"
          v-model="coach.telephone"
          mask="(##) #####-####"
          label="Telephone"
          hint="(99) 99999-9999"
          clearable
        />
      </q-card-section>

      <q-card-section class="row items-center justify-center">
        <q-btn
          color="grey-10"
          label="Sign Up"
          unelevated
          rounded
          class="q-ma-md"
          type="submit"/>

      </q-card-section>
    </q-form>


  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import User from '../models/User';
import { useQuasar } from 'quasar';
import { GenericRegisterService }from '../services/GenericRegisterService';

import {
  checkLength,
  checkUpperCase,
  checkLowerCase,
  checkSpecialCharacter,
  checkNumber
} from '../utils/validators';
import { AxiosInstance } from 'axios';

export interface RegisterComponentProps {
  registerEndpoint: string;
  apiInstance: AxiosInstance;
}
const props = withDefaults(defineProps<RegisterComponentProps>(), {});

const registerService = new GenericRegisterService<User>(props.registerEndpoint, props.apiInstance);
const $q = useQuasar();

const coach = ref<User>({
  'id': 0,
  'username': '',
  'email': '' ,
  'first_name':'' ,
  'last_name':'' ,
  'password':'' ,
  'telephone':'' ,
});


const register = async (coach: User) => {
  registerService.create(coach).then((response) => {
    $q.notify({
      color: 'positive',
      message: 'Coach created successfully',
      icon: 'check',
    });
    console.log(response);
  }).catch((error) => {
    $q.notify({
      color: 'negative',
      message: 'Coach creation failed',
      icon: 'error',
    });
    console.log(error);
  });
};
</script>

<style lang="scss" scoped>
.q-card {
  max-width: 45rem;
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

.form-row {
  display: flex;
  gap: 1rem; /* Adjust the gap as needed */
}

.input-field {
  flex: 1;
  max-width: 48%; /* Adjust the width as needed */
  margin-bottom: 1rem;
}

@media screen and (max-width: 600px) {
  .form-row {
    flex-direction: column; /* Stack inputs vertically on smaller screens */
  }

  .input-field {
    max-width: 100%; /* Full width for input fields on smaller screens */
  }
}
</style>
