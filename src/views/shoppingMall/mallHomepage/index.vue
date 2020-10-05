<template>
  <div class="content">
    <jc-title titleLeft="主推产品" titleHref="更多产品"></jc-title>
    <div class="layout">
      <div class="commodity" v-for="(item,id) of commodityData.slice(0,8)" :key="id">
        <img :src="item.img" alt="">
        <span class="trade-name">{{item.tradeName}}</span>
        <span class="small-name">{{item.smallName}}</span>
        <span class="money">{{item.money}}</span>
        <el-button size="mini" round type="info">加入收藏</el-button>
      </div>
    </div>
    <jc-title titleLeft="爆款产品" titleHref="更多产品"></jc-title>
    <div class="layout">
      <div class="commodity" v-for="(item,id) of commodityData.slice(0,8)" :key="id">
        <img :src="item.img" alt="">
        <span class="trade-name">{{item.tradeName}}</span>
        <span class="small-name">{{item.smallName}}</span>
        <span class="money">{{item.money}}</span>
        <el-button size="mini" round type="info">加入收藏</el-button>
      </div>
    </div>
    <jc-title titleLeft="titleLeft" titleHref="更多产品"></jc-title>
    <div class="layout">
      <div class="commodity" v-for="(item,id) of commodityData.slice(0,8)" :key="id">
        <img :src="item.img" alt="">
        <span class="trade-name">{{item.tradeName}}</span>
        <span class="small-name">{{item.smallName}}</span>
        <span class="money">{{item.money}}</span>
        <el-button size="mini" round type="info">加入收藏</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import jcTitle from '@/components/title'

export default {
  name: 'index',
  components: {
    jcTitle
  },
  data () {
    return {
      titleHref: '更多产品',
      titleLeft: '畅销产品',
      commodityData: [
        {
          id: 1,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 2,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 3,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 4,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 5,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 6,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 7,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 8,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 9,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        },
        {
          id: 10,
          img: require('@/assets/img/stool.jpg'),
          tradeName: '大厦及大苏dasds大厦及大苏dasds大厦及大苏dasds',
          smallName: 'dsadsadsadsadas',
          money: 50
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  @include bgColor;
}
.layout{
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .commodity{
    width: 170px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .trade-name{
    font-size: 14px;
    @include ellipsis;
    width: 140px;
    text-align: center;
  }
  .small-name{
    font-size: 12px;
    width: 140px;
    text-align: center;
    @include ellipsis;
  }
  .money{
    font-size: 16px;
    color: red;
    text-align: center;
    width: 140px;
    @include ellipsis;
  }
  img{
    width: 100px;
    height: 100px;
  }
}
</style>
