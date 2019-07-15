<template>
    <view>
      <uni-segmented-control
        class="model-change"
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        style-type="button"
        active-color="#6495ED"
      ></uni-segmented-control>

      <view class="content">
        <view v-for="(item, index) in teamdata" :key="index">
            <view v-if="item.teamPartition === '东部'" v-show="current === 0">
              <uni-card
                class="article-card"
                :title="item.teamArea" 
                thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" 
                extra="getNowDate"
                note="NBA"
              >
                <text class="article-content">
                  {{ item.teamCompleteName }}
                </text>
              </uni-card>
            </view>
            <view v-if="item.teamPartition === '西部'" v-show="current === 1">
              <uni-card
                class="article-card"
                :title="item.teamArea" 
                thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" 
                extra="getNowDate"
                note="NBA"
              >
                <text class="article-content">
                  {{ item.teamCompleteName }}
                </text>
              </uni-card>
            </view>
        </view>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.model-change {
  margin-top: 20upx;
  width: 500upx;
}
.article-card {
  margin-top: 30upx;
}
</style>
