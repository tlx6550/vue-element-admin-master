<template>
	<section class="app-main" style="min-height: 100%">
		<transition name="fade" mode="out-in">
       <!--保证每次切入的试图都重新加载-->
			<router-view :key="key"></router-view>
		</transition>
	</section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
