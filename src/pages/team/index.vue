<template>
    <view>
      <view class="control-content">
        <uni-segmented-control
          :current="current"
          :values="items"
          @clickItem="onClickItem"
          style-type="button"
          active-color="rgb(0, 122, 255)"
        ></uni-segmented-control>
      </view>
      
      <view class="article-card" v-for="(item, index) in teamdata" :key="index">
        <uni-card
          :title="item.teamShortName" 
          thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" 
          :extra="item.teamArea"
          note="NBA"
          v-show="item.currentTeam == current"
        >
          <text class="article-content">
            {{ item.teamIntroduction.slice(0, 70) + '...' }}
          </text>
        </uni-card>
      </view>
      
    </view>
</template>

<script>
import { getTeamInfo } from '@/api/news'
import { uniSegmentedControl, uniCard } from '@dcloudio/uni-ui'
export default {
  components:{
    uniSegmentedControl,
    uniCard
  },
  data() {
    return {
      teamdata: [],
      items: ['东部', '西部'],
      current: 0
    }
  },
  async onLoad() {
    try {
      const data = await getTeamInfo()
      this.teamdata = data.content
    } finally {

    }
  },
  methods: {
    onClickItem(index) {
      if(this.current != index) {
        this.current = index
      }
    },
    onClick(data) {
      alert(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.control-content {
  position: sticky;
  top: 88upx;
  padding: 30upx 0upx;
  border-bottom: 1px solid rgb(160, 158, 158);
  z-index: 1;
  background-color: #ffffff;
}
.article-card {
  margin: 30upx 0upx;
  font-size: 30upx;
}
</style>
