<template>

	<section class="section">
		<button class="button is-info" @click="openModal()">
			<i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Create
		</button>


		<div v-if="isModalOpen" class="modal is-active">
			<div class="modal-background" @click="closeModal()">
					<slot name="background"></slot>
			</div>
			<div class="modal-content box">
					<slot>Modal default content!</slot>
			</div>
			<button class="modal-close" @click="closeModal()"></button>
		</div>
	</section>

</template>


<script>

	import { mapActions } from 'vuex'

	export default {

		components: {
		},

		data(){

			return {
			}
		},

		computed: {
			isModalOpen () {
				return this.$store.getters.isModalOpen
			},
		},

		methods:
			Object.assign({},
				mapActions([ 'closeModal' ]),
			)

	}

</script>


<style>
</style>


	