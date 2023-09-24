<template>
  <div class="wrap_contianer">
    <div class="wrap_banner">
      <div class="bg">
        <h3>ACB愛世博品牌戰略目標</h3>
      </div>
    </div>
    <div class="wrap_main animate__animated animate__backInUp">
      <div class="top_wrap">
        <h3>品牌戰略</h3>
      </div>
      <div class="con-main-wrap">
        <div class="img-wrap">
          <img src="@/assets/brand/intro.png" alt="" class="img-con" />
        </div>
        <div class="con">
          <p>
            擁有強大的商業合作夥伴，可以展現出一家公司的行業地位與綜合實力。
            ACB愛世博近年與多家行業翹楚展開深入合作，進一步擴大了其市場影響力，同時也深刻的影響著行業的發展方向。
            在受到市場廣泛關注的同時，ACB愛世博也更加註重自身產品的研發，並於2022年率先完成行業全線產品的研發。在公司願景“讓每個商戶都可以輕鬆開站”的指引下，我們將一如既往的助力每個渴望成功的商戶，一起攜手引領未來，邁向新的事業航程。
          </p>
        </div>
      </div>
    </div>
    <div class="wrap_partner">
      <div class="top_wrap animate__animated animate__backInUp">
        <h3>合作夥伴</h3>
      </div>
      <div class="con-main-wrap">
        <div class="tab-wrap">
          <div
            v-for="(itm, inx) in cooperateList.list"
            :class="{ 'tab-item': true, active: activeTab === inx }"
            :key="inx"
            @click="activeTab = inx"
          >
            <img
              :src="`/src/assets/brand/${activeTab === inx ? itm.acIco : itm.ico}`"
              alt=""
            />
            <p>{{ itm.name }}</p>
          </div>
        </div>
        <div class="con-wrap">
          <h4>內容簡介</h4>
          <div>
            <img
              v-for="(item, index) in cooperateList.list[activeTab]['con']"
              :src="`/src/assets/brand/${item}`"
              :key="index + '_' + item.name"
              alt=""
              class="img-con"
            />
          </div>
          <p>
            ACB愛世博做為業內知名品牌，本地化的廣告投放必不可少。在當地菲律賓合作夥伴的推介下，ACB愛世博與馬尼拉公交集團達成戰略合作，一次性投放100輛大巴廣告，形成馬尼拉一道靚麗的風景線，在菲律賓同業夥伴中造成極大影響。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const activeTab = ref(0);
const cooperateList = reactive<any>({
  list: [
    {
      ico: "icon-1.png",
      acIco: "icon-1-b.png",
      con: ["con-1.png"],
      name: "博度",
    },
    {
      ico: "icon-2.png",
      acIco: "icon-2-b.png",
      con: ["con-2.png"],
      name: "谷歌搜索",
    },
    {
      ico: "icon-3.png",
      acIco: "icon-3-b.png",
      con: ["con-3.png"],
      name: "马尼拉地标MOA大球",
    },
    {
      ico: "icon-4.png",
      acIco: "icon-4-b.png",
      con: ["con-4.png"],
      name: "新加坡G2E展会",
    },
    {
      ico: "icon-5.png",
      acIco: "icon-5-b.png",
      con: ["con-5.png"],
      name: "Telegram搜索引擎",
    },
    {
      ico: "icon-6.png",
      acIco: "icon-6-b.png",
      con: ["con-6.png"],
      name: "博友社",
    },
    {
      ico: "icon-7.png",
      acIco: "icon-7-b.png",
      con: ["con-7.png"],
      name: "菲阅不可",
    },
    {
      ico: "icon-8.png",
      acIco: "icon-8-b.png",
      con: ["con-8.png"],
      name: "马尼拉酒吧广告赞助",
    },
    {
      ico: "icon-9.png",
      acIco: "icon-9-b.png",
      con: ["con-9.png"],
      name: "马尼拉百辆巴士广告",
    },
    {
      ico: "icon-10.png",
      acIco: "icon-10-b.png",
      con: ["con-10-1.png", "con-10-2.png", "con-10-3.png", "con-10-4.png"],
      name: "纸飞机群组广告",
    },
    {
      ico: "icon-11.png",
      acIco: "icon-11-b.png",
      con: ["con-11.png"],
      name: "线下推广展示",
    },
  ],
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
  .wrap_main {
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
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
      border-radius: 0 4px 4px 0;
      .img-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          width: 500px;
          height: 300px;
        }
      }
      .con {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 0 4px 4px 0;
        padding: 30px;
        p {
          font-size: 16px;
          font-weight: 400;
          color: #656f81;
          white-space: pre-line;
          line-height: 30px;
        }
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
</style>
