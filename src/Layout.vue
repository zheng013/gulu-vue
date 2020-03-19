<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Layout extends Vue {
     hasSider:boolean=false;
    get layoutClass() {
     const {hasSider}=this;
      return {['hasSider']:hasSider};
    }

    mounted() {
      this.$children.forEach(vm => {
        console.log(vm.$options.name);
        if (vm.$options.name === "Sider") {
          this.hasSider = true;
        }
      });
    }


  }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>