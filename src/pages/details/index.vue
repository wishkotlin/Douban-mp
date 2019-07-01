<template>
  <div class="main" v-if="flag">
    <top :title="title" :show_bol="false" :my_class="false"></top>
    <div class="head">
      <div class="head-left">
        <img id="img" v-bind:mode="'aspectFit'" :src="list.cover && list.cover.image.small.url" alt />
        <!-- <canvas canvas-id="img-canvas"></canvas> -->
      </div>
      <div class="head-right">
        <div class="title">{{list.title}}</div>
        <div class="orititle">{{list.original_title}}</div>
        <div class="genres">
          <span v-for="(item,index) in list.genres" :key="index">{{item}}</span>
          /
          <span>{{list.countries[0] && list.countries[0]}}</span>
          /
          <span>{{list.durations[0] && list.durations[0]}}</span>
        </div>
        <div class="watch">
          <span>
            <i class="iconfont icon-xiangkan"></i> 想看
          </span>
          <span>
            <i class="iconfont icon-star1"></i> 看过
          </span>
        </div>
      </div>
    </div>
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
          <div>{{list.rating && list.rating.value}}</div>
          <div>
            <rate :rating="list.rating && list.rating.value" :max="10" v-bind:list="[1,2,3,4,5]"></rate>
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
              stroke-width="10rpx"
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
        </span>
      </div>
    </div>
    <div class="intro" v-if="list.intro">
      <div class="intro-title">简介</div>
      <div class="intro-content" :class="{more: !more}">{{list && list.intro}}</div>
      <div class="showmore" @click="moresummary">{{morecon}}</div>
    </div>
    <div class="actor" v-if="list.directors">
      <div class="actor-title">影人</div>
      <scroll-view class="actor-scroll" scroll-x="true">
        <div class="actor-wrapper">
          <div class="directors" :key="index" v-for="(item,index) in list.directors">
            <img v-bind:mode="'aspectFit'" :src="item.avatar.normal" alt />
            <div class="directors-name">{{item.name}}</div>
            <div class="directors-title">导演</div>
          </div>
          <div class="directors" :key="index" v-for="(item,index) in list.actors">
            <img v-bind:mode="'aspectFit'" :src="item.avatar.normal" alt />
            <div class="directors-name">{{item.name}}</div>
            <div class="directors-title">演员</div>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="photo" v-if="photos.length !== 0">
      <div class="photo-title">
        <span>预告片/剧照</span>
        <span>
          全部300
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>
      <scroll-view class="photo-scroll" scroll-x="true">
        <div class="photo-wrapper">
          <div v-if="list.trailer" class="photo-video">
            <video
              id="myVideo"
              :src="list.trailer && list.trailer.video_url"
              controls
              :poster="list.trailer && list.trailer.cover_url"
              v-if="list.trailer"
            ></video>
          </div>
          <div class="photo-con" :key="index" v-for="(item,index) in photos">
            <!-- <img
              @click="priview(itme.thumb,list.photos)"
              @load="wxAutoImageCal($event,index)"
              :src="itme.thumb"
              alt
              srcset
            >-->
            <scale :item="item" :photos="photos"></scale>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="short-commit">
      <div class="short-commit-title">
        <span>短评</span>
        <span>
          <span>全部51656</span>
          <i class="iconfont icon-jiantou"></i>
        </span>
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
      <div class="more">
        <span>查看全部短评</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
  </div>
