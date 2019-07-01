<template>
  <div>
    <top :title="'豆瓣Top250'" :show_bol="false" :my_class="false" :home="false"></top>
    <div class="top_title">
      <img :mode="'aspectFill'" class="cover" :src="list[0] && list[0].images.medium" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  mounted() {
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    fly
      .get("http://192.168.43.122:8081/moock/top250.json")
      .then(response => {
        console.log(response);
        this.list = response.data.subjects;
        console.log(this.list);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.top_title {
  .cover {
    width: 100%;
    height: 430rpx;
    filter: blur(8rpx);
  }
}
</style>
