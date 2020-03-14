<template>
    <svg v-if="icon" class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script lang="ts">
  import "./svg.js";
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Icon extends Vue {
    name: "gIcon";
    @Prop({type: String}) readonly icon: string;

  }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: center;
        fill: currentColor;
        overflow: hidden;
    }
</style>