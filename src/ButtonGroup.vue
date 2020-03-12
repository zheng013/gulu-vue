<template>
    <div class="g-button-group">
        <slot></slot>
    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class ButtonGroup extends Vue {
    name: "gButtonGroup";

    mounted() {
      let nodes = this.$el.children;
      for (let node of nodes) {
        const name = node.nodeName.toLowerCase();
        if (name !== "button") {
        console.warn(`该组件的子节点必须为button元素，而您输入的是${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .g-button {
            border-radius: 0;

            &:nth-child(2) {
                margin-left: -1px;
            }

            &:nth-child(3) {
                margin-left: -2px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>