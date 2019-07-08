<template>
  <view class="content">
    <view class="input-box">
      <span class="input-title">帐号</span>
      <input class="input-content" placeholder="请输入账号" type="text" v-model="username">
    </view>
    <hr>

    <view class="input-box">
      <span class="input-title">密码</span>
      <input class="input-content" placeholder="请输入密码" password type="text" v-model="password">
    </view>
    <hr>

    <view class="register-forgetword">
      <span>注册</span>
      <span>忘记密码？</span>
    </view>

    <button class="btn-login" type="primary" @click="onLogin()">登录</button>
  </view>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions('login', {
      changeLogin: 'changeLoginStatus',
      getusername: 'getUserName'
    }),
    onLogin() {
      if(this.username === '') {
        uni.showToast({
          icon: 'none',
          title: '手机号不能为空',
          duration: 2000
        });
      }
      else if(this.password === '') {
        uni.showToast({
          icon: 'none',
          title: '密码不能为空',
          duration: 2000
        })
      }
      else {
        this.changeLogin()
        this.getusername({username: this.username})
        uni.reLaunch({
          url: '/pages/my/main/index'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
%margin-top-bottom {
  margin-top: 30upx;
  margin-bottom: 30upx;
}
.content {
  padding: 70upx;

  .input-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @extend %margin-top-bottom;

    .input-title {
      font-size: 28upx;
      width: 100upx;
    }
    .input-content {
      width: 300upx;
      margin-left: 50upx;
      font-size: 25upx;
    }
  }

  .register-forgetword {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @extend %margin-top-bottom;
    color: rgb(27, 125, 236);
    font-size: 28upx;
  }

  .btn-login {
    border-radius: 20upx;
    font-size: 28upx;
  }
}





</style>