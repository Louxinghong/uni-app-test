<template>
  <view class="page-list">
    <view>
      <uni-list>
        <uni-list-item title="意见反馈" thumb="/static/my/ic_me_list_yijian.png"></uni-list-item>
        <uni-list-item title="帮助中心" thumb="/static/my/ic_me_list_help.png"></uni-list-item>
        <uni-list-item title="设置" thumb="/static/my/ic_me_list_set.png"></uni-list-item>
        <uni-list-item title="异常信息" thumb="/static/my/ic_me_list_yichang.png"></uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script>
import { uniList, uniListItem } from '@dcloudio/uni-ui'

export default {
  components: {
    uniList,
    uniListItem
  }
}
</script>

<style lang="scss">
.page-list {
  padding: 20upx 0;
  background-color: rgb(245, 245, 245);
  font-size: 30upx;
}
</style>
