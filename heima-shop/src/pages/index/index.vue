<script setup lang="ts">

import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '../../services/home'
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotPanelItem } from '@/types/home';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from "./components/HotPanel.vue"
import type { XtxGuessInstance } from '@/types/components';
import PageSkeleton from './components/PageSkeleton.vue';
import { useGuessList } from '@/composables';


let bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()

  bannerList.value = res.result;
}

let categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result

}

let hotList = ref<HotPanelItem[]>([])
const getHotPanel = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result;
}
const guessRef = ref<XtxGuessInstance>()
//scroll-view触底事件
const onScrolltolower = () => {
  console.log('++++')
  guessRef.value?.getMore()
}
let isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(),
  getHomeCategory(),
  getHotPanel()])
  isLoading.value = false
})
/*设置当前下拉刷新状态
true 下拉刷新已经被触发
false 下拉刷新未被触发 */
let isTriggered = ref(false)
//下拉刷新事件
const onRefresherrefresh = async () => {
  //开启加载
  isTriggered.value = true;
  //下拉刷新先重置猜你喜欢模块数据  使用vue3的组合式函数实现相当于minxin
  const { guessRef, onScrolltolower } = useGuessList()
  // guessRef.value?.resetData();
  //promise.all优化加载速度，三个接口可以同时请求
  await Promise.all([getHomeBannerData(),
  getHomeCategory(),
  getHotPanel(), guessRef.value?.getMore()])
  isTriggered.value = false;
}
</script>

<template>
  <CustomNavbar />
  <scroll-view class='scroll-view' scroll-y @scrolltolower="onScrolltolower" refresher-enabled
    :refresher-triggered=isTriggered @refresherrefresh="onRefresherrefresh">
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background: #f7f7f7;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.scroll-view {
  // 高度自适应
  flex: 1;
}
</style>
