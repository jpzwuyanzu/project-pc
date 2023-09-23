<template>
  <div class="page_contaier">
    <HeaderCom />
    <Banner/>
    <RouterView />
    <FooterCom />
  </div>
</template>
<script setup lang="ts">
import HeaderCom from "@/components/Header.vue";
import FooterCom from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue"
</script>

<style lang="scss" scoped>
.page_contaier {
  width: 100%;
  height: 100%;
}
</style>
