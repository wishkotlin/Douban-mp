<template>
  <div class="short-commit">
    <!-- <div class="short-commit-title">
        <span>短评</span>
        <span>
          <span>全部51656</span>
          <i class="iconfont icon-jiantou"></i>
        </span>
    </div>-->
    <div class="short-commit-item" :key="index" v-for="(item,index) in list">
      <span>
        <img :src="item.pic.normal" alt />
        <!-- <div>
            <span>{{item.user && item.user.name}}</span>
            <div>
              <rate :rating="item.rating && item.rating.value" :max="10" v-bind:list="[1,2,3,4,5]"></rate>
            </div>
        </div>-->
      </span>
      <span>
        <div>{{item && item.title}}</div>
        <div>
          <!-- <i class="iconfont icon-dianzan"></i> -->
          <span>{{item && item.card_subtitle}}</span>
        </div>
      </span>
    </div>
    <!-- <a
        :href="'/pages/short_commit_datail/main?id='+id+'&name='+title+'&rating='+ (list.rating && list.rating.value) +'&max=10'"
        class="more"
      >
        <div>查看全部短评</div>
        <i class="iconfont icon-jiantou"></i>
    </a>-->
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object
    }
  },
  mounted() {
    console.log("this.$props.list", this.$props.list);
  }
};
</script>
<style lang="scss" scoped>
.short-commit {
  margin: 10rpx 15rpx;
  background: #fff;
  // border: 1px red solid;
  padding: 30rpx 25rpx;
  border-radius: 10rpx;
  .short-commit-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20rpx;
    > span:nth-of-type(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30rpx;
      color: rgb(105, 105, 105);
    }
    > span:nth-of-type(1) {
      font-size: 40rpx;
      font-weight: bold;
    }
  }
  .short-commit-item {
    padding-bottom: 30rpx;
    padding-top: 30rpx;
    display: flex;
    flex-direction: column;
    border-bottom: 1rpx rgba(221, 221, 221, 0.699) solid;
    > span:nth-of-type(1) {
      display: flex;
      margin-bottom: 15rpx;
      // border: 1px red solid;
      img {
        width: 90rpx;
        height: 90rpx;
        border-radius: 50rpx;
      }
      > div:nth-of-type(1) {
        padding-left: 15rpx;
        > span:nth-of-type(1) {
          font-size: 30rpx;
          font-weight: bold;
        }
        > div:nth-of-type(1) {
          width: 50%;
        }
      }
    }
    > span:nth-of-type(2) {
      font-size: 32rpx;
      > div:nth-of-type(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
      }
      > div:nth-of-type(2) {
        display: flex;
        margin-top: 10rpx;
        // justify-content: center;
        align-items: center;
        > span:nth-of-type(1) {
          padding-left: 10rpx;
        }
      }
    }
  }
  .more {
    font-size: 30rpx;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15rpx 0;
  }
}
</style>
