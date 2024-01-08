export type ProfileDetail = {
    /** 用户ID */
    id: number
    /** 头像  */
    avatar: string
    /** 账户名  */
    account: string
    /** 昵称 */
    nickname?: string
    /** 性别 */
    gender?: Gender
    /** 生日 */
    birthday?: string
    /** 省市区 */
    fullLocation?: string
    /** 职业 */
    profession?: string
}
//字面量类型
type Gender = '男' | '女'

/** 个人信息 修改请求体参数 Pick:选取ProfileDetail中的某些字段类型  &：联合类型 */
export type ProfileParams = Pick<ProfileDetail, 'nickname' | "gender" | "profession" | "birthday"> & {
    provinceCode?: string,
    cityCode?: string,
    countryCode?: string
}