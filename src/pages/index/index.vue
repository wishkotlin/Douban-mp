<template>
  <div>
    <top title="首页" :show_bol="true" :my_class="true" :home="true"></top>
    <div class="search-wrap">
      <!-- <van-search class="search" :value="value" placeholder="搜索"/> -->
      <a class="nav" href="/pages/search/main">
        <div class="fsearch" hover-class="hover_search">
          <span class="search-btn">
            <i class="iconfont icon-xiaoxi-"></i>搜索
          </span>
        </div>
      </a>
    </div>
    <div v-if="loade">
      <div class="hot" :key="index" v-for="(item,index) in in_theaters">
        <!-- 影院热映 -->
        <div class="Cinema">
          <text>{{item.subject_collection && item.subject_collection.name}}</text>
          <a class="more" hover-class="none">
            <text>查看更多 ></text>
          </a>
        </div>
        <scroll-view scroll-x="true">
          <div class="uploadWrap" :scroll-x="true">
            <a class="upload_Item" :key="key + 1" v-for="(i,key) in  item.subject_collection_items">
              <!-- navigator：页面跳转链接 -->
              <div class="upload_Item_img loade"></div>
              <!-- <img class="upload_Item_img" :src="i.cover.url && i.cover.url" /> -->
              <text>{{i.title && i.title}}</text>
              <div class="number-rate-out" :class="{'no-star': !i.rating}">
                <!-- <d-rate
                  :rating="i.rating && i.rating.value"
                  :max="i.rating && i.rating.max"
                  v-bind:list="[1,2,3,4,5]"
                  v-if="i.rating"
                ></d-rate>-->
                <!-- <div class="munber-rate">
                  <ratevalue :i="i"></ratevalue>
                </div>-->
                <!-- <div class="munber-rate" :class="{'no-star-rate': !i.rating}" v-if="!i.rating">暂无评分</div> -->
              </div>
            </a>
          </div>
        </scroll-view>
      </div>
    </div>
    <div v-if="!loade">
      <div class="hot" :key="index" v-for="(item,index) in in_theaters">
        <div class="Cinema">
          <text>{{item.subject_collection && item.subject_collection.name}}</text>
          <a
            class="more"
            :href="'/pages/more/main?title=' + item.subject_collection.name + '&key=' + item.subject_collection.id"
            hover-class="none"
          >
            <text>查看更多 ></text>
          </a>
        </div>
        <scroll-view scroll-x="true">
          <div class="uploadWrap" :scroll-x="true">
            <a
              :href="'/pages/details/main?id='+i.id+'&name='+i.title"
              class="upload_Item"
              :key="key + 1"
              v-for="(i,key) in  item.subject_collection_items"
            >
              <img class="upload_Item_img" :src="i.cover.url" />
              <text>{{i.title}}</text>
              <div class="number-rate-out" :class="{'no-star': !i.rating}">
                <d-rate
                  :rating="i.rating && i.rating.value"
                  :max="i.rating && i.rating.max"
                  v-bind:list="[1,2,3,4,5]"
                  v-if="i.rating"
                ></d-rate>
                <div class="munber-rate">
                  <ratevalue :i="i"></ratevalue>
                </div>
                <div class="munber-rate" :class="{'no-star-rate': !i.rating}" v-if="!i.rating">暂无评分</div>
              </div>
            </a>
          </div>
        </scroll-view>
      </div>
    </div>

    <!-- <div>
      <view class="Cinema">
        <text>豆瓣热门</text>
        <a class="more" href="/pages/more/main?title=豆瓣热门&key=coming" hover-class="none">
          <text>查看更多 ></text>
        </a>
      </view>
      <scroll-view scroll-x="true">
        <view class="uploadWrap" :scroll-x="true">
          <view class="upload_Item" :key="index" v-for="(item,index) in coming">
            <img class="upload_Item_img" :src="item.images.large" />
            <text>{{item.title}}</text>
          </view>
        </view>
      </scroll-view>
    </div>-->

    <!-- <card :text="111"></card> -->
    <!-- <card :text="111"></card> -->
    <!-- <button> -->
    <!-- <a href="/pages/counter/main">点击</a> -->
    <!-- </button> -->
  </div>
</template>

