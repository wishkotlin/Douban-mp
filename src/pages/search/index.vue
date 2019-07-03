<template>
  <div>
    <top title="搜索" :show_bol="false" :my_class="true"></top>
    <view class="search-wrap">
      <van-search class="search" @change="model" :value="inputval" placeholder="搜索" />
    </view>
    <div class="short-commit" v-if="inputval.length > 0">
      <!-- <div class="short-commit-title">
        <span>短评</span>
        <span>
          <span>全部51656</span>
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>-->
      <a
        :href="'/pages/details/main?id='+item.id+'&name='+item.title"
        class="short-commit-item"
        :key="index"
        v-for="(item,index) in list"
      >
        <span>
          <img v-bind:mode="'aspectFit'" :src="item.pic.normal" alt />
          <!-- <div>
            <span>{{item.user && item.user.name}}</span>
            <div>
              <rate :rating="item.rating && item.rating.value" :max="10" v-bind:list="[1,2,3,4,5]"></rate>
            </div>
          </div>-->
        </span>
        <span>
          <div>{{item && item.title}}</div>
          <div class="rate">
            <rate :rating="item.rating && item.rating.value" :max="10" v-bind:list="[1,2,3,4,5]"></rate>
            <span>{{item.rating && item.rating.value}}</span>
          </div>

          <div>
            <!-- <i class="iconfont icon-dianzan"></i> -->
            <span>{{item && item.card_subtitle}}</span>
          </div>
        </span>
      </a>
      <!-- <a
        :href="'/pages/short_commit_datail/main?id='+id+'&name='+title+'&rating='+ (list.rating && list.rating.value) +'&max=10'"
        class="more"
      >
        <div>查看全部短评</div>
        <i class="iconfont icon-jiantou"></i>
      </a>-->
    </div>
  </div>
</template>

<script>
// import card from "@/components/card";
// import _ from "lodash";
import utils from "../../../static/utils.js";
import rate from "@/components/rate.vue";
export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      value: "",
      list: "",
      timeout: null,
      inputval: "",
      _lastTime: null,
      _nowTime: ""
    };
  },

  components: {
    // card
    rate
  },

  methods: {
    throttle(fn, gapTime) {
      let _lastTime = null;

      return () => {
        let _nowTime = +new Date();
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
          console.log(fn);
          fn();
          _lastTime = _nowTime;
        }
      };
    },

    // model: utils._throttle(e => {
    //   let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    //   let fly = new Fly();
    //   fly.config.headers = { "content-type": "json" };
    //   fly
    //     .get("http://192.168.43.122:8081/moock/search.json")
    //     // .get(
    //     //   `https://frodo.douban.com/api/v2/search?q=${
    //     //     e.mp.detail
    //     //   }&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
    //     // )
    //     .then(res => {
    //       console.log(res);
    //       this.list = res.data.subjects;
    //       // this.list = Object.assign({}, this.list, res.data);
    //       console.log("list", this.list);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     }),
    //     (this.inputval = e.mp.detail);
    //   console.log(e.mp.detail);
    // }, 1000),

    model(e) {
      // this._lastTime = null;
      console.log(this._lastTime, this._nowTime);
      this.inputval = e.mp.detail;
      let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
      let fly = new Fly();
      fly.config.headers = { "content-type": "json" };

      this._nowTime = +new Date();
      if (this._nowTime - this._lastTime > 1000 || !this._lastTime) {
        console.log("执行");
        fly
          // .get("http://192.168.43.122:8081/moock/search.json")
          .get(
            `https://frodo.douban.com/api/v2/search?q=${
              e.mp.detail
            }&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
          )
          .then(res => {
            console.log(res);
            this.list = res.data.subjects;
            // this.list = Object.assign({}, this.list, res.data);
            console.log("list", this.list);
          })
          .catch(err => {
            console.log(err);
          });
        this._lastTime = this._nowTime;
      }
    },

    // model(e) {
    //   console.log(e.mp.detail);
    //   let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    //   let fly = new Fly();
    //   fly.config.headers = { "content-type": "json" };

    //   // console.log("hello");
    //   // console.log(this);

    //   // console.log(e.mp.detail);
    //   this.throttle(
    //     fly
    //       .get(
    //         `https://frodo.douban.com/api/v2/search?q=${
    //           e.mp.detail
    //         }&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
    //       )
    //       .then(res => {
    //         console.log(res);
    //         this.list = res.data.subjects;
    //         console.log(this.list);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       }),
    //     1000
    //   );
    // },

    // model(e) {
    //   console.log(e.mp.detail);
    //   let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    //   let fly = new Fly();
    //   fly.config.headers = { "content-type": "json" };
    //   fly
    //     .get(
    //       `https://frodo.douban.com/api/v2/search?q=${
    //         e.mp.detail
    //       }&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
    //     )
    //     .then(res => {
    //       console.log(res);
    //       this.list = res.data.subjects;
    //       console.log(this.list);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
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
    flex-direction: row;
    border-bottom: 1rpx rgba(221, 221, 221, 0.699) solid;
    > span:nth-of-type(1) {
      display: flex;
      margin-bottom: 15rpx;
      // border: 1px red solid;
      img {
        width: 120rpx;
        height: 150rpx;

        // border-radius: 50rpx;
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
      font-size: 24rpx;
      width: 80%;
      > div:nth-of-type(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        font-size: 32rpx;
        font-weight: bold;
        padding-left: 10rpx;
      }
      .rate {
        width: 25%;
        padding-left: 10rpx;
        display: flex;
        > span:nth-of-type(1) {
          padding-left: 10rpx;
          color: rgb(175, 175, 175);
        }
      }
      > div:nth-of-type(3) {
        display: flex;
        margin-top: 10rpx;
        // justify-content: center;
        align-items: center;
        > span:nth-of-type(1) {
          padding-left: 10rpx;
          color: #888;
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
.search {
  width: 100%;
}
.search-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90rpx;
  color: #fff;
  background: #f6f6f6;
}
.search {
  flex: 1;
  /* margin: 0 24rpx; */
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
