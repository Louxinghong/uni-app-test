<template>
  <view>
    <view class="control-content">
      <uni-segmented-control
        :current="whichSelected"
        :values="items"
        @clickItem="onClickItem"
        style-type="button"
        active-color="rgb(0, 122, 255)"
      ></uni-segmented-control>

      <view class="play-content">
        <image class="play-img" :src="playingMusic.musicImgSrc"></image>
        <view class="play-name">
          <text>{{playingMusic.name}}</text>
          <view class="play-time">
            <span>{{currentTime}}</span>
            <progress percent="60" active stroke-width="3" />
            <span>{{durationTime}}</span>
          </view>
        </view>
      </view>

      <view v-show="whichSelected === 0">
        <PlayMusic></PlayMusic>
      </view>
      <view v-show="whichSelected === 1">
        <input class="search" confirm-type="search" placeholder="请输入搜索内容" />
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import { uniSegmentedControl } from '@dcloudio/uni-ui'
import PlayMusic from './components/MyMusic.vue'

export default {
  components: {
    uniSegmentedControl,
    PlayMusic
  },
  data () {
    return {
      items: ['我的', '发现'],
      whichSelected: 0,
      durationTime: 0,
      innerAudioContext: {}
    }
  },
  computed: {
    playingMusic () {
      return this.$store.state.music.playingMusic
    },
    changeStatus () {
      return this.$store.state.music.changeMusicNums
    },
    currentTime () {
      if (JSON.stringify(this.innerAudioContext) !== '{}') {
        return this.innerAudioContext.currentTime
      }
      return 0
    }
  },
  watch: {
    changeStatus: {
      handler: function (val) {
        if (val !== 0) {
          if (JSON.stringify(this.innerAudioContext) !== '{}') {
            this.innerAudioContext.destroy()
          }

          this.innerAudioContext = uni.createInnerAudioContext()
          this.innerAudioContext.autoplay = true
          this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
          this.innerAudioContext.onPlay(() => {
            // console.log(innerAudioContext)
            console.log('开始播放')
            this.durationTime = this.innerAudioContext.duration
          })
          // innerAudioContext.onStop(() => {
          //   console.log('i am onStop')
          //   innerAudioContext.stop()
          //   //播放停止，销毁该实例
          //   innerAudioContext.destroy()
          // })
          // innerAudioContext.onEnded(() => {
          //   console.log('i am onEnded')
          //   //播放结束，销毁该实例
          //   innerAudioContext.destroy()
          //   console.log('已执行destory()')
          // })
          this.innerAudioContext.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
            // innerAudioContext.destroy()
          })
        }
        
      },
      immediate: true
    }
  },
  methods: {
    onClickItem (index) {
      if (this.whichSelected != index) {
        this.whichSelected = index
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.control-content {
  position: sticky;
  top: 88upx;
  padding: 30upx 0upx;
  z-index: 1;
  background-color: #ffffff;

  .search {
    margin: 40upx;
    border-bottom: 1px solid black;
  }
}

.play-content {
  display: flex;
  flex-flow: row nowrap;
  padding: 10upx 30upx;

  .play-img {
    height: 100upx;
    width: 100upx;
    border-radius: 50%;
  }

  .play-name {
    display: flex;
    margin-left: 20upx;
    padding: 20upx;
    flex-flow: column nowrap;
    width: 100%;
    font-size: 25upx;

    text {
      text-align: center;
      margin-bottom: 10upx;
    }

    .play-time {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      .uni-progress {
        width: 70%;
      }
    }
  }
}
</style>
