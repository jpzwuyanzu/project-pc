<template>
  <div class="footer">
    <div class="wrap top">
      <div class="container">
        <img class="contact" src="@/assets/common/footer/contact.png" alt="" />
        <div class="list">
          <div class="item">
            <img class="logo" src="@/assets/common/footer/skype.png" alt="" />
            skype：XXX
          </div>
          <div class="item">
            <img
              class="logo"
              src="@/assets/common/footer/telegram.png"
              alt=""
            />
            telegram：XXX
          </div>
          <div class="item">
            <img
              class="logo"
              src="@/assets/common/footer/whatsApp.png"
              alt=""
            />
            whatsApp：XXX
          </div>
        </div>
      </div>
    </div>
    <div class="wrap middle">
      <div class="container">
        <img class="logo" src="@/assets/common/footer/logo.png" alt="" />
        <div class="list">
          <div v-for="item in productList" :key="item.route" class="item">
            {{ t(`header.navigator.productList.${item.route}.title`) }}
          </div>
        </div>
      </div>
    </div>
    <div class="wrap bottom">
      <div class="container">
        Copyright © 2000 - 2023 ACB Group. All Rights Reserved. 爱世博 版权所有
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const productList = [
  {
    route: 'web',
    icon: '',
  },
  {
    route: 'color',
    icon: '',
  },
  {
    route: 'sport',
    icon: '',
  },
  {
    route: 'monitor',
    icon: '',
  },
  {
    route: 'cdn',
    icon: '',
  },
  {
    route: 'contact',
    icon: '',
  },
  {
    route: 'yime',
    icon: '',
  },
  {
    route: 'metamask',
    icon: '',
  },
];
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  min-width: $minWidth;
  background: #15223c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrap {
    width: 100%;
    position: relative;
    .container {
      position: relative;
      margin: auto;
      width: $minWidth;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .top {
    height: 100px;
    background-size: 100% 100%;
    background: url(https://acb.bet/_nuxt/img/top-bg.4ac46bf.png);
    .container {
      .contact {
        width: 214px;
        height: 136px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .list {
        display: flex;
        align-items: center;
        gap: 69px;
        .item {
          color: #fff;
          font-size: 16px;
          .logo {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .middle {
    height: 168px;

    .logo {
      width: 198px;
      height: 60px;
      margin-right: 288px;
    }
    .list {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      font-size: 16px;
      color: #656f81;
      gap: 16px 90px;
    }
  }
  .bottom {
    border-top: 1px solid #2a3750;
    .container {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: #656f81;
    }
  }
}
</style>
