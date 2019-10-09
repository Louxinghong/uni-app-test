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
      <rich-text :nodes="htmlContent"></rich-text>
    </view>
    
    
  </view>
</template>

<script>
import htmlParser from '@/utils/html-parser'
export default {
  data () {
    return {
      data: {},
      htmlContent: []
    }
  },
  onLoad (event) {
    try {
      this.data = JSON.parse(decodeURIComponent(event.data))
    } catch (error) {
      this.data = JSON.parse(event.data)
    }
    var htmlString = this.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"width:100%;\"")
    // console.log(this.data.content)
    this.htmlContent = htmlParser(htmlString)
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
