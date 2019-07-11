<template>
  <view class="content">
    <view class="image-list">
      <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
        <swiper class="swiper-box" @change="change" autoplay="true">
          <swiper-item v-for="(item, index) in info" :key="index">
            <view>
              <image class="img-content" :src="item.content"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view>
    
    <view class="cont-content">
      <uni-swipe-action @click="bindClick" :options="options">
        <view class='cont'>向左滑动以查看效果</view>
      </uni-swipe-action>
    </view>

    <input class="search-content" type="text" v-model="chooseNum" placeholder="请输入要查找的ID">
    <button class="search-btn" type="primary" @click="getThisNews(chooseNum)">搜索</button>

    <uni-card
      class="article-card"
      v-for="(item, index) in newList"
      :title="item.title" 
      thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" 
      :extra="getNowDate"
      :note="username"
      :key="index"
    >
      <text class="article-content">
        {{ item.body }}
      </text>
    </uni-card>
  </view>
</template>

<script>
import { uniSwiperDot, uniSwipeAction, uniCard } from '@dcloudio/uni-ui'
import { setTimeout } from 'timers'
import { getNews } from '@/api/news'
import { mapState } from   'vuex'

export default {
  components: {
    uniSwiperDot,
    uniSwipeAction,
    uniCard
  },
  computed: {
    ...mapState('login',['username']),
    getNowDate() {
      const { year, month, day} = this.nowDate()
      return year.toString() + '-' + month.toString() + '-' + day.toString()
    }
  },
  data() {
    const { year, month, day } = this.nowDate()
  	return {
      title: 'Hello',
      info: [
        {
          content: '/static/my/one.jpg'
        }, 
        {
          content: '/static/my/two.jpg'
        }, 
        {
          content: '/static/my/three.jpg'
        }
      ],
      current: 0,
      mode: 'long',
      options: [
        {
          text: '取消',
          style: {
            backgroundColor: '#007aff'
          }
        },
        {
          text: '确认',
          style: {
            backgroundColor: '#dd524d'
          }
        }
      ],
      newList: [],
      chooseNum: '',
      year,
      month,
      day
  	}
  },
  async onLoad() {
    try {
      const newContent = await getNews()
      this.newList = newContent.slice(0, 10)
    } finally {

    }
    
    uni.startPullDownRefresh()
  },
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  methods: {
    change(e) {
      this.current = e.detail.current
    },
    bindClick(e) {
      if(e.text === '确认'){
        alert('123')
      }
    },
    async getThisNews(number) {
      console.log(number)
      try {
        const data = {
          id: number
        }
        this.newList = await getNews(data)
        console.log(this.newList)
      } finally {

      }
    },
    nowDate() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return {
        year,
        month,
        day
      }
    }
  }
}
</script>

<style>
.image-list {
  width: 100%;
  text-align: center;
}
.img-content {
  height: 300upx;
  width: 95%;
}

.cont-content {
  margin-top: 20upx;
}

.search-content {
  border-bottom: 1upx solid black;
  padding: 10upx;
  margin: 20upx 10upx;
}
.article-card {
  margin: 40upx 20upx;
}
.article-content {
  font-size: 24upx;
}
</style>
