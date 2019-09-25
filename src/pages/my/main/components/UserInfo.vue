<template>
  <view class="user-info">
    <view class="person-info">
      <view class="per-con">
        <image class="person-img" src="/static/my/ic_me.png" alt />
        <span v-if="!isLogin">未登录，请点击下方登录按钮前往登录</span>
        <span v-else>欢迎，{{ username }}</span>
      </view>
    </view>
    <view class="content">
      <template v-if="!isLogin">
        <button class="login-btn" @click="onLogin">立即登录</button>
      </template>
      <template v-else-if="!isApply">
        <button class="apply-btn" @click="onApply">立即申请</button>
        <text class="apply-txt">您还未提交申请，暂无可执教球队</text>
      </template>
      <template v-else>
        <view class="limit-info">
          <text>可用人数（人）</text>
          <text>5</text>
          <text>总人数 12</text>
        </view>
        <view class="upgrade-limit">
          <text>我要加人</text>
          <image src="/static/my/ic_me_tie_arrowright.png" />
        </view>
      </template>
    </view>

    <view class="footer">
      <view class="footer-item">
        <image src="/static/my/ic_me_list_team.png" />
        <text>我的球队</text>
      </view>
      <view class="footer-item">
        <image src="/static/my/ic_me_list_myinfor.png" @click="toPersonInfo" />
        <text>个人信息</text>
      </view>
      <view class="footer-item">
        <image src="/static/my/ic_me_list_myloan.png" />
        <text>我的资产</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isApply: false
    };
  },
  computed: {
    ...mapState("login", ["username", "isLogin"])
  },
  methods: {
    onLogin() {
      uni.navigateTo({
        url: "/pages/login/index"
      });
    },
    onApply() {
      this.isApply = true;
    },
    toPersonInfo() {
      uni.navigateTo({
        url: "/pages/my/person/index"
      });
    }
  }
};
</script>

<style lang="scss">
.user-info {
  display: flex;
  flex-flow: column nowrap;

  .person-info {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 270upx;
    flex-flow: row nowrap;
    align-items: baseline;
    background: crimson;
    color: white;
    font-size: 25upx;

    .per-con {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-top: 30upx;
      margin-left: 40upx;
      .person-img {
        width: 62upx;
        height: 62upx;
        margin-right: 20upx;
      }
    }
  }

  .content {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 688upx;
    height: 258upx;
    margin-top: 120upx;
    margin-bottom: 20upx;
    background: linear-gradient(to right, #fc9343, #fc5d55);
    box-shadow: 0upx 10upx 16upx 0upx rgba(252, 121, 65, 0.4);
    border-radius: 8upx;
    left: 50%;
    transform: translateX(-50%);

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
      background: url("~@/static/my/img_me_btnbg.png");
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
    margin-top: 100upx;

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
