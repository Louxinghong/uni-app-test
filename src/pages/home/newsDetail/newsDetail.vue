<template>
  <view>
    <image class="detail-img" :src="data.cover"></image>
    <view class="detail-publish">
      <text>{{ data.authorName }}</text>
      <text>发表于</text>
      <text>{{ data.publishedAt }}</text>
    </view>
    <view class="detail-title">
      <text >{{ data.title }}</text>
    </view>
    
    <view class="detail-content">
      <text  v-html="data.content"></text>
    </view>
    
    
  </view>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  onLoad(event) {
    this.data = JSON.parse(event.data)
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.detail-img {
  width: 100%;
  height: 400upx;
}
.detail-publish {
  color: #adacac;
  font-size: 30upx;
  
  text {
    margin-left: 15upx;
  }
}
.detail-title {
  margin: 30upx 0upx;
  font-size: 45upx;
}
.detail-content {
  font-size: 30upx;
  padding: 0upx 20upx;
}

</style>
