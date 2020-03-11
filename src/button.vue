<template>
    <button class="g-button">按钮</button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Button extends Vue {
  }
</script>

<style lang="scss" scoped>
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        color: var(--color);
        border-radius: var(--border-radius);
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);

        &:hover {
            border-color: var(--border-hover-color);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none; /*被选中时的样式*/
        }
    }
</style>