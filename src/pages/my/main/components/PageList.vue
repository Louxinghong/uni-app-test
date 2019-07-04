<template>
    <view class="page-list">
      <view>   
        <uni-list>
          <uni-list-item title="分享有礼" thumb="/static/my/ic_me_list_share.png" @click="onGoto('share')"></uni-list-item>
          <uni-list-item
            title="意见反馈"
            thumb="/static/my/ic_me_list_yijian.png"
            @click="onGoto('feedback')"
          ></uni-list-item>
          <uni-list-item title="在线客户" thumb="/static/my/ic_me_list_kefu.png" @click="onGoto('service')"></uni-list-item>
          <uni-list-item title="帮助中心" thumb="/static/my/ic_me_list_help.png" @click="onGoto('help')"></uni-list-item>
          <uni-list-item title="设置" thumb="/static/my/ic_me_list_set.png" @click="onGoto('setting')"></uni-list-item>
          <uni-list-item
            title="异常信息"
            thumb="/static/my/ic_me_list_yichang.png"
            @click="onGoto('exception')"
          ></uni-list-item>
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
    },

}
</script>

<style lang="scss">
.page-list {
  padding: 20upx 0;
  background-color: rgb(245, 245, 245);
}

</style>
