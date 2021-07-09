<template>
    <div 
        class="v-modal__wrapper" 
        ref="v-modal__wrapper">
        
        <div class="v-modal">
            <span 
            class="v-modal__close" 
            @click="closeModal">Закрыть</span>
            
            <slot></slot>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'v-modal',

  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
      if (item.target == vm.$refs['v-modal__wrapper'])
        vm.closeModal();
    });
  },

  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
}
</script>

<style lang="scss">
.v-modal {
    position: relative;

    margin: auto;
    padding: 30px 10px 10px 10px;

    max-width: 1000px;
    width: 95%;
    min-height: 200px;
    max-height: 80%;
    
    background: white;

    border-radius: 15px;

    overflow-y: auto;
    
    @media screen and (min-width:620px) {

        min-height: 100px;
        margin: auto;

        border-radius: 15px;
    }

    &__wrapper {
        display: flex;
        position: fixed;

        width: 100%;
        height: 100%;

        top: 0;
        left: 0;
        
        background: rgba(1, 1, 1, 0.2);

        z-index: 101;
    }

    &__close {
        position: absolute;
        
        top: 10px;
        right: 10px;

        cursor: pointer;
    }
}
</style>
