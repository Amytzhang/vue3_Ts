/* eslint-disable */
declare module '*.vue' {
  import {type,DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// declare module 'hello' {
//   import hello from '@/mixins/hello'
//   export default hello
// }