<script>
// import card from "@/components/card";
// import Fly from "/static/fly/wx.umd.min.js";
import rate from "@/components/rate.vue";
import card from "@/components/card.vue";
import ratevalue from "@/components/ratevalue.vue";
export default {
  components: {
    dRate: rate,
    card,
    ratevalue
  },
  data() {
    return {
      loade: true,
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      value: "",
      in_theaters: [
        {
          subject_collection: {
            name: "影院热映"
          },
          subject_collection_items: [
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            }
          ]
        },
        {
          subject_collection: {
            name: "豆瓣热门"
          },
          subject_collection_items: [
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            }
          ]
        },
        {
          subject_collection: {
            name: "近期热门剧集"
          },
          subject_collection_items: [
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            }
          ]
        },
        {
          subject_collection: {
            name: "近期热门综艺节目"
          },
          subject_collection_items: [
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            }
          ]
        },
        {
          subject_collection: {
            name: "畅销图书"
          },
          subject_collection_items: [
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            },
            {
              cover: {
                url: ""
              },
              rating: {
                value: "",
                max: 10
              }
            }
          ]
        }
      ],
      coming: []
    };
  },
  async mounted() {
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    function movie_showing() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    function movie_hot_gaia() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/movie_hot_gaia/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    function tv_hot() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/tv_hot/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    function tv_variety_show() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/tv_variety_show/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    function book_bestseller() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/book_bestseller/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    function music_single() {
      return fly.get(
        "https://frodo.douban.com/api/v2/subject_collection/music_single/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a"
      );
    }

    await fly
      .all([
        movie_showing(),
        movie_hot_gaia(),
        tv_hot(),
        tv_variety_show(),
        book_bestseller(),
        music_single()
      ])
      .then(
        fly.spread(
          (
            movie_showing,
            movie_hot_gaia,
            tv_hot,
            tv_variety_show,
            book_bestseller,
            music_single
          ) => {
            this.in_theaters = [];
            this.in_theaters.unshift(
              movie_showing.data,
              movie_hot_gaia.data,
              tv_hot.data,
              tv_variety_show.data,
              book_bestseller.data
              // music_single.data
            );
            this.loade = false;
            // this.coming = movie_hot_gaia.data;
            console.log(this.in_theaters);
            //两个请求都完成
          }
        )
      )
      .catch(function(error) {
        console.log(error);
      });
    // fly
    //   .get("http://192.168.43.122:8081/moock/in_theaters.json")
    //   .then((response) => {
    //     console.log(response);
    //     this.in_theaters = response.data.subjects;
    //     console.log(this.in_theaters);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },

  methods: {
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

<style scoped>
.hot {
  height: 426rpx;
}
.search-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-rate-out {
  display: flex;
  width: 65%;
  justify-content: space-evenly;
}
.munber-rate {
  display: inline-block;
  font-size: 21rpx;
  padding-left: 10rpx;
}
scroll-view {
  height: 330rpx;
}
.rate {
  width: 70%;
}
.more {
  display: inline-block;
  margin-right: 10rpx;
  z-index: 10;
}
.more text {
  color: #42bd56;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fsearch {
  height: 60rpx;
  width: 96%;
  background: #fff;
  display: flex;
  justify-content: center;
  /* margin: 0 10rpx; */
  border-radius: 10rpx;
  align-items: center;
}
/* .fsearch:focus {
  background: #42bd56;
} */
.fsearch span {
  font-size: 30rpx;
  color: rgb(119, 118, 118);
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
  background: #42bd56;
  justify-content: center;
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

.hover_search {
  opacity: 0.9;
  background: #aaf1b6;
}

/* 影院热映 */
.Cinema {
  display: flex;
  justify-content: space-between;
  float: left;
  width: 100%;
  height: 60rpx;
  /* background: #f90; */
  margin: 20rpx auto 0;
  font-family: "黑体";
}
.Cinema text:nth-of-type(1) {
  /* margin-left: 3%; */
  font-size: 36rpx;
  margin-left: 23rpx;
}
.Cinema text:nth-child(2) {
  float: right;
  color: #67ba62;
  /* margin-right: 3%; */
  font-size: 33rpx;
}
.Cinema .more text {
  float: right;
  color: #67ba62;
  margin-right: 29rpx;
  margin-left: unset;
  /* margin-right: 3%; */
  font-size: 33rpx;
}
/* 图片滑动 */
.uploadWrap {
  /* float: left; */
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 330rpx;
}
.upload_Item {
  float: left;
  width: 200rpx;
  height: 330rpx;
  line-height: 40rpx;
  text-align: center;
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upload_Item_img {
  /* float: left; */
  width: 170rpx;
  height: 250rpx;
  margin: 0 0 0 20rpx;
  border-radius: 10rpx;
}
.loade {
  background: rgb(228, 228, 228);
}
.upload_Item text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 160rpx;
  font-size: 26rpx;
  text-align: left;
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_d1o723b2698.eot?t=1561617413087"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_d1o723b2698.eot?t=1561617413087#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPYAAsAAAAAB+gAAAOMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDIgqDGIJqATYCJAMQCwoABCAFhG0HSxvlBsgeA+7GSYoKnswMtZYYD1/7vZ67uw/CqBA9jw+rqBTQsXHo6mtsa3SFYSP+j99Zr+JS2RMW8peRmU6VXpqD4WKe/5/L6d1VlsD8dpbLHOP5vSjAKOCAxl4gAZc4NoxdtZQGvZlAt3mdiM6yCopBqcC9AvFS4BtAmdIrNaWhFeqSiUUhmgAybRopPgPgg//7+A9hoQRJlQEPPH+c2Qwpv+ClXjLg/wCodhEQjGeFPI2MDaAQ96X2O5IwvkGi21xOageoFSH9Er3U//8PMKZM5+tZ519eiywJmagBF/eCI5go/AKGk/klwkn81VmFexJAk9wjgdZNFbwHvgGmznpIksRmaweduvf0+fNWtSmd5l46a9eoHZ7FU1yLl6yYM9etZGqQOWPuzq1ty6ZrBy3dvnq+d+k0j6QVfiVTl7iXLmtVPGWZR9n8DqXTZnsftd2nbPr00VPdSmZGlkyd6UpKD19L2nclYc+AxL1Xk0saBx6+fvXi1Stn1NuutSDFZaVlZSUlxSXxTkvusWMnW15qNzGH37VQ0k4y0bArZ6KzUKsTx9i9iXM5ldcVl8eKRo9DFYMHs4Yejd+7TF1RcYXlCDXUJi4+VPnmzcHKzYna1AKofOLcHvzGS+3lfwy7shfLF2dDzZ/aWGgj3wP23iLEUWc79rSLfFYf2nsWfMQTqzX5QauyFJ80XaA2zTt1aKsPKSmOoPx6q8nn/cL1r4PYRcJxNQvWp64DG0CH5LgkDID0XRwHQH4hvvHvOslfvJrqHBK+KjVHXvMzbqjM93dIoV+ylWjN/1OO4gPXJLJE2FCKIWCKmfZBxWXvaEI3cdNB7mH3xlCOmcWE1lgMSWMOstYCWigbUOlxALXWIXRblz29xwhKIooKWDMUQBi0HpJ+PyAbdBYtlLtQGfcWaoMhgW634bJgj6UQ1OkUNzDcjBp7IqGJWDlqYuqgtBDzXc0NNCnyaaWY2oUQCg0KyaaysRXTMYbYu/FhjHGIo8SCssB22GwmyEaJETexIANjtrjgYK7sTUFNxAJqpyisAYM1Qxr1hAiaEFacW51R575fCON1ZdaA1hCa7KUwyk6oHwkVJKQFmi23tiJcyzV23fDCMAwH4VCEBZIFrJiZxAnEVt7OCGvCBDH0iNrECUaVuLbyoPmVlgfIk8vAA0uIRRKRVCSDwVesgVpolskg8AYzoyl6CA1E11laqAMA")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_d1o723b2698.woff?t=1561617413087")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_d1o723b2698.ttf?t=1561617413087")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_d1o723b2698.svg?t=1561617413087#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-starmarkhighligh:before {
  content: "\e90d";
}

.icon-xiaoxi-:before {
  content: "\e601";
}

.icon-star:before {
  content: "\e600";
}

.icon-star-copy:before {
  content: "\e90e";
}
.iconfont {
  font-size: 65rpx;
}

.no-star {
  width: 100%;
}
.no-star-rate {
  text-align: left;
  width: 100%;
}
</style>
