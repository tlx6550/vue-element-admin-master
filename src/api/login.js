import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  // `data`选项是作为一个请求体而需要被发送的数据
  // 该选项只适用于方法：`put/post/patch`
  return fetch({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  // `params`选项是要随请求一起发送的请求参数----一般链接在URL后面
  // 他的类型必须是一个纯对象或者是URLSearchParams对象
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

