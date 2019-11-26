<template>
  <view></view>
</template>

<script>
export default {
  name: 'WetherDetail',
  data () {
    return {
      wetherDetail: {}
    }
  },
  onLoad (event) {
    try {
      this.wetherDetail = JSON.parse(decodeURIComponent(event.data))
    } catch (error) {
      this.wetherDetail = JSON.parse(event.data)
    }
    console.log(this.wetherDetail)
  }
}
</script>
