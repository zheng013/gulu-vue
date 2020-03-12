<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:iconPosition}">
        <g-icon v-if="loading" class="loading" icon="loading"></g-icon>
        <g-icon v-if="icon &&!loading" :icon="icon"></g-icon>
        <span>
        <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
  import gIcon from "./Icon.vue";

  @Component({
    components: {gIcon}
  })
  export default class Button extends Vue {
    @Prop({type: String}) readonly iconPosition: string;
    @Prop({type: String}) readonly icon: string;
    @Prop({type: String}) readonly loading: string;


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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle; //出现inline元素不对齐使用该属性
        &:hover {
            border-color: var(--border-hover-color);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none; /*被选中时的样式*/
        }

        > .icon {
            margin-right: 6px;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: 6px;
                margin-right: 0;
            }
        }
    }

    span {
        line-height: 36px; //解决文字与icon无法居中的问题
    }

    @keyframes spin {

    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
    }
.loading{
    animation: spin 2s infinite linear;
}
</style>