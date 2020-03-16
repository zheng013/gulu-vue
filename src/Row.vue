<template>
    <div class="row" :style="{marginRight:-gutter/2+'px',marginLeft:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Row extends Vue {
    @Prop({type: [String, Number]}) gutter: string | number;

    mounted() {
      this.$children.forEach(vm=>{
        vm.gutter=this.gutter
      })
    }


  }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>