<template>
  <div>
    <div class="mine-top">
      <img
        v-bind:mode="'aspectFit'"
        src="https://ws1.sinaimg.cn/large/8660d1bbly1g4gjoufe67j20v90hhdgg.jpg"
        alt
      >
      <div class="btn">登录</div>
    </div>
    <div class="main">
      <div class="mine-top-title">
        <span>我的书影音</span>
        <span>
          登录查看
          <i class="iconfont icon-jiantou jiantou"></i>
        </span>
      </div>
      <div class="mine-top-con" v-for="(item,index) in list" :key="index">
        <div class="mine-top-con-one">
          <img class="img" v-bind:mode="'aspectFit'" :src="item.img" alt>
          <!-- <div class="img"></div> -->
          <!-- <i class="iconfont icon-yingyinhuiyuan img"></i> -->
        </div>
        <span class="line" :class="{'line-bottom': !(index >= list.length - 1)}">
          <div class="mine-top-con-two">
            <span>{{item.titleone}}</span>
            <span>
              <span>{{item.titletwo}}</span> 看过
            </span>
          </div>
          <div class="mine-top-con-three">
            <span>{{item.contentone}}</span>
            <span>{{item.contenttwo}}</span>
          </div>
          <div class="mine-top-con-four">
            <div>
              <div class="start">立即开启</div>
              <!-- <div class="jiantou">></div> -->
              <i class="iconfont icon-jiantou jiantou"></i>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: []
    };
  },
  mounted() {
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    fly
      .get("http://192.168.43.122:8081/moock/mine.json")
      .then(response => {
        console.log(response);
        this.list = response.data.info;
        console.log(this.list);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style lang="scss" scoped>
.line {
  width: 85%;
  display: flex;
}
.line-bottom {
  border-bottom: 1px solid rgba(207, 206, 206, 0.3);
}
.mine-top {
  position: relative;
  img {
    width: 100%;
    height: 420rpx;
  }
  .btn {
    width: 50%;
    height: 85rpx;
    text-align: center;
    // border: 1px solid red;
    position: absolute;
    // vertical-align: middle;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 85rpx;
    color: rgb(2, 105, 7);
    border-radius: 40rpx;
    background: #fff;
    box-shadow: 1rpx 2rpx 5rpx rgba(107, 107, 107, 0.4);
    // display: inline-block;
  }
}
.main {
  display: flex;
  flex-direction: column;
  font-size: 25rpx;
  // border: 1px solid red;
  padding: 0 20rpx;
  .mine-top-title {
    height: 80rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px pink solid;
    font-size: 30rpx;
  }
  .mine-top-title span:nth-of-type(1) {
    color: rgb(49, 49, 49);
    font-weight: bold;
    font-size: 34rpx;
  }
  .mine-top-title span:nth-of-type(2) {
    font-size: 28rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    // color: rgb(71, 71, 71);
    color: rgb(148, 148, 148);
  }
  .mine-top-con {
    display: flex;
    flex-direction: row;
    // border: 1px blue solid;
    height: 150rpx;
    .img {
      width: 100rpx;
      height: 100rpx;
      // background: black;
      // border: 1px solid red;
    }
    .mine-top-con-one {
      // width: calc(100% / 4);
      width: 15%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-bottom: 20rpx;
      .img {
        width: 50rpx;
        height: 50rpx;
        // background: black;
        // border: 1px solid red;
      }
    }
    .mine-top-con-two {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 30%;
      &:nth-child(1) {
      }
    }
    .mine-top-con-two span:nth-of-type(2) span {
      font-size: 40rpx;
      color: rgb(71, 71, 71);
    }
    .mine-top-con-two span:nth-of-type(2) {
      color: rgb(71, 71, 71);
    }

    .mine-top-con-three {
      display: flex;
      flex-direction: column;
      width: 40%;
      padding-bottom: 25rpx;
      justify-content: flex-end;
      color: rgb(151, 146, 146);
    }
    .mine-top-con-four {
      display: flex;
      // flex-direction: column;
      width: 30%;
      align-items: flex-end;
      padding-bottom: 25rpx;
      justify-content: flex-end;
      .start {
        background: rgb(241, 238, 238);
        padding: 8rpx;
        border-radius: 6rpx;
      }
      .jiantou {
        font-size: 40rpx;
        color: rgb(146, 146, 146);
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1262132_10taojxat90q.eot?t=1561631155021"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1262132_10taojxat90q.eot?t=1561631155021#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVcAAsAAAAAClAAAAUQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDcgqGbIVkATYCJAMgCxIABCAFhG0HdhvqCFFUb1pkPwtyMrLXLBfT2Z9nUEJ+O/G+Vowi9g7i8bu+r5NkenrgNXnFXki/lh7AjblMH0jVjyLMxopBPdtcmwKg8TNulpyZUBta5yTGLQkhqW9xIfKu/tcBqFBclSy3QaUGSrq7K2wUTM59yJZiS2qxWtzknntVM3GCzbNYXNa6n7U2JRbKC4YDFKDdsabVSvUWpMBlrcLcGGBFXfbFEMBLISogLVq9z2GEwd5KAElJVAlGBSumgyPYBqvhQKNlKS5sNU/dBJZEPy9fU01sULg09o5d4h5kuP6ML4N66v+AAQEJxXJuQDwMNFABMCDTG70T6SbZCmi8+uMMXQD82CjMZ+qzap/V+WzEl8H//4fPKFACajsv+Ak71WDhQi3odmPYPw+xYHo/6Bk5Gz7DM2PpKDDjAiroiLAazGhgHZgR4AiI4IYvA2YMMAgH1gY9QBgIngBDhtAb/Gkag6BQCBIO+7Wrb8MXcBrZARo3B+Y0FrLEEuGKzkYXmFb8igNMxK5BkapjTAeYDe/FpTJZujd3gW5oKbCP0VOIvjg8RU10YawviiSmc3XF7i7PkoTYLOG2Ph98v/z/jR+Ouw3xJuQJtV53aVJVpOYR2UtQFmA8b3eErMSl9c5hY3ZNudFkt+rJVBXXuZKVsUhTA8pTsXs2VVvh59rJXauhFSEbLlYagkg+v3p/PCfwXl8/0/v5P7/5v2X700XcsklwPeAKFS4NIBllZAnFrsfXf3s3Ghfd5hGtonHZL0qddxcF7cNLuh6O+e9hB9m+TuuO/274bcO4mY3XUl4NzDjpVvWd0KHy6ozCKfwlH5b59mO3Kt0LUJ4jMnDacboVDFVgaFGtGPRX3P4WzHB6C82lSdp6JnST9F5Cs9e/d0rwrmvJvSqbpq+nQncxTp6f+pGNr53L14rfL7OsTfzXOl1GL0s43maZcqISVy87r5etivPkfRj74B6W+3zfGTO8ubmH/f5zLO9DT1y3NYZz/Q03nO/3zTfn+h1o6C+coEifZavGxn/eL2v9k3C89QZrQ2uY/rG0E+2LHwu/z9PTxUDG5U+Z1vKJWeUHXuJjWtrV2xK9m2w0CxT1N8vXdFaJHwJNROzlz4fn/37dnq8rOfccSWBau6ewFxXebi/QosC25OT/ij9kk8Sa7UOGQovdpk/rxvD/iYjcjDdVf6GnPu6mvqKrAajTqh6ATlZP4f/36rku+IP+Dgsqfbd2cKjBrxS6AeBZveP7Efl/qmEZ+V+GDFb8jj6TnyejMlS2zTbaAA/zR1ZkKeyWK0MBXmcEfsRglNdLEjkH14NgkzMDhZuCoLEpQTb0CuDCRw2wsGkMXsrT+nAfMbLoIsYDlGMWASHMHlAEOQOaMLfIhv4KXOTiW7AIiwYvvSR2Qh+lJNHbPIspYhmHjcPE4a6juI5oEjdOWY0tCvKqiLvkINQTWLVSlXLhiR0Oltgle7R65DgKxmW5NrYil2PLcjEjyzVYivYSnMg7rVw5rumd9oan2zChOQEMEcHIIMPIQRKRcHFQgskRk8r3T2FUYiyIoKOvLr6ECQjRZ0eqUokqA8hPemdQ36MsziZB5QiHCIVtiiPAxQZpBTdjOVkXJKN5lQEjEbFHwoS0xymV6bC4ofq97Qn7Sk8BXuzT2qJEixGXWOIWWzwExyU6qjdPi/U8JqfvjApTbb/UYrGY7VBgu2WmpquaxbjDsYnkWnZN7ZJhUiI5kRsDAA==")
      format("woff2"),
    url("//at.alicdn.com/t/font_1262132_10taojxat90q.woff?t=1561631155021")
      format("woff"),
    url("//at.alicdn.com/t/font_1262132_10taojxat90q.ttf?t=1561631155021")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1262132_10taojxat90q.svg?t=1561631155021#iconfont")
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

.icon-xiaoxi-:before {
  content: "\e601";
}

.icon-star:before {
  content: "\e600";
}

.icon-jiantou:before {
  content: "\e664";
}

.icon-star-copy:before {
  content: "\e90e";
}
</style>
