<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Col extends Vue {

  }
</script>

<style lang="scss" scoped>
.col{
    width: 50%;
    height:100px;
    background: #999;
    border: 1px solid darkred;
    $class-prefix:col-;
    @for $n from 1 through 24{
    &.#{$class-prefix}#{$n}{
        width: ($n/24)*100%;
    }
}
}
</style>