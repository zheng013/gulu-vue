<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <g-icon icon="error" class="errorIcon"></g-icon>
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
      "g-icon": Icon,
    }
  })
  export default class Input extends Vue {
    name: "gInput";
    @Prop({type: String}) error: string;
    @Prop({type: Boolean, default: false}) readonly: boolean;
    @Prop({type: Boolean, default: false}) disabled: boolean;
    @Prop({type: String}) value: string;


  }
</script>

<style lang="scss" scoped>
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
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 2px $box-shadow-color;
                outline: none;
            }

            &[disable], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;

                &:focus {
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