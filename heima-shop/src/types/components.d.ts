
/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
//配置全局组件类型
import 'vue'
// import XtxSwiper from '@/components/XtxSwiper'
// import XtxGuess from '@/components/XtxGuess'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
//定义组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>