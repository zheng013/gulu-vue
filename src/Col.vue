<template>
    <div class="col" :class="{[`col-${span}`]:span,[`offset-${offset}`]:offset}">
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
  }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 100px;
        background: #999;
        border: 1px solid darkred;
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