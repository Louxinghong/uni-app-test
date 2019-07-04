<template>
  <view class="user-info">
    <view class="content">
      <template v-if="!isLogin">
        <button class="login-btn" @click="onLogin">立即登录</button>
        <text class="login-txt">您还未登录</text>
      </template>
      <template v-else-if="!isApply"> 
        <button class="apply-btn" @click="onApply">立即申请</button>
        <text class="apply-txt">您还未提交申请，暂无可用额度</text>
      </template>
      <template v-else>
        <view class="limit-info">
          <text>可用额度(元)</text>
          <text>80000.00</text>
          <text>总额度 100,000.00</text>
        </view>
        <view class="upgrade-limit">
          <text>我要提额</text>
          <image src="/static/my/ic_me_tie_arrowright.png"></image>
        </view>
      </template>
    </view>

    <view class="footer">
      <view class="footer-item">
        <image src="/static/my/ic_me_list_myloan.png"></image>
        <text>我的借款</text>
      </view>
      <view class="footer-item">
        <image src="/static/my/ic_me_list_myinfor.png" @click="toPersonInfo"></image>
        <text>个人信息</text>
      </view>
      <view class="footer-item">
        <image src="/static/my/ic_me_list_manager.png"></image>
        <text>客户经理</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      isApply: false
    }
  },
  methods: {
    onLogin() {
      uni.navigateTo({
        url: '/pages/login/index'
      })
      this.isLogin = true
    },
    onApply() {
      this.isApply = true
    },
    toPersonInfo() {
      uni.navigateTo({
        url: '/pages/my/person/index'
      })
    }
  }
}
</script>

<style lang="scss">

.user-info {
  display: flex;
  flex-flow: column nowrap;

  .content {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 688upx;
    height: 258upx;
    margin: 36upx auto 20upx;
    background: linear-gradient(to right, #fc9343, #fc5d55);
    box-shadow: 0upx 10upx 16upx 0upx rgba(252, 121, 65, 0.4);
    border-radius: 8upx;
    
    .login-btn,
    .apply-btn {
      width: 230upx;
      height: 80upx;
      font-size: 32upx;
      color: crimson;
      border-radius: 40upx;
    }

    .login-txt,
    .apply-txt {
      margin-top: 10upx;
      color: white;
      font-size: 15upx;
    }

    .limit-info {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      padding-left: 41upx;
      box-sizing: border-box;

      text {
        &:nth-child(1) {
          font-size: 24upx;
          color: #ffe4d5;
        }

        &:nth-child(2) {
          font-size: 70upx;
          color: #fff;
        }

        &:nth-child(3) {
          font-size: 24upx;
          color: #ffe4d5;
        }
      }
    }

    .upgrade-limit {
      position: absolute;
      top: 43upx;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 181upx;
      height: 46upx;
      background: url('~@/static/my/img_me_btnbg.png');
      background-size: 100% 100%;

      text {
        font-size: 26upx;
        color: #fff;
      }

      image {
        width: 10upx;
        height: 16upx;
        margin-left: 17upx;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 55upx 65upx 45upx;

    .footer-item {
      image {
        display: block;
        width: 64upx;
        height: 64upx;
        margin: 0 auto;
      }

      text {
        font-size: 26upx;
      }
    }
  }
}

</style>
