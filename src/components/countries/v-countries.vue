<template>
    <div class="v-countries">
        
        <div class="v-countries__country">
            <div class="v-countries__column">Name</div>
            <div class="v-countries__column">CurrencyCode</div>
            <div class="v-countries__column">ShortName</div>
        </div>
        
        <div 
            class="v-countries__country"
            v-for="country in countriesToShow"
            :key="country.id"
            @click="showCountry(country)">

            <div class="v-countries__column">{{ country.name }}</div>
            <div class="v-countries__column">{{ country.currency.currencyCode }}</div>
            <div class="v-countries__column">{{ country.currency.shortName }}</div>
        </div>

        <div>
            <span 
                class="v-countries__page"
                :class="{'v-countries__page--current': n == page}"
                v-for="n in pages"
                :key="n"
                @click="openPage(n)">

                {{n}}
            </span>
        </div>
    </div>

    <v-modal 
        v-if="modalVisible"
        @closeModal="closeModal">

        <div>{{ chosenCountry.name }}</div>
        <div>{{ chosenCountry.currency.currencyCode }}</div>
        <div>{{ chosenCountry.currency.shortName }}</div> 
    </v-modal>
</template>

<script>
import axios from 'axios'
import {refreshToken, logout} from '@/auth/auth.js'
import vModal from '@/components/modal/v-modal.vue'

export default {
    name: 'v-countries',

    components: {
        vModal,
    },

    data() {
        return {
            countries: [],
            modalVisible: false,
            chosenCountry: {},
            page: 1,
            perPage: 5,
            pages: 0,
            countriesToShow: [],
        }
    },

    async mounted() {
        await this.getCountries();
        this.openPage(this.page);
    },

    methods: {
        async getCountries() {
            let user = JSON.parse(localStorage.getItem('user'));

            if (!user) {
                this.$router.push('/login');
                
                return 0;
            }

            try {
                const response = await axios({
                    method: 'get',
                    url: 'https://api.bo.aa44.ru/api/Countries',
                    headers: {'Authorization': 'Bearer ' + user.accessToken}
                });

                this.countries = response.data;
                this.pages = Math.ceil(this.countries.count/this.perPage);
            }
            catch(error) {
                console.log(error);

                if (await refreshToken()) {
                    this.getCountries();
                }
                else {
                    logout();
                    this.$router.push('/login');
                }
            }
        },

        showCountry(country) {
            this.modalVisible = true;
            this.chosenCountry = country;
        },

        closeModal() {
            this.modalVisible = false;
            this.chosenCountry = {};
        },

        openPage(n) {
            this.countriesToShow = [];
            this.page = n;

            let id = this.perPage * (n - 1);

            for (let i = 0; i < this.perPage; i++) {
                if (id >= this.countries.count) break;

                this.countriesToShow.push(this.countries.data[id++]);
            }
        }
    }
}
</script>

<style lang="scss">
.v-countries {
    width: 100%;
    max-width: $container-width;

    margin: 50px auto;

    border: 1px solid $main-color;

    &__country {
        display: flex;

        padding: 10px;

        cursor: pointer;

        &:nth-child(odd) {
            background:cornsilk;
        }

        &:first-of-type {
            background: $main-color;
            color: white;
        }
    }

    &__column {
        flex: 100px 1 1;
        text-align: center;
    }

    &__page {
        margin: 0 5px;

        &--current {
            color: $main-color;
        }
    }
}
</style>