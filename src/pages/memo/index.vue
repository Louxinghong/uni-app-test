<template>
  <view>
    <view>
      <uni-calendar lunar @change="change" @to-click="toClick"></uni-calendar>
    </view>
  
    <view>
      <view class="now-date">
        <view class="btn-sign-in" @click="onCheck(day)">签到</view>
        <text>{{ nowadays }}</text>
      </view>
      <view class="week-list">
        <view v-for="(item, index) in weekList" :key="index">{{ item }}</view>
      </view>
      <view class="day-list">
        <view
          class="day-item"
          v-for="(item, index) in thisMonthDays"
          :key="index"
        >
          <text class="checked" v-if="checkDays.includes(item)">✔</text>
          <text class="normal" :class="{ thisday: item === day }" v-else>{{ item }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { uniCalendar, uniPopup } from '@dcloudio/uni-ui'
export default {
  components: {
    uniCalendar,
    uniPopup
  },
  data () {
    const { year, month, week, day } = this.getTime()
    const thisMonthDays = this.getThisMonthDays(year, month)
    return {
      weekList: ['日','一','二','三','四','五','六'],
      year,
      month,
      week,
      day,
      thisMonthDays,
      checkDays: []
    }
  },
  computed: {
    nowadays() {
      return `${this.year}-${this.format(this.month)}-${this.format(this.day)}`
    }
  },
  watch: {
    checkDays () {
      const { year, month } = this.getTime()
      this.thisMonthDays = this.getThisMonthDays(year, month)
    }
  },
  methods: {
    change (e) {
      console.log(e)
    },
    toClick (e) {
      console.log(e)
    },
    getTime () {
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
    getThisMonthDays (year, month) {
      const thisMonthFirstDay = new Date(`${year}/${month}/1`)
      const firstDayWeek = thisMonthFirstDay.getDay()
      const thisMonth = new Date(year, month, 0)
      const thisMonthAllDays = thisMonth.getDate()
      const day = [...this.getEmptys(firstDayWeek), ...this.getDays(thisMonthAllDays)]
      return day
    },
    getEmptys (count) {
      let arr = []
      for (let i = 0; i < count; i++) {
        arr.push('')
      }
      return arr
    },
    getDays (count) {
      let days = []
      for (let i = 1; i <= count; i++) {
        days.push(i)
      }
      return days
    },
    format (data) {
      return data >=10 ? data : `0${data}`
    },
    onCheck (day) {
      this.checkDays.push(day)
      uni.showToast({
        icon: 'none',
        title: '签到成功',
        duration: 2000,
			});
    }
  }
}
</script>

<style lang="scss" scoped>
%day-common {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56upx;
  height: 56upx;
}

.btn-sign-in {
  width: 240upx;
  height: 70upx;
  line-height: 70upx;
  text-align: center;
  border: 2upx solid #ddd;
  border-radius: 43upx;
  margin: 10upx auto;
  font-size: 32upx;
}

.now-date {
  text-align: center;
  padding: 20upx;
  border-bottom: 2upx solid #eee;
  font-size: 30upx;
}

.week-list {
  display: flex;
  justify-content: space-around;
  font-size: 28upx;
  margin-top: 10upx;
}
.day-list {
  display: flex;
  flex-wrap: wrap;
  font-size: 28upx;
  .day-item {
    display: flex;
    justify-content: center;
    width: 14.2%;
    padding: 30upx 0upx;

    .normal {
      @extend %day-common;
    }
    .checked,
    .thisday {
      @extend %day-common;
      width: 56upx;
      height: 56upx;
      border-radius: 100%;
      box-sizing: border-box;
      background-color: #3f9dff;
      color: #fff;
      font-size: 28upx;
    }
  }

  
}
</style>
