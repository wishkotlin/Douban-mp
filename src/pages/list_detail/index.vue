<template>
  <div class="out">
    <top :title="'豆瓣Top250'" :show_bol="false" :my_class="false" :home="false"></top>
    <div class="top_title">
      <div
        class="cover"
        :style="{'background-image': '-webkit-cross-fade(url(' + subject_collection.header_bg_image + '), url(' + subject_collection.header_fg_image + '), 95%)'}"
      ></div>
      <!-- <img
        :mode="'aspectFill'"
        class="cover"
        :src="list.subject_collection && list.subject_collection.header_bg_image"
        alt
      />
      <img
        class="cover top"
        :src="list.subject_collection && list.subject_collection.header_fg_image"
        alt
      />-->
    </div>

    <!-- 第二种方法 两张图片 透过 图片显示 另一张图片 -->
    <!-- <img class="one" src="https://img3.doubanio.com/view/photo/photo/public/p2309770674.jpg" />
    <img
      class="two"
      src="https://img3.doubanio.com/img/roboport/files/file-movie_top250-big_cover.png?ts=1561946704.56"
    />-->

    <div class="main">
      <div class="top">
        <div class="top-left">
          <span>看过0部</span>
          <span>/</span>
          <span>共250部</span>
          <div class="line"></div>
        </div>
        <div class="top-right">登录查看成就</div>
      </div>
      <a
        :href="'/pages/details/main?id='+item.id+'&name='+item.title"
        class="item"
        :key="index"
        v-for="(item,index) in subject_collection_items"
      >
        <div class="num">No.1</div>
        <div class="item-card">
          <div class="cover">
            <img v-bind:mode="'scaleToFill'" :src="item.cover.url" alt />
            <i class="iconfont icon-xiangkan"></i>
          </div>
          <div class="item-card-item">
            <span>{{subject_collection_items && item.title}}</span>
            <div>
              <rate
                :rating="subject_collection_items && item.rating.value"
                :max="10"
                v-bind:list="[1,2,3,4,5]"
              ></rate>
              <span>9</span>
            </div>
            <span>{{subject_collection_items && item.info}}</span>
            <!-- <span>美国 / 犯罪</span>
            <span>邦特 / 蒂姆罗宾斯 摩根里曼</span>-->
          </div>
          <div class="watch">
            <i class="iconfont icon-star1"></i>
            <span>看过</span>
          </div>
        </div>
        <div class="title">{{subject_collection_items && item.description}}</div>
      </a>
    </div>
  </div>
</template>
<script>
import rate from "@/components/rate.vue";
export default {
  components: {
    rate
  },
  data() {
    return {
      list: "",
      subject_collection: "",
      subject_collection_items: ""
    };
  },
  mounted() {
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    fly
      .get("http://192.168.43.122:8081/moock/top250.json")
      .then(response => {
        console.log(response);
        this.list = response.data;
        this.subject_collection = response.data.subject_collection;
        this.subject_collection_items = response.data.subject_collection_items;
        console.log(this.subject_collection_items);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    bg() {
      if (this.list) {
        console.log(this.list.subject_collection.header_fg_image);
        return this.list.subject_collection.header_fg_image;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.out {
  background: #e2e2e2;
}
.main {
  // padding: 0 20rpx;
  background: #e2e2e2;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 30rpx;
    padding-top: 15rpx;
    background: #fff;
    padding-left: 20rpx;
    padding-right: 20rpx;
    .top-left {
      position: relative;
      .line {
        position: absolute;
        background: rgb(177, 177, 177);
        width: 100rpx;
        height: 10rpx;
        border-radius: 5rpx;
        bottom: -10rpx;
      }
      > span:nth-of-type(1) {
        font-weight: bold;
      }
      > span:nth-of-type(3) {
        color: rgb(168, 168, 168);
      }
    }

    .top-right {
      // border: 1rpx red solid;
      background: rgba(247, 183, 89, 255);
      color: rgba(60, 30, 15, 255);
      padding: 10rpx 15rpx;
      border-radius: 24rpx;
      font-size: 25rpx;
      box-shadow: 1rpx 5rpx 10rpx rgba(173, 173, 173, 0.5);
    }
  }
  .item {
    padding-top: 55rpx;
    background: #fff;
    height: 425rpx;
    margin-bottom: 20rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    .num {
      display: inline-block;
      // border: 1rpx red solid;
      padding: 5rpx 10rpx;
      color: rgba(158, 96, 1, 255);
      background: rgba(255, 203, 125, 255);
      border-radius: 5rpx;
      font-size: 30rpx;
      margin-bottom: 15rpx;
    }
    .item-card {
      display: flex;
      img {
        width: 170rpx;
        height: 250rpx;
      }
      .item-card-item {
        padding-left: 35rpx;
        display: flex;
        flex-direction: column;
        width: 55%;
        > span:nth-of-type(1) {
          font-size: 35rpx;
          font-weight: bold;
        }
        > span:nth-of-type(2) {
          font-size: 25rpx;
          color: rgb(175, 175, 175);
        }
        // > span:nth-of-type(3) {
        //   font-size: 25rpx;
        //   color: rgb(175, 175, 175);
        // }

        > div:nth-of-type(1) {
          width: 37%;
          display: flex;
          align-items: center;

          > span {
            padding-left: 15rpx;
            font-size: 30rpx;
            color: rgb(175, 175, 175);
          }
        }
      }
      .watch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: #d6d6d6 dashed 1rpx;
        width: 20%;
        > span {
          font-size: 30rpx;
          color: rgb(250, 129, 8);
          padding-top: 15rpx;
        }
        > i {
          color: rgb(250, 129, 8);
        }
      }
      .cover {
        position: relative;
        height: 125px;
        .icon-xiangkan {
          position: absolute;
          // top: 15rpx;
          // left: 15rpx;
          padding: 20rpx 20rpx;
          color: #fff;
          background: #5f5f5f6e;
          top: 0;
        }
      }
    }
    .title {
      background: rgba(247, 247, 247, 255);
      color: rgba(156, 156, 156, 255);
      font-size: 30rpx;
      padding: 10rpx 15rpx;
      border-radius: 8rpx;
      margin-top: 20rpx;
    }
  }
}
.one {
  position: absolute;
  border: 1px red solid;
  opacity: 0.6;
  width: 400px;
  height: 250px;
  filter: alpha(opacity=50);
}
.two {
  opacity: 0.97;
  width: 400px;
  height: 250px;
}
.top_title {
  .cover {
    background-blend-mode: multiply, screen;
    // background-image: -webkit-cross-fade(url(https://img3.doubanio.com/view/photo/photo/public/p2309770674.jpg), url(https://img3.doubanio.com/img/roboport/files/file-movie_top250-big_cover.png?ts=1561946704.56), 50%);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 377rpx;
    // filter: blur(8rpx);
  }
  .top {
    position: absolute;
  }
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.eot?t=1561693323573"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_kfwtlosgqm9.eot?t=1561693323573#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,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")
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
