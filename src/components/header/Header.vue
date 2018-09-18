<template>
  <div class="header">
    <!-- 顶部通栏 开始 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <i class="iconfont icon-arrow_lift"></i>
      </div>

      <form class="search-wrapper">
        <i class="search-icon"></i>
        <input type="text" class="search-bar" placeholder="搜索店内商品">
      </form>

      <div class="more-wrapper">
        <a href="#" class="spelling-bt">拼单</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>
    <!-- 顶部通栏 结束 -->

    <!-- 主题内容 开始 -->
    <div class="content-wrapper">
      <div class="icon">
        <img :src="poiInfo.pic_url" />
      </div>
      <div class="name">
        <h3>{{poiInfo.name}}</h3>
      </div>
      <div class="collect">
        <img src="../../assets/img/star.png" />
        <span>收藏</span>
      </div>
    </div>
    <!-- 主题内容 结束 -->

    <!-- 公告内容 开始 -->
    <div class="bulletin-wrapper">
      <img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" />

      <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
      <div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
        {{poiInfo.discounts2.length}}个活动
        <span class="iconfont icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <!-- 公告内容 结束 -->

    <!-- 背景内容 开始-->
    <div class="bg-wrapper" :style="head_pic_url">
       <!--<img :src="poiInfo.head_pic_url" />-->
    </div>
    <!-- 背景内容 结束-->

    <!-- 公告详情 开始 -->
    <transition name="bulletin-detail">
      <div class="bulletin-detail" v-show="isShow">
        <div class="detail-wrapper">
          <!-- 相关内容容器 -->
          内容容器
          <!-- 关闭内容容器 -->
          <div class="close-wrapper">
            <span class="iconfont icon-close" @click="showBulletin"></span>
          </div>
        </div>
      </div>
    </transition>
    <!-- 公告详情 结束 -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    poiInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    head_pic_url(){
      return "background-image: url(" + this.poiInfo.head_pic_url + ");"
    },
    head_bg(){
      return "background-image: url(" + this.poiInfo.pic_url + ");"
    },
  },
  methods: {
    showBulletin() {
      this.isShow = !this.isShow
    }
  }

}
</script>

<style lang="less" scoped>
@import url('../../assets/iconfont/iconfont.css');
/*@import "index";*/
.header {
  height: 130px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  color: white;

  .top-wrapper {
    height: 31px;
    display: flex;
    align-items: center;

    .back-wrapper {
      color: white;
    }

    .search-wrapper {
      position: relative;
      padding-left: 15px;
      padding-right: 10px;
      flex: 1;

      .search-icon {
        width: 28px;
        height: 31px;
        background: url("../../assets/img/search.png") no-repeat 11px center;
        background-size: 13px 13px;
        position: absolute;
      }

      .search-bar {
        width: 100%;
        height: 31px;
        border: 0;
        /* 设置盒子从边框开始计算*/
        box-sizing: border-box;
        background: #cdcdcc;
        border-radius: 25px;
        padding-left: 28px;
        /* 去除选中时蓝色边框*/
        outline: none;
      }
    }

    .more-wrapper {
      display: flex;
      align-items: center;
      min-width: 70px;
      color: white;

      .spelling-bt {
        width: 30px;
        height: 17px;
        line-height: 17px;
        border: 1px solid white;
        text-align: center;
        text-decoration: none;
        font-size: 10px;
      }

      .more-bt {
        width: 20px;
        height: 24px;
        .s-radius {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          border: 1px solid #4831ff;
          display: block;
          float: left;
          margin-right: 1px;
          margin-top: 8px;
        }
      }
    }

  }
  /* 背景图片样式 */
  .bg-wrapper {
    width: 100%;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
    background-position: center -12px;
  }

  .content-wrapper {
    display: flex;
    align-items: center;

    .icon {
      margin: 10px;

      img {
        width: 45px;
      }
    }

    .name {
      color: white;
    }
    .collect {
      margin: 10px;
      img {
        width: 12px;
      }
    }
  }

  .bulletin-wrapper {
    height: 16px;
    display: flex;
    align-items: center;
    .icon {
      width: 16px;
      height: 16px;
    }

    .text {
      font-size: 10px;
      color: white;
      line-height: 16px;
    }

    .detail {
      color: white;
      float: right;
      font-size: 10px;
      line-height: 16px;
    }
  }

  /* 公告详情 样式 */
  .bulletin-detail {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(98, 98, 98, 0.8);
    z-index: 999;
  }

  .bulletin-detail .detail-wrapper {
    width: 100%;
    height: 100%;
    padding: 43px 20px 125px;
    box-sizing: border-box;
  }

  .bulletin-detail .detail-wrapper .main-wrapper {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-radius: 10px;
    text-align: center;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .icon {
    width: 60px;
    height: 60px;
    background-size: 135% 100%;
    background-position: center;
    border-radius: 5px;
    display: inline-block;
    margin-top: 40px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .name {
    font-size: 15px;
    color: white;
    margin-top: 13px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .score {
    height: 10px;
    margin-top: 6px;
    text-align: center;
    font-size: 0;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .score .star {
    display: inline-block;
    margin-right: 7px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .score span {
    display: inline-block;
    font-size: 10px;
    color: white;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .tip {
    font-size: 11px;
    color: #bababc;
    margin-top: 8px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .tip i {
    margin: 0 7px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .time {
    font-size: 11px;
    color: #bababc;
    margin-top: 13px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .discounts {
    margin-top: 20px;
    padding: 0 20px;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .discounts p {
    padding-top: 20px;
    border-top: 1px solid #BABABC;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .discounts img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }

  .bulletin-detail .detail-wrapper .main-wrapper .discounts span {
    font-size: 11px;
    line-height: 16px;
    color: white;
  }

  .bulletin-detail .detail-wrapper .close-wrapper {
    padding-top: 20px;
    height: 40px;
    text-align: center;
  }

  .bulletin-detail .detail-wrapper .close-wrapper span {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    font-size: 14px;
    color: white;
    display: inline-block;
    background: rgba(118, 118, 118, 0.7);
    border: 1px solid rgba(140, 140, 140, 0.9);
  }

  /* 动画效果 */
  .bulletin-detail-enter-active,
  .bulletin-detail-leave-active {
    transition: 2s all;
  }

  .bulletin-detail-enter,
  .bulletin-detail-leave-to {
    opacity: 0;
  }

  .bulletin-detail-enter-to,
  .bulletin-detail-leave {
    opacity: 1;
  }
}
</style>