<template>
    <form 
        class="v-registration"
        @submit.prevent="registerUser">

    <fieldset class="v-registration__fieldset">
      <legend>Регистрация</legend>

      <label class="v-registration__label">
        <span>Фамилия</span>
        
        <input
          class="v-registration__input"
          type="text" 
          name="lastName"
          v-model="userData.lastName">
      </label>

      <label class="v-registration__label">
        <span>Имя</span>
        
        <input
          class="v-registration__input"
          type="text" 
          name="firstName"
          v-model="userData.firstName">
      </label>

      <label class="v-registration__label">
        <span>Отчество</span>
        
        <input
          class="v-registration__input"
          type="text" 
          name="patronymic"
          v-model="userData.patronymic">
      </label>

      <label class="v-registration__label">
        <span>Логин</span>
        
        <input
          class="v-registration__input"
          type="text" 
          name="userName"
          v-model="userData.userName">
      </label>

      <label class="v-registration__label">
        <span>Пароль</span>
        
        <input
          class="v-registration__input"
          type="password" 
          name="password"
          v-model="userData.password">
      </label>

      <label class="v-registration__label">
        <span>Повторите пароль</span>
        
        <input
          class="v-registration__input"
          type="password" 
          name="confirmPassword"
          v-model="userData.confirmPassword">
      </label>

      <label class="v-registration__label">
        <span>Номер телефона</span>
        
        <input
          class="v-registration__input"
          type="tel" 
          name="phoneNumber"
          v-model="userData.phoneNumber">
      </label>

      <label class="v-registration__label">
        <span>Email</span>
        
        <input
          class="v-registration__input"
          type="email" 
          name="email"
          v-model="userData.email">
      </label>

      <button 
        type="submit"
        class="v-registration__button">Зарегистрироваться</button>
    </fieldset>
  </form>
</template>

<script>
import {register} from '@/auth/auth.js'

export default {
    name: 'v-registration',

    data() {
        return {
            userData: {
                lastName: '',
                firstName: '',
                patronymic: '',
                userName: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
                email: '',
            }
        }
    },

    methods: {
        async registerUser() {
            if (await register(this.userData))
                this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
.v-registration {
    margin: auto;
    padding: 5px;

    width: 100%;
    max-width: 500px;

    &__fieldset {
        @include fieldset;
    }

    &__label {
        @include label;
    }

    &__input {
        @include input;
    }

    &__button {
        @include submit-button;
    }
}
</style>