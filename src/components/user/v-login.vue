<template>
    <form 
        class="v-login"
        @submit.prevent="loginUser">

    <fieldset class="v-login__fieldset">
      <legend>Вход</legend>

      <label class="v-login__label">
        <span>Логин</span>
        
        <input
          class="v-login__input"
          type="text" 
          name="userName"
          v-model="userName">
      </label>

      <label class="v-login__label">
        <span>Пароль</span>
        
        <input
          class="v-login__input"
          type="password" 
          name="password"
          v-model="password">
      </label>

      <button 
        type="submit"
        class="v-login__button">Войти</button>
    </fieldset>
  </form>
</template>

<script>
import {login} from '@/auth/auth.js'

export default {
    name: 'v-registration',

    data() {
        return {
            userName: '',
            password: '',
        }
    },

    methods: {
        async loginUser() {
            if (await login(this.userName, this.password))
                this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
.v-login {
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