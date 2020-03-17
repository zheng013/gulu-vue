<template>
    <div class="col" :class="colClass"
         :style="colStyle">
            <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Col extends Vue {
    @Prop({type: [String, Number]}) span: string | number;
    @Prop({type: [String, Number]}) offset: string | number;
    gutter: string | number = 0;

    get colStyle() {
      const {gutter} = this;
      return {paddingRight: gutter / 2 + "px", paddingLeft: gutter / 2 + "px"};
    }

    get colClass() {
      const {span, offset} = this;
      return {[`col-${span}`]: span, [`offset-${offset}`]: offset};
    }
  }
</script>

<style lang="scss" scoped>
    .col {
        img{
            max-width: 100%;
        }
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
</style>