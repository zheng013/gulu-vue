<template>
    <div class="toast" ref="wrapper" :class="toastClass">
        <div v-if="enableHtml" v-html="this.$slots.default[0]">222</div>
        <slot v-else></slot>
        <div class="closeWrapper" v-if="closeButton" ref="line">
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
    @Prop({type: Number, default: 5}) autoCloseDelay: number;
    @Prop({
      type: Object, default: () => {
        return {text: "关闭", callback: undefined};
      }
    }) closeButton: object;
    @Prop({type: Boolean, default: false}) enableHtml: boolean;
    @Prop({
      type: String, default: "top",
      validator(value): boolean {return ["top", "middle", "bottom"].indexOf(value) >= 0;}
    }) position: string;

    mounted() {
      this.exeAutoClose();
      this.updateStyles();
    }

    exeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }

    get toastClass() {
      const {position} = this;
      return {[`position-${position}`]: position};
    }

    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`; //动态获取div的高度进行赋值
      });
    }

    close() {
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    }

    log() {
      console.log("测试");  //用于测试
    }

    onClickClose() {
      this.close();
      const callback = this.closeButton.callback;
      if (callback && typeof callback === "function") {
        callback(this);
      }
    }
  }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $duration:.4s;
    @keyframes slide-down {
        from{
            opacity: 0;
            transform: translate(-50%,-100%);
        }
        to{
            transform: translate(-50%,0%);
            opacity: 1;
        }
    }@keyframes slide-up {
        from{
            opacity: 0;
            transform: translate(-50%,100%);
        }
        to{
            transform: translate(-50%,0%);
            opacity: 1;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .toast {
        font-size: $font-size;
        min-height: $min-height;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        display: flex;
        align-items: center;
        position: fixed;
        background: $toast-bg;
        color: #ffffff;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 16px;
        line-height: 1.5;
        cursor: default;

        &.position-top {
            animation: slide-down  $duration;
            top: 0;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
        }

        &.position-middle {
            animation: fade-in  $duration;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &.position-bottom {
            animation: slide-up  $duration;
            bottom: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    .closeWrapper {
        position: relative;
        display: flex;
        align-items: center;
        border-left: 1px solid #666;
        margin-left: 16px;
        cursor: default;

        > .close {
            margin-left: 16px;
            flex-shrink: 0;
        }
    }
</style>