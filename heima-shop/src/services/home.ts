import type { PageParams, PageResult } from '@/types/global'
import { http } from '../utils/http'
import type { BannerItem, CategoryItem, GuessItem, HotPanelItem } from '@/types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {

    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite: distributionSite
        }
    })
}
//获取首页前台分类
export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli'
    })
}
//获取热门推荐
export const getHomeHotAPI = () => {
    return http<HotPanelItem[]>({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}
/* 猜你喜欢-小程序
GET
/home/goods/guessLike */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data: data
    })
}