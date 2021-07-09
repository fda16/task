<template>
  <v-header />

  <v-countries />
</template>

<script>
import vHeader from '@/components/basic/v-header.vue'
import vCountries from '@/components/countries/v-countries.vue'

export default {
  name: 'home',

  components: {
    vHeader,
    vCountries,
  }
}
</script>
