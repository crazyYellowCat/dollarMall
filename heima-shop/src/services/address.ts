import { http } from "@/utils/http"
import type { AddressItem, AddressParams } from "@/types/address"
/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data
    })
}
/**
 * 获取收货地址列表
 * @param data 请求参数
 */
/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
    return http<AddressItem[]>({
        method: 'GET',
        url: '/member/address',
    })
}