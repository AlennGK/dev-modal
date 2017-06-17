<template>

	<div v-if="isModalOpen" class="modal is-active">
		<div class="modal-background" @click="closeModal()">
				<slot name="background"></slot>
		</div>
		<div class="modal-content box">
				<slot>Modal default content!</slot>
		</div>
		<button class="modal-close" @click="closeModal()"></button>
	</div>

</template>


<script>
import { mapActions } from 'vuex';

	export default {
		name: 'modalBox',

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