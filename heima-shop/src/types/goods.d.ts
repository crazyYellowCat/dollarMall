import type { AddressItem } from "./address";
/* 商品信息 */
export type GoodsResult = {
    /**
    * 品牌信息
    */
    brand: Brand;
    /**
     * 所属分类，多级以数组形式体现，如[一级分类，二级分类，三级分类]
     */
    categories: Category[];
    /**
     * 收藏数量
     */
    collectCount: number;
    /**
     * 评价数量
     */
    commentCount: number;
    /**
     * 备注
     */
    desc: string;
    /** 商品详情: 包含详情属性 + 详情图片 */
    details: Details;
    /**
     * 折扣
     */
    discount: number;
    evaluationInfo: null;
    /**
     * 24小时热销
     */
    hotByDay: HotByDay[];
    /**
     * id
     */
    id: string;
    /**
     * 库存
     */
    inventory: number;
    isCollect: null;
    /**
     * 是否为预售商品
     */
    isPreSale: boolean;
    /**
     * 主图图片集合
     */
    mainPictures: string[];
    /**
     * 主图视频集合
     */
    mainVideos: string[];
    /**
     * 商品名称
     */
    name: string;
    /**
     * 原价
     */
    oldPrice: string;
    /**
     * 当前价格
     */
    price: string;
    recommends: null;
    /**
     * 销量
     */
    salesCount: number;
    /**
     * 同类商品
     */
    similarProducts: SimilarProduct[];
    /**
     * sku集合
     */
    skus: Skus[];
    /**
     * 可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
     */
    specs: ResultSpec[];
    /**
     * spu编码
     */
    spuCode: string;
    /**
     * 用户收货地址列表
     */
    userAddresses: null;
    /**
     * 主图视频比例,1为1:1/16:9，2为3:4
     */
    videoScale: number;
}

/* 商品详情 */
export type Details = {
    /** 商品属性集合[ 属性信息 ] */
    properties: DetailsPropertyItem[]
    /** 商品详情图片集合[ 图片链接 ] */
    pictures: string[]
}

/** 属性信息 */
export type DetailsPropertyItem = {
    /** 属性名称 */
    name: string
    /** 属性值 */
    value: string
}

/** sku信息 */
export type SkuItem = {
    /** id */
    id: string
    /** 库存 */
    inventory: number
    /** 原价 */
    oldPrice: number
    /** sku图片 */
    picture: string
    /** 当前价格 */
    price: number
    /** sku编码 */
    skuCode: string
    /** 规格集合[ 规格信息 ] */
    specs: SkuSpecItem[]
}

/** 规格信息 */
export type SkuSpecItem = {
    /** 规格名称 */
    name: string
    /** 可选值名称 */
    valueName: string
}

/** 可选规格信息 */
export type SpecItem = {
    /** 规格名称 */
    name: string
    /** 可选值集合[ 可选值信息 ] */
    values: SpecValueItem[]
}
/** 可选值信息 */
export type SpecValueItem = {
    /** 是否可售 */
    available: boolean
    /** 可选值备注 */
    desc: string
    /** 可选值名称 */
    name: string
    /** 可选值图片链接 */
    picture: string
}
/** 地址信息 */
// export type AddressItem = {
//     /** 收货人姓名 */
//     receiver: string
//     /** 联系方式 */
//     contact: string
//     /** 省份编码 */
//     provinceCode: string
//     /** 城市编码 */
//     cityCode: string
//     /** 区/县编码 */
//     countyCode: string
//     /** 详细地址 */
//     address: string
//     /** 默认地址，1为是，0为否 */
//     isDefault: number
//     /** 收货地址 id */
//     id: string
//     /** 省市区 */
//     fullLocation: string
// }
export type SimilarProduct = {
    /**
  * 备注
  */
    desc: string;
    /**
     * 折扣
     */
    discount: null;
    /**
     * id
     */
    id: string;
    /**
     * 商品名称
     */
    name: string;
    /**
     * 销量
     */
    orderNum: number;
    /**
     * 商品图片链接
     */
    picture: string;
    /**
     * 价格
     */
    price: string;
}