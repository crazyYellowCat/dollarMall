<!--
此文件为开发者工具生成，生成时间: 2024/1/6上午1:19:53
使用方法：
在 E:\practice\uniapp-demo\Dollar\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 E:\practice\uniapp-demo\Dollar\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <scroll-view :refresher-enabled="true" :scroll-y="true" class="scroll-view scroll-view">
    <view is="components/XtxSwiper">
      <view class="carousel XtxSwiper--carousel">
        <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
            <navigator class="navigator XtxSwiper--navigator" hover-class="none">
              <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper--indicator">
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          <text class="dot XtxSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-592 sk-text">居家</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-231 sk-text">锦鲤</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-104 sk-text">服饰</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-967 sk-text">母婴</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-130 sk-text">个护</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-951 sk-text">严选</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-111 sk-text">数码</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-513 sk-text">运动</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-435 sk-text">杂项</text>
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-384 sk-text">品牌</text>
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/HotPanel">
      <view class="panel HotPanel--panel hot HotPanel--hot">
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-115 sk-text">特惠推荐</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-350 sk-text">它们最实惠</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-285 sk-text">爆款推荐</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-386 sk-text">它们最受欢迎</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-299 sk-text">一站买全</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-974 sk-text">使用场景下精心优选</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-642 sk-text">领券中心</text>
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-111 sk-text">更多超值优惠券</text>
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
  </scroll-view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2024/1/6上午1:19:53

在 E:\practice\uniapp-demo\Dollar\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-3333-711 {
  background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-324 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}

.sk-text-14-2857-592 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-231 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-104 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-967 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-130 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-951 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-111 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-513 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-435 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-384 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}

.sk-text-14-2857-115 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-350 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.9710rpx;
  position: relative !important;
}

.sk-text-14-2857-285 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-386 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.9710rpx;
  position: relative !important;
}

.sk-text-14-2857-299 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-974 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 32.9710rpx;
  position: relative !important;
}

.sk-text-14-2857-642 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>