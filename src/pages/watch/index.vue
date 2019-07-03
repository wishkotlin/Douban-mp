<template>
  <div>
    <top :title="title" :show_bol="false" :my_class="false"></top>
    <div class="rate" v-if="watch === 'true'">
      <span>点击星星评分</span>
      <span>
        <vant-rate :size="25"></vant-rate>
      </span>
    </div>
    <textarea class="input" type="text" :placeholder="watch === 'false' ? '记录一下想看的理由' : '写几句评价吧'" />
    <button class="button">确定</button>
  </div>
</template>
<script>
export default {
  computed: {
    title() {
      return this.$mp.query.title;
    },
    watch() {
      console.log(this.$mp.query.watch);
      return this.$mp.query.watch;
    }
  },
  mounted() {
    console.log(this.title, this.watch);
  }
};
</script>
<style lang="scss" scoped>
.input {
  border: 1rpx rgba(173, 173, 173, 0.4) solid;
  border-radius: 10rpx;
  height: 300rpx;
  margin: 10rpx 25rpx;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20rpx;
  width: calc(100% - 94rpx);
}
.button {
  color: #fff;
  background: rgb(52, 192, 17);
  width: calc(100% - 54rpx);
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40rpx;
}
.rate {
  margin-top: 30rpx;
  > span:nth-of-type(1) {
    display: flex;
    justify-content: center;
    font-size: 25rpx;
    padding: 15rpx 0;
    color: rgb(165, 165, 165);
  }
  > span:nth-of-type(2) {
    display: flex;
    justify-content: center;
    padding: 15rpx 0;
    // font-size: 25rpx !important;
  }
}
</style>

