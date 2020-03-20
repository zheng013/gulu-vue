<template>
    <div class="toast" >
        <slot ></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Toast extends Vue {

  }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $height;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        background: $toast-bg;
        color: #ffffff;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 16px;
        line-height: 1.5;
    }
</style>