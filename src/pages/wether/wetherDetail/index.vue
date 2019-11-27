<template>
  <view class="container">
    <view class="date">
      <p class="week">{{wetherDetail.week}}</p>
      <p>{{wetherDetail.date}}</p>
      <p class="wea-win">
        <uni-tag type="primary" :text="wetherDetail.wea"></uni-tag>
        <text>{{wetherDetail.win[0]}}~{{wetherDetail.win[1]}}/{{wetherDetail.win_speed}}</text>
      </p>
    </view>
    <view class="hour-wether">
      <t-table>
        <t-tr>
          <t-th>时间</t-th>
          <t-th>天气</t-th>
          <t-th>温度</t-th>
          <t-th>风向</t-th>
          <t-th>风速</t-th>
        </t-tr>
        <t-tr v-for="(item, k) in wetherDetail.hours" :key="k">
          <t-td>{{item.day}}</t-td>
          <t-td>{{item.wea}}</t-td>
          <t-td>{{item.tem}}</t-td>
          <t-td>{{item.win}}</t-td>
          <t-td>{{item.win_speed}}</t-td>
        </t-tr>
      </t-table>
    </view>
    <view class="trans"></view>
    <uni-card
      class="air-content"
      v-if="wetherDetail.air"
      title="空气"
      mode="title"
      :is-shadow="true"
      thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
    >
      <view class="air">
        <p>
          空气质量：
          <text>{{wetherDetail.air}}</text>
        </p>
        <p>
          质量等级：
          <uni-tag :type="levelTag" :text="wetherDetail.air_level"></uni-tag>
        </p>
        <p>
          质量描述：
          <text>{{wetherDetail.air_tips}}</text>
        </p>
      </view>
    </uni-card>
    <view class="trans"></view>
    <uni-card
      class="tem-content"
      title="温度"
      mode="title"
      :is-shadow="true"
      thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
    >
      <view class="temperature">
        <p>
          当前温度：
          <text>{{wetherDetail.tem}}</text>
        </p>
        <p>
          白天温度：
          <text>{{wetherDetail.tem1}}</text>
        </p>
        <p>
          晚上温度：
          <text>{{wetherDetail.tem2}}</text>
        </p>
      </view>
    </uni-card>
    <view class="trans"></view>
    <uni-card
      class="life-content"
      title="生活指数"
      mode="title"
      :is-shadow="true"
      thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"
    >
      <view class="life">
        <ul>
          <li v-for="(item, z) in wetherDetail.index" :key="z">
            <p>{{item.title}}：{{item.level}}</p>
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </view>
    </uni-card>
    <view class="trans-bottom"></view>
  </view>
</template>

<script>
import { uniCard, uniTag } from '@dcloudio/uni-ui'
import tTable from '@/components/table/t-table.vue'
import tTr from '@/components/table/t-tr.vue'
import tTh from '@/components/table/t-th.vue'
import tTd from '@/components/table/t-td.vue'

export default {
  name: 'WetherDetail',
  components: {
    uniCard,
    uniTag,
    tTable,
    tTr,
    tTh,
    tTd
  },
  data () {
    return {
      wetherDetail: {}
    }
  },
  computed: {
    levelTag () {
      if (this.wetherDetail.air) {
        if (this.wetherDetail.air <= 50) {
          return 'success'
        } else if (this.wetherDetail.air >= 51 && this.wetherDetail.air <= 100) {
          return 'primary'
        } else if (this.wetherDetail.air >= 101 && this.wetherDetail.air <= 150) {
          return 'warning'
        } else if (this.wetherDetail.air >= 151 && this.wetherDetail.air <= 200) {
          return 'error'
        } else if (this.wetherDetail.air >= 201 && this.wetherDetail.air <= 300) {
          return 'royal'
        } else if (this.wetherDetail.air > 300) {
          return ''
        }
      }
    }
  },
  onLoad (event) {
    try {
      this.wetherDetail = JSON.parse(decodeURIComponent(event.data))
    } catch (error) {
      this.wetherDetail = JSON.parse(event.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .date {
    text-align: center;
    margin: 40upx 0;

    .week {
      font-size: 80upx;
      margin-bottom: 20upx;
    }
  }

  .wea-win {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30upx;
    margin-top: 20upx;
  }

  .hour-wether {
    width: 95%;
    margin: 0 auto;
    table {
      display: inline-block;
      tr {
        td {
          font-size: 30upx;
        }
      }
    }
  }
  .air-content {
    .air {
      margin: 20upx 0;
    }
  }

  .life-content {
    .life {
      ul {
        margin: 0;
        padding-left: 40upx;
        list-style-type: decimal;
        font-size: 35upx;
      }
    }
  }
  .trans {
    margin-top: 30upx;
  }
  .trans-bottom {
    height: 30upx;
  }
}
</style>