<template>
    <view>
      <button type="primary">新增备忘</button>
      <uni-card
        title="12"
        thumbnail=""
        :extra="getTodayDay"
        note="Hupu"
      >

      </uni-card>
    </view>
</template>

<script>
import { uniCard } from '@dcloudio/uni-ui'
export default {
  components: {
    uniCard
  },
  data() {
    return {

    }
  },
  async onLoad() {
    try {
      
    } finally {

    }
  },
  computed: {
    getTodayDay() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      return year + this.format(month) + this.format(day) + this.format(hours) + this.format(minutes) + this.format(seconds)
    }
  },
  methods: {
    format(data) {
      return data >=10 ? data : `0${data}`
    }
  }
}
</script>

<style>

</style>
