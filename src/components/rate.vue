<template>
  <div class="rating">
    <div class="com-rating">
      <div class="ratingli" v-for="item in [1,2,3,4,5]" :key="item">
        <div
          class="rating-on"
          :style="{width: (rating >= max / 5 * item
          ? 1
          : rating < max / 5 * (item - 1)
            ? 0
            : ((rating * 10) % (max / 5 * 10)) / (max / 5 * 10)) + 'em'}"
        >
          <i class="iconfont icon-star-copy"></i>
        </div>
        <div class="rating-off">
          <i class="iconfont icon-star"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: String
    },
    max: {
      type: String
    }
  },
  computed: {
    // width() {
    //   return `width: ${
    //     this.rating >= this.max / 5 * item
    //       ? 1
    //       : this.rating < this.max / 5 * (item - 1)
    //         ? 0
    //         : ((this.rating * 10) % (this.max / 5 * 10)) / (this.max / 5 * 10)
    //   }em`;
    // },
    list() {
      return [1, 2, 3, 4, 5];
    }
  },
  mounted() {
    console.log("rate");
  }
};
</script>

<style scoped>
.ratingli {
  width: calc(100% / 5);
  display: flex;
  /* justify-content: center;
  align-items: center; */
}
.rating {
  width: 100%;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_ra1pk2lp9x.eot?t=1561615184170"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_ra1pk2lp9x.eot?t=1561615184170#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOAAAsAAAAAB2QAAAMxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqCNIIZATYCJAMMCwgABCAFhG0HQRt4BsgusG3Y0zC4JmexLcXG20UkS/4YxcPXGO393T0Tw6NZFdNG9EqCqzSGFGjWxSteaScD43RwExsdVxEBJ+lvYBIcyX5HRm+saUosa3NXBTjJoIqcJ0jTgZFTOz+hZt/NyTUzwChK2IATCFAiCXiH/7h3+lfi81mWyxzj/F8UYEJdQGMvsgJJ0BvGLmiJmwnUGiQA3H3/2oOkwuwViNu6uoZkRq80lIZqobJiYqmJp2Kq0+MEeBJ8P/46imqSiswcuP/q3Q4uf/jP50ermnkIwXRWsGlkzAMoxPlK+0mRKD4PrFZtHbUGQKUipKm8q6sEWI6vSSutvzySkIhKZnE92IQSmR/gWCWXJoAsgt95HhR0CqIySp4G7iFK+8FJLEyg7n4PDsywBh2EQc9O4xap14brjU319eP77WFmV//2OnvYKR00vjk7SBl0EM+n6P32McJggtFrmyAOB3mDjl7/4ZvUYWdnUzu+363st3fjXNNwMBz2+73+CXrsXg7flm6nm7VqMAxeXrweaL+MhRjHr+R+sUiq513bS9XF4u6JqionQgx8HSNSc7UzQtywfsuL3cnbv7/JqiqbWWDY1txfVH9vy7AlLdD8wL4Pav7jysDl6Ackn33ZUj+f77WRvbE4nmZoMbOdFcCq/DpvACDfCn/6Gb+x6ftmp7ew+X8yU8Dn40pd4F9VdFdWn6MjePW1Sh8AhYtMQy6KXGNxIDs4MJpQa4VYzXS3uh+u7OhcTKjWkUBSZQCyauNoocxDhTqboFK1bVBrjia3Tpu0yM8vwqwaCKHZIiSNXkLW7AItlDuo0OkdKjVHhlpHo23BOpNxI72LaS20w0AJ40HXUWyTpMPSDqkHa81pUUAdEO/1EEpFknzqgRziKYZk8upRNqtgJO3aqAbbkWW5mEy7Bm2lEcuKdywWR6re1AgmbEjbhZE1QXZQwCcUt+VyKF51kS58voOoDixr3ECqsg8QtqfXj6REJB3QB7nTiXQr12S8UR3JEgoUwVw2pAZWYllxF0pWtzOQLdEQGxD1HBOjSpGu8sbySvsF8lgZ5oAcKXIUzXeya7btLFPTVc1yZNGcDgAAAAA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_ra1pk2lp9x.woff?t=1561615184170")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_ra1pk2lp9x.ttf?t=1561615184170")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_ra1pk2lp9x.svg?t=1561615184170#iconfont")
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

.icon-star:before {
  content: "\e600";
}

.icon-star-copy:before {
  content: "\e90e";
}

.com-rating {
  /* display: inline-block; */
  display: flex;
  font-size: 1.2em;
  letter-spacing: 0.3em;
  justify-content: center;
  align-items: center;
  /* width: 80%; */
}
.com-rating .rating-on,
.com-rating .rating-off {
  display: inline-block;
}
.com-rating .rating-on {
  color: #f3df29;
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.com-rating .rating-off {
  color: #dbdbdb;
  padding: 0;
  margin: 0;
}
</style>
