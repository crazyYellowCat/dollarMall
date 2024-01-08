
import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot"
import { http } from "@/utils/http"
// type HotParams = PageParams & 
interface subType { subType?: string }
type HotParams = PageParams & subType
export const getHotRecommondAPI = (url: string, data?: HotParams) => {
    return http<HotResult>({
        method: 'GET',
        url: url,
        data: data
    })
}