<template>
  <div class="shopcart" :class="{'highligh':totalCount>0}">
    <div class="shopcart-wrapper">
      <!-- 底部左侧 -->
      <div class="content-left">
        <div
            class="logo-wrapper"
            :class="highligh"
            @click="toggleList"
        >
        <span
            class="iconfont icon-shopping_cart logo"
            :class="highligh"
        ></span>
          <i class="num" v-show="totalCount">{{totalCount}}</i>
        </div>
        <div class="desc-wrapper">
          <p class="total-price" v-show="totalPrice">
            ￥{{totalPrice}}
          </p>
          <p
              class="tip"
              :class="highligh"
          >另需{{poiInfo.shipping_fee_tip}}</p>
        </div>
      </div>
      <!-- 底部右侧 -->
      <div class="content-right" :class="highligh">
        {{payStr}}
      </div>
      <!-- 购物车列表 -->
      <app-shopcart-list v-bind="{poiInfo, selectFoods, listShow}"></app-shopcart-list>
      <!--<app-shopcart-list :poiInfo="poiInfo" :selectFoods="selectFoods" :listShow="listShow"></app-shopcart-list>-->
    </div>
    <div class="shopcart-mask" v-show="listShow" @click="toggleList"></div>
  </div>
</template>

<script>
import ShopcartDetail from './ShopcartDetail'

export default {
  props: {
    poiInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      fold: true,
    }
  },
  methods: {
    toggleList() {
      this.fold = !this.fold;
    },
  },
  computed: {
    highligh() {
      return {'highligh': this.totalCount > 0}
    },
    totalCount() {
      let num = 0

      this.selectFoods.forEach((food) => {
        num += food.count
      })
      return num
    },
    totalPrice() {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.min_price * food.count
      })
      return total
    },
    payStr() {
      if (this.totalCount > 0) {
        return "去结算"
      } else {
        return this.poiInfo.min_price_tip
      }
    },
    listShow() {
      return !this.fold && this.totalCount > 0
    },
  },
  components: {
    'app-shopcart-list': ShopcartDetail,
  }
}
</script>

<style>
@import url(../../assets/iconfont/iconfont.css);

.shopcart-wrapper {
  width: 100%;
  height: 51px;
  background: #514f4f;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 99;
}

.shopcart-wrapper .content-left {
  flex: 1;
}

.shopcart-wrapper .content-right {
  flex: 0 0 110px;

  font-size: 15px;
  color: #BAB9B9;
  line-height: 51px;
  text-align: center;
  font-weight: bold;
}

.shopcart-wrapper .content-left .logo-wrapper {
  width: 50px;
  height: 50px;
  background: #666666;
  border-radius: 50%;
  position: relative;
  top: -14px;
  left: 10px;
  text-align: center;
  float: left;
}

.shopcart-wrapper .content-left .logo-wrapper .logo {
  font-size: 28px;
  color: #c4c4c4;
  line-height: 50px;
}

.shopcart-wrapper .content-left .desc-wrapper {
  float: left;
  margin-left: 13px;
}

.shopcart-wrapper .content-left .desc-wrapper .tip {
  font-size: 12px;
  color: #bab9b9;
  line-height: 51px;
}

.shopcart-wrapper .content-left .logo-wrapper.highligh {
  background: #ffd161;
}

.shopcart-wrapper .content-left .logo-wrapper .logo.highligh {
  color: #2D2B2A;
}

.shopcart-wrapper .content-left .logo-wrapper .num {
  width: 15px;
  height: 15px;
  line-height: 15px;
  border-radius: 50%;
  font-size: 9px;
  color: white;
  background: red;
  position: absolute;
  right: 0;
  top: 0;
}

.shopcart-wrapper .content-left .desc-wrapper .tip.highligh {
  line-height: 12px;
}

.shopcart-wrapper .content-right.highligh {
  background: #FFD161;
  color: #2D2B2A;
}

.shopcart-wrapper .content-left .desc-wrapper .total-price {
  font-size: 18px;
  line-height: 33px;
  color: white;
}

.shopcart .shopcart-mask{
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  background: rgba(7,17,27,0.6);
}

</style>