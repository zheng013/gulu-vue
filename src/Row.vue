<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Row extends Vue {
    @Prop({type: [String, Number]}) gutter: string | number;
    @Prop({
      type: String,
      validator(value): boolean {return ["left", "right", "center"].includes(value);}
    }) align: string;

    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      });
    }

    get rowStyle() {
      const {gutter} = this;
      return {marginRight: -gutter / 2 + "px", marginLeft: -gutter / 2 + "px"};

    }

    get rowClass() {
      const {align} = this;
      return {[`align-${align}`]: align};
    }

  }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;

        &.align-left {
            justify-content: flex-start;
        }

        &.align-right {
            justify-content: flex-end;
        }

        &.align-center {
            justify-content: center;
        }
    }
</style>