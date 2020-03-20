<template>
    <div class="toast">
        <slot></slot>
        <div class="closeWrapper" v-if="closeButton">
            <span class="close" @click='onClickClose'>{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Toast extends Vue {
    @Prop({type: Boolean, default: true}) autoClose: boolean;
    @Prop({type: Number, default: 50}) autoCloseDelay: number;

    @Prop({
      type: Object, default: () => {
        return {text: "关闭", callback: undefined};
      }
    }) closeButton: object;

    mounted() {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }
    log(){
      console.log('测试')  //用于测试
    }
    onClickClose(){
      this.close();
      const callback=this.closeButton.callback;
      if(callback&& typeof callback ==='function' ){
        callback(this)
      }
    }
  }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        min-height: $min-height;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
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

    .closeWrapper {
        line-height: 40px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            border: 0.5px solid #666;
            height: 38px;
            margin-left: 16px;
        }

        > .close {
            margin-left: 32px;
            flex-shrink: 0;
        }
    }
</style>