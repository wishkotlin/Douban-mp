<template>
  <div name="rating">
    <div class="com-rating">
      <div v-for="item in [1,2,3,4,5]" :key="item">
        <div class="rating-on" :style="width">
          <i class="iconfont icon-starmarkhighligh"></i>
        </div>
        <div class="rating-off">
          <i class="iconfont icon-starmarkhighligh"></i>
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
    width() {
      return `width: ${
        this.rating >= this.max / 5 * item
          ? 1
          : this.rating < this.max / 5 * (item - 1)
            ? 0
            : ((this.rating * 10) % (this.max / 5 * 10)) / (this.max / 5 * 10)
      }em`;
    },
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
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_nbah2z5d6p.eot?t=1561527877821"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_nbah2z5d6p.eot?t=1561527877821#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAM4AAsAAAAABwQAAALsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqCBIFvATYCJAMICwYABCAFhG0HOhsfBsguIScbXqQtwXIyt7I1ElqeXvzAc8UPEA+fY+j7SUoIkocOQRG49XztFEgFKPTsHND5wsA4nbvY6LioENeEJEYwAToZjXrXP0I/f81l4PQBXeGoktb64/3LFhzwgKaHa2aAUZSgG6OrMYhgSf9enfPdEJnM7uCa+ivxPKC5ZQRHAg5sOqDoIttABuYbxm4ieICbCdQaxAE8tbvcaz0F6BWI56ZOar2CTVGcYLVQ2TCxiNcqVKeXCYBX/PvxiyiqSSoykHbh4ZbXFj+AYXn/eN8diqAvp4EzjYx5AIW40qg7pyl988BqI1/LKMCxkoMfc3xMaYf94xFEJZBYD/p12jPRMeNRExMosvaSmkeTDiUtUMPldmuaRglDbTu9iVMBpcGk0US7KMIrza01esr+QcONmTaBEvYnZBcHGEYUFUbYtFmU6uxBG8SUy5ki2lWpi1XUwQcPeweN3UxnVXrVBQ/85nGl+qQLUY6+7D3I3O+5a3utujv734xEsBtLv7al7pqH1zeYDes3+zu33n5/a0XWhQWG1dlmQP/dzMAOjEr5hf2sLv6vDKcuWYraQg3H8te8+pd/4//3sXnNdOOjVwV8W7qcW44VwwwA1feiD/4pfWBJiZlAnkpIbzQklyZ5Emqhk+OAqdXDVFHHC4RCtY7XMFQZyCCrNo4quHmoUGcdKlXbhlpzlNPrtHFpilKDWTENQrMFSBq9hazZOarg7qFCp3eo1BwZal2LtgXrTMaTwckISYIcaBBMg+8JpEwGIvmKeuqQKM/k+CdGsekElScoB/foYbTEkNina4lHgHD5Luy07dBxfAhcvoUskQxPEsxlvrnpTRKzu7WBkyKISCAO6JWADePzCFo9Mah8/grpUg4i6sgYUT6hSMysHwjxCAag9jxvUMajXOOW0Wk8EgIwi/hcQKG1Qw6HDzia21kQk5BYJ3gCc3xYyTyUJ20vcH8g1ckBiFPAtKz5hYdELoqwDVM3HCyt1QA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_nbah2z5d6p.woff?t=1561527877821")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_nbah2z5d6p.ttf?t=1561527877821")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_nbah2z5d6p.svg?t=1561527877821#iconfont")
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

.com-rating {
  /* display: inline-block; */
  display: flex;
  font-size: 1.2em;
  letter-spacing: 0.3em;
}
.com-rating .rating-on,
.com-rating .rating-off {
  display: inline-block;
}
.com-rating .rating-on {
  color: black;
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
