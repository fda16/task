<template>
    <header class="v-header">
        <div class="v-header__main"></div>
        
        <div class="v-header__logout">
            <v-logout />
        </div>
    </header>
</template>

<script>
import vLogout from '@/components/user/v-logout.vue'

export default {
    name: 'v-header',

    components: {
        vLogout,
    }
}
</script>

<style lang="scss">
.v-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    height: 50px;
    width: 100%;

    background: $main-color;

    padding: 10px;
}
</style>