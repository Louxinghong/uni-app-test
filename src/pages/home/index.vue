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
  </view>
</template>

<script>
import { uniSwiperDot, uniSwipeAction } from '@dcloudio/uni-ui'
import { setTimeout } from 'timers'
export default {
  components: {
    uniSwiperDot,
    uniSwipeAction
  },
  data() {
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
      ]
  	}
  },
  onLoad(options) {
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
</style>
