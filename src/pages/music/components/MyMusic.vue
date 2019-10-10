<template>
  <view class="container">
    <view class="play-music" v-for="(item, index) in myMusic" :key="index">
      <image class="music-img" :src="item.musicImgSrc"></image>
      <view class="music-name" @click="onPlayMusic(item)">
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import musicData from '@/static/data/music.json'
import { mapActions } from 'vuex'

export default {
  name: 'MyMusic',
  data () {
    return {
      myMusic: []
    }
  },
  mounted () {
    this.myMusic = musicData.musicData
  },
  methods: {
    onPlayMusic (item) {
      this.$store.dispatch('music/changeMusic', {data: item})
      this.$store.dispatch('music/changeStatus')
    }
  }
}
</script>

<style lang="scss" scoped>
.play-music {
  margin-top: 20upx;
  display: flex;
  padding: 0 20upx;
  flex-flow: row  nowrap; 

  .music-img {
    height: 120upx;
    width: 120upx;
  }

  .music-name {
    display: flex;
    padding: 0 20upx;
    font-size: 30upx;
    align-items: center;
  }
}
</style>