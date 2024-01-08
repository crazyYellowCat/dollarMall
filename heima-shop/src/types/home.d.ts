import type { GoodsItem } from "./global";

export interface BannerItem {
    /**
   * 跳转链接
   */
    hrefUrl: string;
    /**
     * id
     */
    id: string;
    /**
     * banner链接
     */
    imgUrl: string;
    /**
     * 跳转类型1、页面2、H5 3、小程序（小程序使用）
     */
    type: number;
}

export interface CategoryItem {
    /** 图标路径 */
    icon: string
    /** id */
    id: string
    /** 分类名称 */
    name: string
}
//热门推荐数据类型
export interface HotPanelItem {
    /**
 * 推荐说明
 */
    alt: string;
    /**
     * id
     */
    id: string;
    /**
     * 图片集合
     */
    pictures: string[];
    /**
     * 跳转地址
     */
    target: string;
    /**
     * 推荐标题
     */
    title: string;
    /**
     * 推荐类型
     */
    type: string;
}
/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem