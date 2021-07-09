<template>
    <div class="registration-page">
        <v-registration />

        Или <router-link to="/login">Войти</router-link>
    </div>
</template>

<script>
import vRegistration from '@/components/user/v-registration.vue'

export default {
    name: 'registration-page',

    components: {
        vRegistration,
    }
}
</script>

<style lang="scss">
.registration-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
}
</style>