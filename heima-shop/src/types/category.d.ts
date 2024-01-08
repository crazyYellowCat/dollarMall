import type { GoodsItem } from "./global";

export type CategoryTopItem = {
    /**
   * 二级分类集合
   */
    children: CategoryChildItem[];
    /**
     * 一级分类id
     */
    id: string;
    /**
     * 一级分类图片集
     */
    imageBanners: string[];
    /**
     * 一级分类名称
     */
    name: string;
    /**
     * 一级分类图片
     */
    picture: string;
}

export type CategoryChildItem = {
    // categories: null;
    /**
     * 商品集合
     */
    goods: GoodsItem[];
    /**
     * 二级分类id
     */
    id: string;
    /**
     * 二级分类名称
     */
    name: string;
    // parentId: null;
    // parentName: null;
    /**
     * 二级分类图片
     */
    picture: string;
    // saleProperties: null;
}