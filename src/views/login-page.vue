<template>
    <div class="login-page">
        <v-login />

        Или <router-link to="/registration">Зарегистрироваться</router-link>
    </div>
</template>

<script>
import vLogin from '@/components/user/v-login.vue'

export default {
    name: 'login-page',
    
    components: {
        vLogin,
    },
}
</script>

<style lang="scss">
.login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
}   
</style>