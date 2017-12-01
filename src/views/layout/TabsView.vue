<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" :type="isActive(tag.path)?'primary':''" @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    visitedViews() {
      // 只取倒数第六个开始，保证只展现6个可关闭的标签tab
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          // slice() 方法可从已有的数组中返回选定的元素。
          // -1 指最后一个元素，-2 指倒数第二个元素
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute() {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    addViewTabs() {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive(path) {
      return path === this.$route.path
    }
  },
  watch: {
    $route() {
      this.addViewTabs()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tabs-view-container {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .tabs-view {
      margin-left: 10px;
    }
  }
</style>
