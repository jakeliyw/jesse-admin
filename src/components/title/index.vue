<template>
  <div class="bg-color">
    <span class="title-left">{{titleLeft}}</span>
    <span class="title-right">{{titleRight}}</span>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    titleLeft: {
      type: String,
      require: true,
      default: ''
    },
    titleRight: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.bg-color {
  background-color: #848383;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .title-left {
    color: #ffd04b;
    padding-left: 10px;
  }
  .title-right{
    color: white;
    padding-right: 10px;
  }
}
</style>
