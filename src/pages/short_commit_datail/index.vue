<template>
  <div>
    <top :title="title" :show_bol="false" :my_class="false" :home="false"></top>
    <div class="rate">
      <div class="rate-title">
        <span>
          豆瓣评分
          <span>TM</span>
        </span>
        <span>
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>
      <div class="rate-main">
        <span class="rate-main-left">
          <div>{{rating}}</div>
          <div>
            <rate :rating="rating" :max="max" v-bind:list="[1,2,3,4,5]"></rate>
          </div>
        </span>
        <span class="rate-main-right">
          <span class="rate-main-right-main">
            <div>
              <i class="iconfont icon-star"></i>
            </div>
            <div>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </div>
            <div>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </div>
            <div>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </div>
            <div>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </div>
          </span>
          <span class="process">
            <progress
              :percent="itme*100"
              color="#f3df29"
              stroke-width="15rpx"
              border-radius="10rpx"
              active="true"
              backgroundColor="#dbdbdb"
              v-for="(itme,index) in rate"
              :key="index"
            ></progress>
            <!-- <progress
              :percent="percent"
              color="#f3df29"
              stroke-width="10rpx"
              border-radius="10rpx"
              active="true"
              backgroundColor="#dbdbdb"
            ></progress>
            <progress
              :percent="percent"
              color="#f3df29"
              stroke-width="10rpx"
              border-radius="10rpx"
              active="true"
              backgroundColor="#dbdbdb"
            ></progress>
            <progress
              :percent="percent"
              color="#f3df29"
              stroke-width="10rpx"
              border-radius="10rpx"
              active="true"
              backgroundColor="#dbdbdb"
            ></progress>
            <progress
              :percent="percent"
              color="#f3df29"
              stroke-width="10rpx"
              border-radius="10rpx"
              active="true"
              backgroundColor="#dbdbdb"
            ></progress>-->
          </span>
          <span class="percent-rate">
            <percentrate :i="item" :key="index" v-for="(item,index) in rate"></percentrate>
            <!-- <span :key="index" v-for="(item,index) in rate">{{item*100}}%</span> -->
          </span>
        </span>
        <span class="absolute">{{donecount}}人评分</span>
      </div>
      <div class="rate-bottom">
        <span
          :key="index"
          v-for="(item,index) in list"
        >好于{{item.rank && item.rank}}的{{item.type && item.type}}</span>
      </div>
    </div>
    <div class="short-commit">
      <div class="short-commit-title">
        <span>短评</span>
        <span>51656</span>
      </div>
      <div class="short-commit-item" :key="index" v-for="(item,index) in interests">
        <span>
          <img :src="item.user.avatar" alt />
          <div>
            <span>{{item.user && item.user.name}}</span>
            <div>
              <rate :rating="item.rating && item.rating.value" :max="10" v-bind:list="[1,2,3,4,5]"></rate>
            </div>
          </div>
        </span>
        <span>
          <div>{{item && item.comment}}</div>
          <div>
            <i class="iconfont icon-dianzan"></i>
            <span>{{item && item.vote_count}}</span>
          </div>
        </span>
      </div>
      <!-- <div class="more">
        <a href="/pages/short_commit_datail/main">查看全部短评</a>
        <i class="iconfont icon-jiantou"></i>
      </div>-->
    </div>
  </div>
</template>
<script>
import rate from "@/components/rate.vue";
import percentrate from "@/components/percent-rate.vue";

