import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParams = {
    code: string,
    encryptedData: string,
    iv: string
}
//登陆接口
export const postLoginWxMinAPI = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data
    })
}

/* 获取手机号功能，目前针对非个人开发者，且完成了认证的小程序开放，详见文档。

温馨提示

为了更好实现登录后续业务，后端提供内部测试接口，只需要传手机号即可实现快捷登录。 */

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
    return http<LoginResult>({
        method: "POST",
        url: '/login/wxMin/simple',
        data: { phoneNumber }
    })
}