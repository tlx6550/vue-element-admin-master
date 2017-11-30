// 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
//
// 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

Action 通过 store.dispatch 方法触发
（或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用）

在action中提交mutation，action中可以进行异步操作，但是mutation却不可以！

some() 方法用于检测数组中的元素是否满足指定条件（函数提供）返回布尔值。
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

用该属性获取页面 URL 地址：
window.location 对象所包含的属性
属性	描述
hash	从井号 (#) 开始的 URL（锚）
host	主机名和当前 URL 的端口号
hostname	当前 URL 的主机名
href	完整的 URL
pathname	当前 URL 的路径部分
port	当前 URL 的端口号
protocol	当前 URL 的协议
search	从问号 (?) 开始的 URL（查询部分）

 // 用来刷新父窗口https://www.cnblogs.com/itliucheng/p/4917518.html
 window.opener.location.href = window.location.origin + '/login#' + hash