export default {
  data() {
    return {
      rate: "",
      list: "",
      donecount: "",
      interests: ""
    };
  },
  components: {
    rate,
    percentrate
  },
  mounted() {
    // console.log(this.$mp.query);
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    fly.config.headers = { "content-type": "json" };
    fly
      .get(
        `https://frodo.douban.com/api/v2/movie/${Number(
          this.$mp.query.id
        )}/rating?apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      )
      .then(res => {
        // console.log(res.data);
        this.rate = res.data.stats.reverse();
        this.list = res.data.type_ranks;
        this.donecount = res.data.done_count;
        // console.log("rate", this.rate);
      })
      .catch(err => {});
    fly
      .get(
        `https://frodo.douban.com/api/v2/movie/${Number(
          this.$mp.query.id
        )}/interests?start=0&count=4&status=done&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      )
      // .get("http://192.168.43.122:8081/moock/interes.json")
      .then(res => {
        this.interests = res.data.interests;
        // console.log(this.interests);
      })
      .catch(err => {});
  },
  computed: {
    title() {
      return this.$mp.query.name;
    },
    rating() {
      return this.$mp.query.rating;
    },
    max() {
      return this.$mp.query.max;
    }
  }
};
</script>
<style lang="scss" scoped>
.rate {
  background: #fff;
  margin: 0 20rpx;
  margin-top: 30rpx;
  // border-radius: 10rpx;
  // border: 1rpx red solid;
  border-bottom: 1px rgb(207, 205, 205) solid;
  padding: 20rpx 15rpx;
  // height: 200rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .rate-title {
    padding: 0 15rpx;
    display: flex;
    justify-content: space-between;
    > span:nth-of-type(1) {
      font-size: 35rpx;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      span {
        font-size: 17rpx;
      }
    }
  }
  .rate-main {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 45rpx;
    .rate-main-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div:nth-of-type(1) {
        display: inline-block;
        font-size: 52rpx;
        //   height: 50rpx;
      }
      > div:nth-of-type(2) {
        display: inline-block;
        height: 50rpx;
        width: 55%;
      }
    }
    .rate-main-right {
      display: flex;
      width: 60%;
      .rate-main-right-main {
        display: flex;
        flex-direction: row;
        i {
          font-size: 20rpx;
          color: #747474;
        }
      }
      .process {
        width: 100%;
        margin-top: 7rpx;
        progress {
          // border: 1rpx red solid;
          background: #fff;
          margin-bottom: 8rpx;
          // line-height: 20rpx;
          // color: #ea5a49;
        }
      }
      .percent-rate {
        display: flex;
        flex-direction: column;
        font-size: 18rpx;
      }
    }
    .absolute {
      position: absolute;
      bottom: -23rpx;
      right: 84rpx;
      color: #888;
      font-size: 20rpx;
    }
  }
  .rate-bottom {
    span {
      display: block;
      text-align: right;
      font-size: 22rpx;
      color: #888;
    }
  }
}

.short-commit {
  margin: 10rpx 15rpx;
  background: #fff;
  // border: 1px red solid;
  padding: 30rpx 25rpx;
  border-radius: 10rpx;
  .short-commit-title {
    display: flex;
    // justify-content: space-between;
    margin-bottom: 20rpx;
    > span:nth-of-type(2) {
      display: flex;
      align-items: flex-end;
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

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_t0b4tfbx9m.eot?t=1561971756496"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_t0b4tfbx9m.eot?t=1561971756496#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,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")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_t0b4tfbx9m.woff?t=1561971756496")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_t0b4tfbx9m.ttf?t=1561971756496")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_t0b4tfbx9m.svg?t=1561971756496#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-yingyinhuiyuan:before {
  content: "\e638";
}

.icon-tushu:before {
  content: "\e602";
}

.icon-yinle:before {
  content: "\e632";
}

.icon-starmarkhighligh:before {
  content: "\e90d";
}

.icon-star1:before {
  content: "\e633";
}

.icon-xiaoxi-:before {
  content: "\e601";
}

.icon-star:before {
  content: "\e600";
}

.icon-dianzan:before {
  content: "\e67b";
}

.icon-xiangkan:before {
  content: "\e730";
}

.icon-jiantou:before {
  content: "\e664";
}

.icon-star-copy:before {
  content: "\e90e";
}
</style>
