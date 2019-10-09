<template>
  <view>
		<view>
			<view class="wechat-img">
				<image src="/static/my/ic_me_wechat.png"></image>
			</view>
			<view class="content">
				<view>申请获取以下权限</view>
				<text>获得你的公开信息（昵称，头像，地区等）</text>
			</view>
			<button type="primary" class="btn-warrant" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">授权登录</button>
		</view>
  </view>
</template>

<script>
export default {
	name: 'WechatWarrant',
	data () {
		return {
			sessionKey: '',
			openId: '',
			nickName: null,
			avatarUrl: null,
			isCanUse: uni.getStorageSync('isCanUse') || true
		}
	},
	// onLoad () {
	// 	this.login()
	// },
	methods: {
		wxGetUserInfo () {
			uni.getUserInfo({
				provider: 'weixin',
				success: (info) => {
					console.log(info)
					this.nickName = info.userInfo.nickName
					this.avatarUrl = info.userInfo.avatarUrl
					try {
						uni.setStorageSync('isCanUse', false)
						this.updateUserInfo()
					} catch (error) {}
				}
			})
		},
		// login () {
		// 	uni.showLoading({
		// 		title: '登录中...'
		// 	})
		// 	
		// 	// 微信获取登录用户code
		// 	uni.login({
		// 		provider:'weixin',
		// 		success: (loginRes) => {
		// 			let code = loginRes.code
		// 			if (this.isCanUse) {
		// 				uni.getUserInfo({
		// 					provider: 'weixin',
		// 					success: (infoRes) => {
		// 						let nickName = infoRes.userInfo.nickName; //昵称
		// 						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
		// 						this.updateUserInfo();//调用更新信息方法
		// 					}
		// 				})
		// 			}
		// 		}
		// 	})
		// },
		updateUserInfo () {}
	}
}
</script>

<style lang="scss" scoped>
.wechat-img {
	position: relative;
	margin: 50upx;
	height: 300upx;
	border-bottom: 1px solid #ccc;
	
	image {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 133upx;
		height: 133upx;
	}
}

.content {
	margin: 50upx;
	font-size: 30upx;
	
	text {
		display: block;
		margin-top: 20upx; 
		font-size: 30upx;
		color: #8B8989;
	}
}

.btn-warrant {
	margin: 100upx 50upx;
}
</style>
