<template>
  <div :class="['header', { whiteBG: y > 160 }]">
    <div class="container">
      <img class="logo" src="@/assets/common/header/logo/logo.png" alt="" />
      <router-link
        :class="[
          'link',
          { active: routeName === 'home' && ['', '#1'].includes(routeHash) },
        ]"
        to="/#1"
        >{{ t('header.navigator.home') }}</router-link
      >
      <router-link
        :class="[
          'link',
          { active: routeName === 'home' && routeHash === '#2' },
        ]"
        to="/#2"
        @click="handleProduct_mouseout"
        @mouseover="handleProduct_mouseover"
        @mouseout="handleProduct_mouseout"
        >{{ t('header.navigator.product') }} <DownOutlined
      /></router-link>
      <router-link
        :class="['link', { active: routeName === 'cooperate' }]"
        to="/cooperate"
        >{{ t('header.navigator.cooperation') }}</router-link
      >
      <router-link
        :class="['link', { active: routeName === 'hatch' }]"
        to="/hatch"
        >{{ t('header.navigator.hatchCenter') }}</router-link
      >
      <router-link
        :class="['link', { active: routeName === 'brand' }]"
        to="/brand"
        >{{ t('header.navigator.brand') }}</router-link
      >
      <router-link
        :class="['link', { active: routeName === 'about' }]"
        to="/about"
        >{{ t('header.navigator.aboutUs') }}</router-link
      >
      <div class="placeholder"></div>
      <div class="lang">
        <a-dropdown placement="bottomRight" overlay-class-name="menu">
          <div class="title">
            <img
              v-if="locale === 'zh'"
              class="lang-logo"
              src="@/assets/common/header/language/zh.png"
              alt=""
            />
            <img
              v-else-if="locale === 'en'"
              class="lang-logo"
              src="@/assets/common/header/language/en.png"
              alt=""
            />
            <img
              v-else-if="locale === 'zh-tw'"
              class="lang-logo"
              src="@/assets/common/header/language/zh-tw.png"
              alt=""
            />
            {{ t('lang') }}

            <DownOutlined />
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <div class="menu-item" @click="changeLang('zh')">
                  <img
                    class="lang-logo"
                    src="@/assets/common/header/language/zh.png"
                    alt=""
                  />中文简体
                </div>
              </a-menu-item>
              <a-menu-item>
                <div @click="changeLang('en')">
                  <img
                    class="lang-logo"
                    src="@/assets/common/header/language/en.png"
                    alt=""
                  />English
                </div>
              </a-menu-item>
              <a-menu-item>
                <div @click="changeLang('zh')">
                  <img
                    class="lang-logo"
                    src="@/assets/common/header/language/zh-tw.png"
                    alt=""
                  />中文繁体
                </div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <div v-if="visibleProduct" class="product-wrap">
      <div
        class="product-list"
        @mouseover="handleProduct_mouseover"
        @mouseout="handleProduct_mouseout"
      >
        <router-link
          v-for="item in productList"
          :key="item.route"
          v-slot="{ navigate }"
          :to="`/${item.route}`"
          custom
        >
          <div
            class="item"
            role="link"
            @click="
              () => {
                visibleProduct = false;
                navigate();
              }
            "
            @keypress.enter="navigate"
          >
            <a-image
              :width="25"
              :height="25"
              :src="item.icon"
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
            />
            <div class="content">
              <h4>
                {{ t(`header.navigator.productList.${item.route}.title`) }}
              </h4>
              <p>{{ t(`header.navigator.productList.${item.route}.desc`) }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteRecordName } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';

import { DownOutlined } from '@ant-design/icons-vue';

const { y } = useWindowScroll();

const { locale, t } = useI18n();

const routeName = ref<RouteRecordName>('');
const routeHash = ref('');

const route = useRoute();
watch(
  () => route.path,
  () => {
    const { name, hash } = route;
    routeName.value = name as RouteRecordName;
    routeHash.value = hash;
  },
  { immediate: true },
);

const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('lang', lang); // 重要！下面遇到问题里解释
};

const visibleProduct = ref(false);
let isPreventProductHide = false;

const handleProduct_mouseover = () => {
  isPreventProductHide = visibleProduct.value;
  visibleProduct.value = true;
};

const handleProduct_mouseout = () => {
  setTimeout(() => {
    if (!isPreventProductHide) {
      visibleProduct.value = false;
    }
    isPreventProductHide = false;
  });
};

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
@mixin font() {
  cursor: pointer;
  font-weight: 400;
  color: #1d2129;
  font-size: 12px;
  text-decoration: none;
}
$color: #1064fb;
.header {
  height: 42px;
  width: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: $minWidth;
    height: 42px;
    margin: auto 0;

    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;

    .logo {
      width: 103px;
      height: 31px;
      margin-right: 29px;
    }
    .link {
      margin-right: 26px;
      @include font();
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

      &.active {
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          background: #1d2129;
          left: 50%;
          bottom: 5px;
          transform: translateX(-50%);
          border-radius: 1px;
        }
      }
      &:hover {
        color: $color;
      }
    }
    .placeholder {
      flex: 1;
    }
    .lang {
      @include font();
      margin-right: 10px;
      position: relative;
      .title {
        &:hover {
          color: $color;
        }
      }
      .logo {
        width: 9px;
        height: 9px;
        margin-right: 2px;
      }
    }
  }
  &.whiteBG,
  &:hover {
    background: #fff;
    box-shadow: 0 3px 11px 0 rgba(16, 40, 90, 0.1);

    .link {
      &.active {
        color: $color;
        &::after {
          background: $color;
        }
      }
    }
  }
}

.menu {
  .menu-item {
    display: flex;
    align-items: center;
    @include font();
  }
}
.lang-logo {
  width: 9px;
  height: 9px;
  margin-right: 2px;
}
.product-wrap {
  width: 100%;
  position: fixed;
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
  display: flex;
  .product-list {
    width: 1200px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 auto;

    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(30, 108, 249, 0.14);
    border-radius: 0 0 0.01042rem 0.01042rem;
    .item {
      width: 25%;
      min-height: 56px;
      padding: 12px 18px 12px 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      &:hover {
        background: #eff7ff;
      }
      .content {
        font-size: 12px;
        h4 {
          font-weight: 500;
          color: #1d2129;
        }
        p {
          color: #656f81;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
