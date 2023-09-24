<template>
  <div class="footer">
    <div class="wrap top">
      <div class="container">
        <img class="contact" src="@/assets/common/footer/contact.png" alt="" />
        <div class="list">
          <div class="item">
            <img class="logo" src="@/assets/common/footer/skype.png" alt="" />
            XXX
          </div>
          <div class="item">
            <img
              class="logo"
              src="@/assets/common/footer/telegram.png"
              alt=""
            />
            XXX
          </div>
          <div class="item">
            <img
              class="logo"
              src="@/assets/common/footer/whatsApp.png"
              alt=""
            />
            XXX
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
import { ref } from 'vue';
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
    height: 60px;
    background-size: 100% 100%;
    background: url(https://acb.bet/_nuxt/img/top-bg.4ac46bf.png);
    .container {
      .contact {
        width: 133px;
        height: 85px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .list {
        display: flex;
        align-items: center;
        gap: 43px;
        .item {
          color: #fff;
          font-size: 12px;
          .logo {
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }

  .middle {
    height: 105px;

    gap: 180px;
    .logo {
      width: 123px;
      height: 37px;
    }
    .list {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      font-size: 12px;
      color: #656f81;
      gap: 9px 56px;
    }
  }
  .bottom {
    border-top: 1px solid #2a3750;
    .container {
      width: 100%;
      height: 37px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 400;
      color: #656f81;
    }
  }
}
</style>
