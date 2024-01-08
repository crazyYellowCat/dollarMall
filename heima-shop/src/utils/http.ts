import { useMemberStore } from "@/stores"

//请求地址
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//拦截器配置
const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        //非http 开头拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url
        }
        //请求超时
        options.timeout = 10000
        options.header = {
            'souce-client': 'miniapp',
            ...options.header
        }
        //添加请求头token
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token;
        }
    }
}
//拦截request请求
uni.addInterceptor('request', httpInterceptor)
//拦截上传文件uploadFile
uni.addInterceptor('uploadFile', httpInterceptor)


/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
interface Data<T> {
    code: string,
    msg: string,
    result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
    //返回一个promise对象 
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            //请求成功
            success(res) {
                //状态码2xx，参考axios设计
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    //提取核心数据
                    //as 类型断言
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    //401错误（未授权）->清理用户信息，跳转登陆页
                    const mermberStore = useMemberStore()
                    mermberStore.clearProfile();
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    //其他错误，根据后端返回错误信息提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误'
                    })
                    reject(res)
                }
            },
            //响应失败
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，换个网络试试'
                })
                reject(err)
            }
        })
    })

}