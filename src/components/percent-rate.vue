<template>
  <div class="munber-rate" v-if="i">{{rate && rate}}%</div>
</template>
<script>
export default {
  props: {
    i: {
      type: Object
    }
  },
  mounted() {
    // console.log("i", this.$props.i);
    // console.log("rating", this.rate);
  },
  computed: {
    rate() {
      if (this.$props.i) {
        let temp = this.$props.i * 100;
        return Math.round(temp * 10) / 10;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.munber-rate {
  display: inline-block;
  font-size: 18rpx;
  padding-left: 10rpx;
  height: 22rpx;
  color: rgb(97, 97, 97);
}
</style>
