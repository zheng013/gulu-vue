<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  const validator = (value) => {
    const keys = Object.keys(value);
    let valid = true;
    keys.forEach((key) => {
      if (!["span", "offset"].includes(key)) {
        valid = false;
      }
    });
    return valid;
  };
  @Component
  export default class Col extends Vue {
    @Prop({type: [String, Number]}) span: string | number;
    @Prop({type: [String, Number]}) offset: string | number;
    @Prop({type: Object, validator}) ipad?: object;
    @Prop({type: Object, validator}) narrowPc?: object;
    @Prop({type: Object, validator}) pc?: object;
    @Prop({type: Object, validator}) widePc?: object;
    gutter: string | number = 0;

    get colStyle() {
      const {gutter} = this;
      return {paddingRight: gutter / 2 + "px", paddingLeft: gutter / 2 + "px"};
    }

    get colClass() {
      const {span, offset, ipad,narrowPc,pc,widePc} = this;
      return {[`col-${span}`]: span, [`offset-${offset}`]: offset,
              [`col-ipad-${ipad?.span}`]: ipad,
              [`col-narrowPc-${narrowPc?.span}`]: narrowPc,
              [`col-pc-${pc?.span}`]:pc,
              [`col-widePc-${widePc?.span}`]: widePc,
              };
    }
  }
</script>

<style lang="scss" scoped>
    .col {
        img {
            max-width: 100%;
        }

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
        @media(min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;

                }
            }
            $class-prefix: col-ipad-offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: col-narrow-pc-offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: col-pc-offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 1200px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: col-wide-pc-offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
    }
</style>