<template>
  <div>
    <top :title="title" :show_bol="false" :my_class="true" :home="false"></top>
    <div class="list">
      <div :key="index" v-for="(item,index) in in_theaters" class="item">
        <img :src="item.images.small" alt>
      </div>
    </div>
  </div>
</template>
<script>
const dataArr = [];
export default {
  data() {
    return {
      title: "",
      in_theaters: []
    };
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
  async mounted() {
    this.title = this.$root.$mp.query.title;
    let Fly = require("../../../static/fly/wx.umd.min.js"); //wx.js为您下载的源码文件
    let fly = new Fly();
    console.log(this.$mp.query, this.$root.$mp.query.title);
    wx.setNavigationBarTitle({
      title: decodeURI(this.$mp.query.title)
    });
    await fly
      .get(`http://192.168.43.122:8081/moock/${this.$mp.query.key}.json`)
      .then(response => {
        console.log(response);
        response.data.subjects && (this.in_theaters = response.data.subjects);
        response.data.entries && (this.in_theaters = response.data.entries);
        console.log(this.in_theaters);
      })
      .catch(function(error) {
        console.log(error);
      });
    // fly
    //   .get(`http://127.0.0.1:8081/moock/in_theaters.json`)
    //   .then(response => {
    //     console.log(response);
    //     response.data.subjects && (this.in_theaters = response.data.subjects);
    //     response.data.entries && (this.in_theaters = response.data.entries);
    //     console.log(this.in_theaters);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    console.log("title", this.title);
  },
  computed: {
    // title() {
    //   return this.$mp.query.title;
    // }
  },
  watch: {}
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30rpx;
}
.item {
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rpx;
}
.item img {
  width: 193rpx;
  height: 261rpx;
}
</style>
