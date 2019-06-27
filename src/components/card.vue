<template>
  <div>
    <p class="card">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["text"],
  mounted() {
    console.log(this.$props);
  }
};
</script>

<style>
.card {
  padding: 10px;
}
</style>