</template>
<script>
import analyze from "rgbaster";
import rate from "@/components/rate.vue";
import scale from "@/components/scale.vue";
const dataArr = [];
export default {
  data() {
    return {
      title: "",
      list: "",
      color: "",
      image: "",
      rate: "",
      flag: false,
      more: false,
      photos: [],
      scale: [],
      interests: ""
    };
  },
  created() {},
  async onReady() {
    // let analyze = require("../../../static/rgbaster/rgbaster.js");
  },
  components: {
    rate,
    scale
  },
  onLoad() {
    Object.assign(this.$data, this.$options.data());
    // fetch some data
    dataArr.push({ ...this.$data });
  },
  onUnload() {
    dataArr.pop();
    const dataNum = dataArr.length;
    if (!dataNum) return;
    Object.assign(this.$data, dataArr[dataNum - 1]);
  },
  methods: {
    moresummary() {
      this.more = !this.more;
    }
  },
  mounted() {
    Object.assign(this.$data, this.$options.data());
    this.title = this.$mp.query.name;
    // console.log(this.$mp.query.id);
    // console.log(this.title);
    // console.log("color", this.color);

    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    fly.config.headers = { "content-type": "json" };
    fly
      // .get("http://192.168.43.122:8081/moock/subject-1291561.json")
      .get(
        `https://frodo.douban.com/api/v2/movie/${Number(
          this.$mp.query.id
        )}?apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      )
      // .get(
      //   `https://douban.uieee.com/v2/movie/subject/${Number(this.$mp.query.id)}`
      // )
      .then(response => {
        // console.log();
        // console.log(response);
        this.list = response.data;
        // console.log(this.list);
        // let temp = this.list;
        // this.rate = response.data.rating.details;
        // this.image = response.data.images.small;
        // this.photos = response.data.photos;
        // temp = Object.assign({}, temp, response.data);
        // this.list = temp;
        this.flag = true;
        // const utils = require("../../../static/color/utils.js").utils;
        // const imagePath = response.data.images.small;
        // const canvasId = "img-canvas";
        // utils.colors(imagePath, canvasId, {
        //   success: res => {
        //     console.log("dominant: " + res.dominant);
        //     console.log("secondary: " + res.secondary);
        //     console.log("palette: " + res.palette);

        //     const fontColor = utils.isLight(res.dominant)
        //       ? "#000000"
        //       : "#ffffff"; //根据主要颜色设置字体颜色
        //     const bgColor = utils.rgbToHex(res.dominant);
        //     this.color = bgColor;
        //     console.log("bgColor: " + bgColor);
        //     //设置导航栏背景色及标题颜色
        //     wx.setNavigationBarColor({
        //       frontColor: fontColor,
        //       backgroundColor: bgColor,
        //       animation: {
        //         duration: 400,
        //         timingFunc: "easeIn"
        //       }
        //     });
        //   },
        //   width: 375,
        //   height: 280
        // });

        // console.log("img", this.list.images);
      })
      .catch(function(error) {
        console.log(error);
      });
    fly
      .get(
        `https://frodo.douban.com/api/v2/movie/${Number(
          this.$mp.query.id
        )}/rating?apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      )
      .then(res => {
        // console.log(res.data);
        this.rate = res.data.stats.reverse();
      })
      .catch(err => {});
    fly
      .get(
        `https://frodo.douban.com/api/v2/movie/${Number(
          this.$mp.query.id
        )}/photos?start=0&count=20&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      )
      .then(res => {
        this.photos = res.data.photos;
        // console.log(this.photos);
      })
      .catch(err => {});
    fly
      // .get(
      //   `https://frodo.douban.com/api/v2/movie/${Number(
      //     this.$mp.query.id
      //   )}/interests?start=0&count=4&status=done&apiKey=054022eaeae0b00e0fc068c0c0a2102a`
      // )
      .get("http://192.168.43.122:8081/moock/interes.json")
      .then(res => {
        this.interests = res.data.interests;
        console.log(this.interests);
      })
      .catch(err => {});
    // console.log(analyze);
    // this.color = analyze("/static/img/1.jpg");
    // console.log(this.color);
  },
  computed: {
    // images() {
    //   console.log(this.list.images);
    //   return this.list.images;
    // }
    //废弃
    percent() {
      // console.log("1", this.rate);
      let sum = 0;
      for (let i in this.rate) {
        // console.log(i);
        sum += this.rate[i];
      }
      // console.log(sum);
      let temp = [];
      for (let i in this.rate) {
        temp.unshift(this.rate[i] / sum * 100);
      }
      // console.log(temp);
      return temp;
    },
    //废弃
    summary() {
      // console.log(this.list);
      if (this.list.summary) {
        // console.log(this.list.summary);
        // console.log(this.list.summary.replace(/©豆瓣/g, ""));
        return this.list.summary.replace(/(©豆瓣)/gm, "");
      } else {
        return "";
      }
    },
    morecon() {
      let temp = "";
      this.more === false ? (temp = "展开") : (temp = "收起");
      return temp;
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  background: #fafaf2;
  .head {
    display: flex;
    margin-top: 40rpx;
    padding: 0 20rpx;
    .head-left {
      img {
        width: 200rpx;
        height: 288rpx;
        border-radius: 10rpx;
        //   border: 1px red solid;
      }
    }
    .head-right {
      padding-left: 20rpx;
      width: 70%;
      .title {
        font-size: 45rpx;
        font-weight: bold;
      }
      .orititle {
        font-size: 30rpx;
        color: rgb(104, 104, 104);
      }
      .genres {
        font-size: 30rpx;
        color: rgb(104, 104, 104);
      }
      .watch {
        display: flex;
        font-size: 30rpx;
        font-weight: bold;
        justify-content: space-between;
        margin-top: 50rpx;
        padding: 0 20rpx;
        span {
          //   border: 1px solid rgb(80, 79, 79);
          background: #fff;
          box-shadow: 1px 1px 1px rgba(158, 158, 158, 0.3);
          padding: 15rpx 55rpx;
          border-radius: 10rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            padding-right: 10rpx;
            color: rgba(255, 187, 0, 0.856);
          }
        }
      }
    }
  }
  .rate {
    background: #fff;
    margin: 0 20rpx;
    margin-top: 30rpx;
    border-radius: 10rpx;
    // border: 1rpx red solid;
    padding: 20rpx 15rpx;
    height: 200rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .rate-title {
      padding: 0 15rpx;
      display: flex;
      justify-content: space-between;
      > span:nth-of-type(1) {
        font-size: 23rpx;
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
        width: 40%;
        .rate-main-right-main {
          display: flex;
          flex-direction: row;
          i {
            font-size: 17rpx;
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
      }
    }
  }
  .intro {
    padding: 20rpx 20rpx;
    .intro-title {
      font-size: 40rpx;
      font-weight: bold;
      margin-bottom: 15rpx;
    }
    .intro-content {
      // font-size: 30rpx;
      // white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // -webkit-line-clamp: 4;
      // -webkit-box-orient: vertical;
      font-size: 30rpx;
    }
    .more {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      font-size: 30rpx;
    }
    .showmore {
      text-align: right;
      font-size: 30rpx;
      color: rgb(114, 114, 114);
    }
  }
  .actor {
    padding: 20rpx 20rpx;
    .actor-title {
      font-size: 40rpx;
      font-weight: bold;
    }
    .actor-scroll {
      width: 100%;
      margin-top: 20rpx;
      margin-left: -20rpx;
      .actor-wrapper {
        height: 320rpx;
        display: flex;
        flex-direction: row;
        .directors {
          height: 320rpx;
          display: inline-block;
          padding: 0 20rpx;
          img {
            height: 229rpx;
            width: 160rpx;
            border-radius: 10rpx;
            // border: 1px solid red;
          }
          .directors-name {
            font-size: 25rpx;
          }
          .directors-title {
            font-size: 20rpx;
            color: #8a8a8a;
          }
        }
      }
    }
  }
  .photo {
    padding: 20rpx 20rpx;
    .photo-title {
      font-size: 30rpx;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      > span:nth-of-type(1) {
        font-size: 40rpx;
      }
      > span:nth-of-type(2) {
        color: #747474;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .photo-scroll {
      margin-left: -20rpx;
      margin-top: 20rpx;
      .photo-wrapper {
        height: 400rpx;
        display: flex;
        flex-direction: row;
        video {
          height: 400rpx;
          // display: inline-block;
          // padding: 0 20rpx;
          // position: unset;
        }
        .photo-con {
          height: 400rpx;
          display: inline-block;
          padding: 0 3rpx;
          img {
            height: 345rpx;
            // height: 316rpx;
            // width: 500rpx;
            // height: 240rpx;
            // width: 320rpx;
            // border: 1px red solid;
            // border-radius: 10rpx;
          }
        }
        .photo-video {
          height: 400rpx;
          display: inline-block;
          padding: 0 20rpx;
          // border: 1rpx red solid;
        }
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
