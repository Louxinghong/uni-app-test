<template>
  <view>
    <h3>我的金融页面</h3>
    <view>
      <uni-calendar lunar @change="change" @to-click="toClick"></uni-calendar>
    </view>
  
    <view>
      <text>{{ nowadays }}</text>
      <view class="week-list">
        <view v-for="(item, index) in weekList" :key="index">{{ item }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { uniCalendar } from '@dcloudio/uni-ui'
export default {
  components: {
    uniCalendar
  },
  data () {
    const { year, month, week, day } = this.getTime()
    return {
      weekList: ['日','一','二','三','四','五','六'],
      year,
      month,
      week,
      day
    }
  },
  computed: {
    nowadays() {
      return `${this.year}-${this.format(this.month)}-${this.format(this.day)}`
    }
  },
  methods: {
    change(e) {
      console.log(e)
    },
    toClick(e) {
      console.log(e)
    },
    getTime() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const week = date.getDay()
      const day = date.getDate()

      return {
        year,
        month,
        week,
        day
      }
    },
    format(data) {
      return data >=10 ? data : `0${data}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .week-list {
    display: flex;
    justify-content: space-around;
    font-size: 28upx;
  }
</style>
