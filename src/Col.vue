<template>
    <div class="col" :class="{[`col-${span}`]:span,[`offset-${offset}`]:offset}"
         :style="{paddingRight:gutter/2+'px',paddingLeft:gutter/2+'px'}">
        <div style="border: 1px solid darkred ;background: #eee;height: 100px">
            <slot></slot>
        </div>
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
  }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
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