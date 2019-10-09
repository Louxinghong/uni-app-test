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

      <view v-show="current === 0">11111111111111111</view>
      <view v-show="current === 1">
        <input class="search" confirm-type="search" placeholder="请输入搜索内容" />
      </view>
    </view>
  </view>
</template>

<script>
import { getTeamInfo } from "@/api/news";
import { uniSegmentedControl } from "@dcloudio/uni-ui";

export default {
  components: {
    uniSegmentedControl
  },
  data () {
    return {
      teamdata: [],
      items: ['我的', '发现'],
      current: 0
    };
  },
  async onLoad () {
    try {
      const data = await getTeamInfo()
      this.teamdata = data.content
    } finally {
    }
  },
  methods: {
    onClickItem (index) {
      if (this.current != index) {
        this.current = index
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
</style>
