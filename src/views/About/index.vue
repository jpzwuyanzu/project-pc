<template>
  <div class="wrap_contianer">
    <div class="wrap_banner">
      <div class="bg">
        <h3>ACB愛世博品牌戰略目標</h3>
      </div>
    </div>
    <div :class="{ wrap: true, fix: y >= 400 }">
      <div class="con-main-wrap">
        <div class="list-wrap">
          <div class="list-item active">
            <p>企業介紹</p>
          </div>
          <div class="list-item">
            <p>集團理念</p>
          </div>
          <div class="list-item">
            <p>企業文化</p>
          </div>
          <div class="list-item">
            <p>集團里程碑</p>
          </div>
        </div>
      </div>
    </div>
    <div id="intro" class="intro_wrap">
      <div class="con-main-wrap">
        <div class="img-wrap">
          <img src="@/assets/about/intro.png" alt="" />
        </div>
        <div class="right-wrap">
          <h3>愛世博集團-提供領先的解決方案</h3>
          <p>
            愛世博集團成立於2016年，擁有上百名高級技術人員。經過不斷的積累行業經驗，在行業內已屬於佼佼者。已提供行業領先的BC、色站、CDN、直播、客服等產品與服務，以卓越的科技能力打造豐富的行業解決方案。
          </p>
        </div>
      </div>
    </div>
    <div id="horizontally-part-1" class="wrap_main animate__animated animate__backInUp">
      <div class="top_wrap">
        <h3>集團理念</h3>
      </div>
      <div class="con-main-wrap">
        <div class="con-main">
          <div class="list-item">
            <h3>DESIRE</h3>
            <h4>意願</h4>
            <p>整合行業產品生態成為業內首選服務平台，並齊全球企業</p>
            <span>01</span>
          </div>
          <div class="list-item">
            <h3>MISSION</h3>
            <h4>使命</h4>
            <p>創造優質產品， 追求最新技術</p>
            <span>02</span>
          </div>
          <div class="list-item">
            <h3>PURPOSE</h3>
            <h4>宗旨</h4>
            <p>以終為始 以誠相待 創造價值</p>
            <span>03</span>
          </div>
        </div>
        <img src="@/assets/about/square-1.png" alt="" class="square-1" />
        <img src="@/assets/about/square-2.png" alt="" class="square-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();
watch(y, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
</script>

<style lang="scss" scoped>
.wrap_contianer {
  min-width: $minWidth;
  .wrap_banner {
    background: url("@/assets/brand/bg.png") no-repeat center;
    background-size: 100% 100%;
    .bg {
      width: $minWidth;
      height: 450px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-items: flex-start;
      padding-top: 60px;
      h3 {
        font-size: 45px;
        font-weight: 600;
        margin: 0;
      }
    }
  }
  .wrap {
    height: 60px;
    border-bottom: 1px solid #eff7ff;
    .con-main-wrap {
      width: $minWidth;
      margin: 0 auto;
      .list-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: flex-start;
        height: 60px;
        gap: 70px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        .list-item {
          cursor: pointer;
        }
        .active {
          color: #1064fb;
          font-weight: bold;
          position: relative;
        }
        .active::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          background: #1064fb;
          left: 50%;
          top: 40px;
          transform: translateX(-50%);
          border-radius: 10px;
        }
      }
    }
  }
  .fix {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    height: 60;
    background: #fff;
    z-index: 2;
  }
  .intro_wrap {
    padding-top: 50px;
    padding-bottom: 55px;
    .con-main-wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-items: flex-start;
      gap: 33px;
      .img-wrap {
        img {
          width: 540px;
          height: 200px;
        }
      }
      .right-wrap {
        width: 630px;
        h3 {
          font-size: 30px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #1d2129;
        }
        p {
          margin-top: 18px;
          font-size: 16px;
          color: #656f81;
          line-height: 24px;
        }
      }
    }
  }

  .wrap_main {
    padding: 40px 0 60px 0px;
    background: #eff7ff;
    .top_wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 35px;
        font-weight: 600;
        color: #333;
      }
    }
    .con-main-wrap {
      margin: 0 auto;
      margin-top: 40px;
      width: $minWidth;
      position: relative;
      height: 300px;
      .con-main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-items: stretch;
        gap: 30px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        .list-item {
          width: 380px;
          height: auto;
          background: url("@/assets/about/card.png") no-repeat center;
          border-radius: 2px;
          padding: 20px;
          position: relative;
          box-sizing: border-box;
          h3 {
            position: absolute;
            top: 50px;
            font-size: 38px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #1064fb;
            z-index: 1;
          }
          h4 {
            margin-top: 100px;
            font-size: 30px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #1d2129;
          }
          p {
            margin-top: 6px;
            font-size: 18px;
            color: #656f81;
          }
          span {
            position: absolute;
            left: 20px;
            top: 0;
            font-size: 100px;
            font-family: DINPro-CondensedBold, DINPro;
            font-weight: normal;
            color: #e0ecff;
            opacity: 0.5;
          }
        }
      }
      .square-1 {
        position: absolute;
        width: 156px;
        height: 149px;
        right: -102px;
        top: 88px;
        z-index: 0;
      }
      .square-2 {
        position: absolute;
        width: 82px;
        height: 89px;
        left: -119px;
        bottom: -82px;
        z-index: 0;
      }
    }
  }
  .wrap_partner {
    padding: 40px 0 60px 0px;
    .top_wrap {
      width: $minWidth;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 35px;
        font-weight: 600;
        color: #333;
      }
    }
    .con-main-wrap {
      margin: 0 auto;
      margin-top: 30px;
      width: $minWidth;
      .tab-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 40px 0;
        padding-bottom: 40px;
        border-bottom: 1px solid #d7dde9;
        .tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 30px;
          width: 198px;
          box-sizing: border-box;
          cursor: pointer;
          img {
            width: 140px;
            height: 56px;
          }
          p {
            margin-top: 10px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #656f81;
            white-space: nowrap;
          }
        }
        .active {
          position: relative;
        }
        .active::after {
          content: "";
          display: block;
          position: absolute;
          width: 80px;
          height: 3px;
          background: #1064fb;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          border-radius: 10px;
        }
      }
      .con-wrap {
        margin-top: 40px;
        h4 {
          font-size: 26px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #1d2129;
        }
        img {
          margin-top: 20px;
          width: $minWidth;
        }
        p {
          margin-top: 30px;
          font-size: 18px;
          color: #656f81;
        }
      }
    }
  }
}
:deep(.css-dev-only-do-not-override-kqecok) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
:deep(.ant-anchor) {
  height: 80%;
}
:deep(.ant-anchor-link-title) {
  font-size: 20px;
}
:deep(.ant-anchor-ink) {
  width: 80px !important;
}
:deep(:where(.css-dev-only-do-not-override-kqecok).ant-anchor-wrapper-horizontal::before) {
  height: 0px;
  opacity: 0;
}
:deep(:where(.css-dev-only-do-not-override-kqecok).ant-anchor-wrapper
    .ant-anchor
    .ant-anchor-link) {
  margin-left: 50px;
}
:deep(:where(.css-dev-only-do-not-override-kqecok).ant-anchor-wrapper-horizontal
    .ant-anchor
    .ant-anchor-ink) {
  left: 50px;
}
</style>
