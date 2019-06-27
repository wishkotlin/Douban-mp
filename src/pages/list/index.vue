<template>
  <div>
    <div class="list-img">
      <img v-bind:mode="'aspectFit'" src="/static/img/1.jpg" alt>
      <img v-bind:mode="'aspectFit'" src="/static/img/2.jpg" alt>
      <img v-bind:mode="'aspectFit'" src="/static/img/3.jpg" alt>
    </div>
    <div class="list-one">
      <div class="list-one-left"></div>
      <div class="list-one-right">
        <ul class="list-one-ul">
          <li>
            1. 肖申克的救赎
            <span>9.6分</span>
          </li>
          <li>
            2. 霸王别姬
            <span>9.6分</span>
          </li>
          <li>
            3. 这个杀手不太冷
            <span>9.4分</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { value, computed, watch, onMounted } from "vue-function-api";
export default {
  props: {},
  setup() {
    // reactive state
    const count = value(0);
    // computed state
    const plusOne = computed(() => count.value + 1);
    // method
    const increment = () => {
      count.value++;
    };
    // watch
    watch(
      () => count.value * 2,
      val => {
        console.log(`count * 2 is ${val}`);
      }
    );
    // lifecycle
    onMounted(() => {
      console.log(`mounted`);
    });
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    };
  }
};
</script>
<style lang="scss" scoped>
.list-one {
  margin: 0 auto;
  display: flex;
  width: 696rpx;
  align-items: center;
  .list-one-left {
    background: black;
    // outline: 1px solid red;
    width: 200rpx;
    height: 200rpx;
    border-radius: 10rpx;
  }
  .list-one-right {
    border-bottom-right-radius: 10rpx;
    border-top-right-radius: 10rpx;
    height: 160rpx;
    display: flex;
    align-items: center;
    width: calc(100% - 150rpx);
    border: 1px solid rgb(180, 180, 180);
    li {
      color: rgb(99, 99, 99);
      font-size: 26rpx;
      line-height: 40rpx;
    }
    .list-one-ul {
      padding-left: 30rpx;
      span {
        padding-left: 10rpx;
        color: rgb(250, 168, 45);
      }
    }
  }
}
.list-img {
  img {
    margin: 0 auto;
    display: block;
    // width: 93%;
    // height: 350rpx;

    width: 696rpx;
    height: 317rpx;
    border-radius: 15rpx;

    // border-radius: 10rpx;
    // border-radius: 50%;
    overflow: hidden;
    margin-bottom: 35rpx;
  }
}
</style>
