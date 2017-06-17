<template>
	<div class="layout-default">
		<!-- 2.1 NAVIGATION -->

		<!-- 2.2 MAIN CONTENT -->
		<router-view></router-view>
	</div>
</template>


<script>

    import store from './vuex/store.js'

    export default {
        name: 'vue',
        store,

    }

</script>
