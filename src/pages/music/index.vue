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
            <span>{{formatterCurrentTime(currentTime)}}</span>
            <progress :percent="progress" active active-mode="forwards" stroke-width="3" />
            <span>{{formatterDurationTime(durationTime)}}</span>
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
      currentTime: 0,
      durationTime: 0,
      progress: 0,
      innerAudioContext: {},
      time: ''
    }
  },
  computed: {
    playingMusic () {
      return this.$store.state.music.playingMusic
    },
    changeStatus () {
      return this.$store.state.music.changeMusicNums
    }
  },
  watch: {
    changeStatus: {
      handler: function (val) {
        if (val !== 0) {
          console.log(310/60)
          if (JSON.stringify(this.innerAudioContext) !== '{}') {
            clearInterval(this.time)
            this.currentTime = 0
            this.innerAudioContext.destroy()
          }

          this.innerAudioContext = uni.createInnerAudioContext()
          this.innerAudioContext.autoplay = true
          this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
          this.onPlay()
          this.innerAudioContext.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
          })
        }
        
      },
      immediate: true
    },
    currentTime: {
      handler: function (val) {
        if ((val / 100).toFixed(0) === this.durationTime) {
          clearInterval(this.time)
        }
      }
    }
  },
  methods: {
    onClickItem (index) {
      if (this.whichSelected !== index) {
        this.whichSelected = index
      }
    },
    onPlay () {
      const speed = 10
      this.innerAudioContext.onPlay(() => {
        this.durationTime = this.innerAudioContext.duration.toFixed(0)
        this.time = setInterval(() => {
          this.currentTime++
          this.progress = ((this.currentTime / 100) / this.durationTime).toFixed(2) * 100
        },speed)
      })
    },
    formatterCurrentTime (time) {
      const transTime = (time / 100).toFixed(0)
      if (transTime < 60) {
        return '00:' + (transTime < 10 ? '0' + transTime : transTime)
      }
      if (transTime >= 60) {
        const secondTime = (transTime / 60).toFixed(0)
        return (secondTime < 10 ? '0' + secondTime : secondTime) + ':' + (transTime - 60 * secondTime)
      }
    },
    formatterDurationTime (time) {
      if (time < 60) {
        return '00:' + (time < 10 ? '0' + time : time)
      }
      if (time >= 60) {
        const secondTime = (time / 60).toFixed(0)
        return (secondTime < 10 ? '0' + secondTime : secondTime) + ':' + (time - 60 * secondTime)
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
