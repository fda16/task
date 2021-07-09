<template>
    <div
        class="v-logout"
        v-if="loggedIn"
        @click="logoutUser">
        
        Выйти
    </div>
</template>

<script>
import {logout} from '@/auth/auth.js'

export default {
    name: 'v-logout',

    data() {
        return {
            loggedIn: JSON.parse(localStorage.getItem('user')) ? true : false,
        }
    },

    methods: {
        logoutUser() {
            logout();
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss">
.v-logout {
    padding: 5px 15px;
    
    background: white;

    border-radius: 12px;

    cursor: pointer;
}
</style>