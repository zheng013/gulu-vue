<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disable="disable" :readonly="read">
        <template v-if="error">
            <g-icon icon="settings" class="errorIcon"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
  import Icon from "./Icon.vue";


  @Component({
    components: {
      'g-icon':Icon,
    }
  })
  export default class Input extends Vue {
    name: "gInput";
    @Prop({type: String}) error: string;
    @Prop({type: Boolean, default: false}) read: boolean;
    @Prop({type: Boolean, default: false}) disable: boolean;
    @Prop({type: String}) value: string;


  }
</script>

<style lang="scss" scoped>
    /*html {*/
    /*    --button-height: 36px;*/
    /*    --font-size: 14px;*/
    /*    --button-bg: white;*/
    /*    --button-active-bg: #eee;*/
    /*    --border-radius: 4px;*/
    /*    --color: #333;*/
    /*    --border-color: #999;*/
    /*    --border-hover-color: #666*/
    /*}*/
    $border-color: #999;
    $height: 36px;
    $border-color-hover: #666;
    $font-size: 12px;
    $border-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            border: 1px solid $border-color;
            height: $height;
            padding: 0 8px;
            border-radius: $border-radius;
            font-size: inherit;

            &:hover {
                border-color:  $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 2px $box-shadow-color;
                outline: none;
            }

            &[disable], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
              &:focus{
                  box-shadow: none;
              }

            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .errorIcon {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }

</style>