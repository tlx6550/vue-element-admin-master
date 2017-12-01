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
 
 动态换肤简单思路
 将生成好的样式文件，通过gulp-css-wrap工具[批量为css文件扩展命名空间]
 如.a{} 批量后改为.new.a{}
 然后在body处动态切换添加class为new即可
 
 使用递归组件解决菜单多级时候嵌套问题
 
 使用过滤管道函数
 <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
 filters: {
     statusFilter(status) {
       const statusMap = {
         published: 'success',
         draft: 'gray',
         deleted: 'danger'
       }
       return statusMap[status]
     }
   }
   
  this.$set(v, 'edit', false) 
  vm.$set( target, key, value ) 
  返回值： 设置的值.

//赋值对象是一个obj
this.objData=Object.assign({}, row) //这样就不会共用同一个对象

//数组我们也有一个巧妙的防范
newArray = oldArray.slice(); //slice会clone返回一个新数组

假设我们有四个tab选项，每个tab都会向后端请求数据，但我们希望一开始只会请求当前的tab数据，而且tab来回切换的时候不会重复请求，只会实例化一次。首先我们想到的就是用v-if 这样的确能做到一开始不会挂载后面的tab，但有一个问题，每次点击这个tab组件都会重新挂载一次，这是我们不想看到的，这时候我们就可以用到<keep-alive>了。
keep-alive 
包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。 它是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

// slice() 方法可从已有的数组中返回选定的元素。
// -1 指最后一个元素，-2 指倒数第二个元素

通过观察路由的变化，执行相应的函数
  watch: {
    $route() {
      this.addViewTabs()
    }
  }
  
  // 保证每次切入的试图都重新加载
<router-view :key="key"></router-view> 
computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }