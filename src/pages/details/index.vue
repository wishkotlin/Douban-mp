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
    <div class="intro">
      <div class="intro-title">简介</div>
      <div class="intro-content" :class="{more: !more}">{{list && list.intro}}</div>
      <div class="showmore" @click="moresummary">{{morecon}}</div>
    </div>
    <div class="actor">
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
    <div class="photo">
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
      scale: []
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
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.eot?t=1561693323573"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.eot?t=1561693323573#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAckAAsAAAAADMgAAAbXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEFgqLIIkkATYCJAMoCxYABCAFhG0HgQkb6QrIDiWJkMAAYKAAYATw++Huyfe5o9o9ukQ8FNriEpAJkRLGSqX5NDT073HO9xs0LWq3IlombqVJJlZJFZpSgni6OWxewaQwM0NmIv9z2PiW3Qaa/7ady5jLxtwV9cIo4IDWGhYVF1kAmoptLQVOFHF70aMJaM1JhC4OGyMBF5mqDih6rVFJwSVikQtIQa0vM7bMIrQcHNVxEe8C8M75/bADJ4MLiIoE6rGuPR2qgAHrsOWOcf850xIHXHcu3LYj4TCQCW8zPSuAearDjqbNur6DR0CfWlSu8551ftbjmeJ5h5fu//+zDuudoki3drUw6DPEV9sMVEpRUgiaTfjHqwglkKbH0q1QvGUdDD4V64hPyTpPzdF2gkmCtjNMCmh7QK2JVgE+DRsd+NRsuZlkSesOu2pgC0e1xDAIayBeBhV7SSzJwiFqovM3hQFPAeaYgIW2jY6PRx5u+OhQr1xuDe5etA45mtbzPYrXwrToV1QsNwRQNpM/abXDzGVISTiPkiNUdakbDl3GKW7PMH6yI19i2j80ho8EOy6EAsqVF7syuy+HIESakM7hEtnUJGluJlpbKUzOuyS5ncU511ZdtS6GtPqTZfuK9gRKzL4S+5qKSj/C4qaXVO7dGUvZnmdq2L2+Opi0BvRbE0ZY7P5kY5TE3BhAVSeQ1nL7U+wOoWy2YosfUdqVsJT6ZhfFkBI7XpSwblsIRa6rC0Hlh2Mpqvx88dkggmg4uLUmTkKUbolbIyMs/OKAAFu5/xTKZPO3NvrLyDmL7L6SWfZAc6kfMUmoGvLvjWLI4y39DjX1OcD1Pdjcn5CZjrc2X21uuoDvaolgJBRJUQQhIXLnsz8utGTNrnUh5ailhSxqijMX+a9rwRd6X1xYaZDf1uaxzUTA/t621Q2lpSW+e3rYfe0xMY0xLeS1lk7BVv9t1GZUFjf33N86HZnWb7oROlO0E0YcIPobEQ7R36SzZmf60aVcoMIcqwxQ9X5wxVvpvdbQDXOmSrtN1VeWuLvsWjZxl4/5GC7u8LEWw8b+rf9Wnz23fw2I4nRDF3HHhwguHasytEmGR96HpT54Iu6QFAoiu9F00z4Qz3okgnQR48GTX8ptQyCJ/i4ajAboJyUhMWJINOje93Fqw4BUxJ3sgcwkMUpC372HQO9B+z321NnIa3ErRqj21WJx2Ar1vhErnnuKOnOKvbeiUuka1OTz2FkWcGzynDnGnAGy7599gppcleJJQntOQd/6Y1PevDk6ZXtfQWQPwkkrKrNUW6/FO/1R7xte71Q/HMY/Tu/vvlWVBX3fFwbk3tXf148KDl+VSkxLfLOprsuzPFSx4/hnUfK9s+69PfYm3/0cf6IhoLXLZrvo7ZguqeZ2+7/n7nR1X+BpsyZ2FJzcs4jqjURttnq3y/nZa1rg2Ck53706rioTqRee2NNZEGId786f8ysPDt5iGE83w6mnqU5lecbcMtzFE72+/4MoakDIILdwwaDggfOiPgwY4AkuH27JQ97Xbn7djr2qCS1jzebI2eHQTVEOVmvn5UVM6HgsRhQ+IhhNMrIEEo2JuHwx5uJl6c1FJEpNR5O7/Jw4q4dZrCggR8i6NXTJsUwcecx/lXUDnWeOi+u5ZOn4DsP7NM1IvTdn3AwKBsf82sYcXuep4TMZozwvgfNeEJXpzYG8MGoBOStq4UEyo7K8IfHLutAhoWt1ug9tP+i0Qe66WVIoXAO1Iq1i/QH+73cQg6hceoFx1AvpNNbJbcqPovskrvJ6AZBe8W6A/1cypENIPIq3sDCWXMq+F75jZ3r0+erSXaYzPvfeWEy2/1w38VqkspQBW4pVAORvd7mqan8TMsQVJcGY6aSMz7XPQpKuVe1/EswXGHKPdKOVpZyuGw0gqsxCUtuNyJjDUOichlLtDLQOGb59Z5gRJmRX4KB5AoIBmyHq8wmSARcRGXMXCmPeQmkgYNC6E3z22NkbNPhgIy1laYVQli3UyBm9UrezuFssplXpyVJjWO5QSNqYpgkKO7brEE8Op/W0sYt10jJUnVhWKVQamRThMHE8OjmZERqMjJaWs+3ULGvo1b69MmvddnImBXAXGNGkWItTQUgmW1BDjqGnnJ6FJ35ejKaSLpmUsaDrR5BEM0qjmb1QR+10qIAYrtFX6jqVyjQZVDphyaUkNBqNGCmEhpGLlqzFGEKG7MW0aHKsdtQNIga9tKeJlFU17YbXpZxt+ZXdQz1PG3gIQw7IETkhZ+SCXBGO+ND3RqNXGXOp0zXZ6VK9I5ue5qscY2XJtGcaKzWm6Bk6tUalTpbUjpTW0TlLI2VgbuvwU7nImXqVTqp31rpRlkkHAA==")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.woff?t=1561693323573")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.ttf?t=1561693323573")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.svg?t=1561693323573#iconfont")
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
