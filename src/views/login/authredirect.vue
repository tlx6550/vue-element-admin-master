<script>
    export default {
      name: 'authredirect',
      created() {
        // http://blog.csdn.net/qq_27093465/article/details/50731087
        // search	从问号 (?) 开始的 URL（查询部分）
        const hash = window.location.search.slice(1)
        // 用来刷新父窗口https://www.cnblogs.com/itliucheng/p/4917518.html
        window.opener.location.href = window.location.origin + '/login#' + hash
        window.close()
  }
    }
</script>
