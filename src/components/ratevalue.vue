<template>
  <div class="munber-rate" v-if="i.rating">{{i.rating && rate}}</div>
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
  },
  computed: {
    rate() {
      if (this.$props.i.rating) {
        return Math.round(this.$props.i.rating.value * 10) / 10;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.munber-rate {
  display: inline-block;
  font-size: 21rpx;
  padding-left: 10rpx;
}
</style>
