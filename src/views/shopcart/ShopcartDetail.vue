<template>
  <div
      class="shopcart-list"
      v-show="listShow"
      :class="{'show':listShow}"
  >
    <div
        class="list-top"
        v-if="poiInfo.discounts2"
    >
      {{poiInfo.discounts2[0].info}}
    </div>
    <div class="list-header">
      <h3 class="title">1号口袋</h3>
      <div class="empty" @click="clearAll">
        <img src="../../assets/img/ash_bin.png"/>
        <span>清空购物车</span>
      </div>
    </div>
    <div class="list-content" ref="listContent">
      <ul>
        <li
            class="food-item"
            v-for="(food,index) in selectFoods"
            :key="index"
        >
          <div class="desc-wrapper">
            <div class="desc-left">
              <p class="name">{{food.name}}</p>
              <p class="unit" v-show="!food.description">{{food.unit}}</p>
              <p class="description" v-show="!food.unit">{{food.description}}</p>
            </div>
            <div class="desc-right">
              ￥{{food.min_price}}
            </div>
          </div>
          <div class="cartcontrol-wrapper">
            <app-cart-control :food="food"></app-cart-control>
          </div>
        </li>
      </ul>
    </div>
    <div class="list-bottom"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from '../cartcontrol/CartControl'

export default {
  name: "ShopcartDetail",
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    listShow: {
      type: Boolean
    },
    poiInfo: {
      type: Object
    }
  },
  components: {
    "app-cart-control": CartControl
  },
  methods: {
    clearAll(){
      this.selectFoods.forEach((food) => {
        food.count = 0
      })
    },
  },
  watch: {
    listShow(nv) {
      if (nv) {
        this.$nextTick(() => {
          if (!this.shopScroll) {
            this.shopScroll = new BScroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.shopScroll.refresh()
          }
        })
      }
    }
  },
}
</script>

<style scoped>
.shopcart-list {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
}

.shopcart-list.show {
  transform: translateY(-100%);
}

.shopcart-list .list-top {
  height: 30px;
  text-align: center;
  font-size: 11px;
  background: #f3e6c6;
  line-height: 30px;
  color: #646158;
}

.shopcart-list .list-header {
  height: 30px;
  background: #F4F4F4;
}

.shopcart-list .list-header .title {
  float: left;
  border-left: 4px solid #53c123;
  padding-left: 6px;
  line-height: 30px;
  font-size: 12px;
}

.shopcart-list .list-header .empty {
  float: right;
  line-height: 30px;
  margin-right: 10px;
  font-size: 0;
}

.shopcart-list .list-header .empty img {
  height: 14px;
  margin-right: 9px;
  vertical-align: middle;
}

.shopcart-list .list-header .empty span {
  font-size: 12px;
  vertical-align: middle;
}

.shopcart-list .list-content {
  max-height: 360px;
  overflow: hidden;
  background: white;
}

.shopcart-list .list-content .food-item {
  height: 38px;
  padding: 12px 12px 10px 12px;
  border-bottom: 1px solid #F4F4F4;
}

.shopcart-list .list-content .food-item .desc-wrapper {
  float: left;
  width: 240px;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-left {
  float: left;
  width: 170px;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-left .name {
  font-size: 16px;
  margin-bottom: 8px;

  /* 超出部分隐藏*/
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 16px;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-left .unit {
  font-size: 12px;
  color: #B4B4B4;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-left .description {
  font-size: 12px;
  color: #B4B4B4;

  /* 超出部分隐藏*/
  overflow: hidden;
  height: 12px;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-right {
  float: right;
  width: 70px;
  text-align: right;
  line-height: 36px;
}

.shopcart-list .list-content .food-item .desc-wrapper .desc-right .price {
  font-size: 12px;
  line-height: 38px;
}

.shopcart-list .list-content .food-item .cartcontrol-wrapper {
  float: right;
  margin-top: 6px;
}
</style>