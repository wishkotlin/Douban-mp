<template>
  <div>
    <img
      @click="priview(item.image.normal.url)"
      :mode="'scaleToFill'"
      @load="wxAutoImageCal($event,index)"
      :src="item.image.normal.url"
      :style="{width: scale.imageWidth * 2 + 'rpx',height: scale.imageheight * 2 + 'rpx'}"
      alt
      srcset
    />
    <!-- @load="wxAutoImageCal($event,index)" -->
    <!-- :style="{width: item.image.normal.width / 3 + 'px',height: item.image.small.height / 3 + 'px'}" -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      scale: []
    };
  },
  props: {
    item: {
      type: Object
    },
    photos: {
      type: Array
    }
  },
  mounted() {
    // console.log(this.item);
  },
  methods: {
    wxAutoImageCal(e, index) {
      // console.log(e.mp, index, "索引");
      e = e.mp;
      //获取图片的原始长宽
      var originalWidth = e.detail.width;
      var originalHeight = e.detail.height;
      var windowWidth = 0,
        windowHeight = 0;
      var autoWidth = 0,
        autoHeight = 0;
      var results = {};
      // console.log(originalWidth, originalHeight);
      wx.getSystemInfo({
        success: res => {
          // console.dir(res);
          windowWidth = res.windowWidth;
          windowHeight = res.windowHeight;
          //判断按照那种方式进行缩放
          // console.log("windowWidth" + windowWidth);
          autoWidth = windowWidth;
          // console.log("autoWidth" + autoWidth);
          autoHeight = autoWidth * originalHeight / originalWidth;
          // console.log("autoHeight" + autoHeight);
          // 高度比宽度高
          if (originalWidth < originalHeight) {
            // results.imageWidth = autoWidth / 2.4;
            // results.imageheight = autoHeight / 2.4;
            // originalWidth / originalHeight = x / 200
            let rate = originalWidth * 200 / originalHeight;
            results.imageWidth = rate;
            results.imageheight = 200;
            results.index = index;
          } else {
            let rate = originalWidth * 200 / originalHeight;
            results.imageWidth = rate;
            results.imageheight = 200;
            results.index = index;
          }

          // if (originalWidth > windowWidth) {
          //   //在图片width大于手机屏幕width时候
          //   autoWidth = windowWidth;
          //   console.log("autoWidth" + autoWidth);
          //   autoHeight = autoWidth * originalHeight / originalWidth;
          //   console.log("autoHeight" + autoHeight);
          //   // results.imageWidth = autoWidth;
          //   // results.imageheight = autoHeight;
          //   // results.index = index;
          //   if (originalWidth < originalHeight) {
          //     results.imageWidth = autoWidth / 3;
          //     results.imageheight = autoHeight / 3;
          //     results.index = index;
          //   } else {
          //     results.imageWidth = autoWidth;
          //     results.imageheight = autoHeight;
          //     results.index = index;
          //   }
          // } else {
          //   autoWidth = windowWidth;
          //   console.log("autoWidth" + autoWidth);
          //   autoHeight = autoWidth * originalHeight / originalWidth;
          //   console.log("autoHeight" + autoHeight);
          //   if (originalWidth < originalHeight) {
          //     results.imageWidth = originalWidth / 3;
          //     results.imageheight = originalHeight / 3;
          //     results.index = index;

          //     //否则展示原来的数据
          //     // results.imageWidth = originalWidth;
          //     // results.imageheight = originalHeight;
          //     // results.index = index;
          //   } else {
          //     results.imageWidth = autoWidth;
          //     results.imageheight = autoHeight;
          //     results.index = index;
          //   }
          // }
        }
      });
      //   console.log("宽高结果", results);
      //   this.scale.push(results);
      //   console.log(this.scale);
      // return results;
      // console.log("result", results);
      this.scale = results;
      // console.log("scale", this.scale);
    },
    priview(url) {
      // console.log(url, urls);
      wx.previewImage({
        current: url, // 当前显示图片的http链接
        urls: this.urls // 需要预览的图片http链接列表
      });
    }
  },
  computed: {
    urls() {
      let photos = this.$props.photos;
      // console.log("photos", photos);
      let temp = [];
      if (photos) {
        for (let i of photos) {
          // console.log("photo", i);
          temp.push(i.image.normal.url);
        }
        // console.log(temp);
        return temp;
      } else {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
