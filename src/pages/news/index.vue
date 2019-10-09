<template>
  <view>
    <view class="image-list">
      <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
        <swiper class="swiper-box" @change="change" :autoplay="true">
          <swiper-item v-for="(item, index) in info" :key="index">
            <view>
              <image class="img-content" :src="item.cover"></image>
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view>

    <view class="news-list">
      <view class="news-body" v-for="(item, index) in listData" :key="index" @click="goDetail(item.id)">
        <image class="news-image" :src="item.cover"></image>
        <view class="news-content">
          <view class="news-content-title">{{ item.title }}</view>
          <view class="news-content-author-time">
            <text>{{ item.author_name }}</text>
            <text>{{ item.published_at }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { uniSwiperDot } from '@dcloudio/uni-ui'
import { setTimeout } from 'timers'
import { getDcloudNews } from '@/api/news'

export default {
  components: {
    uniSwiperDot
  },
  data () {
  	return {
      info: [],
      current: 0,
      mode: 'long',
      maxId: '',
      reload: false,
      listData: [],
      alreadyExisted: false,
      newList: [],
      indicatorDots: true
  	}
  },
  async onLoad () {
    this.getList()
  },
  onPullDownRefresh () {
    this.last_id = ''
    this.reload = true
    this.getList()
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  methods: {
    change (e) {
      this.current = e.detail.current
    },
    async getList () {
      var data = {
        time: '',
        pageSize: ''
      }

      data.time = new Date().getTime() + ''
      data.pageSize = 50
     
      const newContent = await getDcloudNews(data)
      if(this.listData.length == 0) {
        this.listData = newContent
      }
      else {
        for(let i = 0; i < newContent.length; i++) {
          for(let j = 0; j < this.listData.length; j++) {
            if(newContent[i].id == this.listData[j].id) {
              this.alreadyExisted = true
              break;
            }
          }
          if(this.alreadyExisted == false) {
            this.newList.push(newContent[i])
          }
        }
        this.listData = this.newList.concat(this.listData)
      }

      this.info = this.listData.slice(0, 5)
    },
    goDetail (id) {
      var detailData = {
        id: '',
        postId: '',
        title: '',
        authorName: '',
        cover: '',
        content: '',
        publishedAt: ''
      }
      this.listData.forEach(e => {
        if(e.id == id) {
          detailData = {
            id: e.id,
            postId: e.post_id,
            title: e.title,
            authorName: e.author_name,
            cover: e.cover,
            content: e.content,
            publishedAt: e.published_at
          }
        }
      })
      
      uni.navigateTo({
        url: '/pages/news/newsDetail/newsDetail?data=' + encodeURIComponent(JSON.stringify(detailData))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.image-list {
  width: 100%;
  text-align: center;
}
.img-content {
  height: 300upx;
  width: 95%;
}
.news-image {
  width: 25%;
  height: 140upx;
}
.news-body {
  display: flex;
  justify-content: space-around;
  padding: 20upx;
  border-bottom: 1upx solid #a5a4a4;
}
.news-content {
  font-size: 30upx;
  width: 75%;
  display: flex;
  flex-flow: column nowrap;
  padding: 10upx 20upx;
}
.news-content-title {
  height: 84upx;
  font-size: 28upx;
  overflow: hidden;
}
.news-content-author-time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #949292;
  font-size: 20upx;
}
</style>
