<template>
  <view class="container">
    <view class="search">
      <input class="txt-search" type="text" v-model="city" placeholder="请输入城市名称" />
      <button class="btn-search" type="primary" @click="onSearch">查询</button>
    </view>
    <view class="city-time">
      <view class="city">{{content.city}}</view>
      <view class="now-time">{{time}}</view>
    </view>

    <view class="wether">
      <view
        class="wether-content"
        v-for="(item, index) in content.data"
        :key="index"
        @click="goDetail(item)"
      >
        <view class="time">
          <text>{{item.date}}</text>
          <text>{{item.day}}</text>
        </view>
        <view class="tem">
          <span>{{item.tem}}</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getWether } from '@/api/wether'

export default {
  name: 'Wether',
  data () {
    return {
      city: '',
      content: [],
      time: '',
    }
  },
  watch: {},
  onLoad () {

  },
  mounted () {
    setInterval(() => {
      this.onTime()
    }, 1000)
  },
  methods: {
    async onSearch () {

      const search = {
        appid: '77993245',
        appsecret: 'HtnE33t1',
        version: 'v1',
        city: this.city
      }
      const data = await getWether(search)
      this.content = data
    },
    onTime () {
      this.time = new Date().toLocaleDateString() + '' + new Date().toLocaleTimeString()
    },
    goDetail (data) {
      uni.navigateTo({
        url: '/pages/wether/wetherDetail/index?data=' + encodeURIComponent(JSON.stringify(data))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .search {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20upx;

    .txt-search {
      display: inline-block;
      border-bottom: 2upx solid black;
      // padding: 20upx;
      // border-radius: 5px;
      width: 70%;
      height: 90upx;
      margin-left: 2.5%;
    }

    .btn-search {
      display: inline-block;
      width: 25%;
    }
  }
  .city-time {
    margin: 20upx 0 20upx 20upx;

    .city {
      font-size: 60upx;
      margin-bottom: 10upx;
    }

    .now-time {
      font-size: 30upx;
      color: rgb(170, 170, 170);
    }
  }

  .wether {
    padding: 0 10upx;
    .wether-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2upx solid rgb(141, 139, 139);
      padding: 20upx 10upx;

      .time {
        display: flex;
        flex-flow: column nowrap;
      }

      &:hover {
        color: #ffffff;
        background-color: rgb(139, 138, 138);
      }
    }
  }
}
</style>
