<template>

	<section class="section">
		<button class="button is-info" @click.prevent="openCreate">
			<i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Modal A
		</button>

		<button class="button is-warning" @click.prevent="openLogin">
			<i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Modal B
		</button>

		<modal-box>
			<div class="content" slot="content">

				<component :is="el"></component>

			</div>
		</modal-box>

	</section>

</template>


<script>

	import { mapActions } from 'vuex'
	import modalBox from '../4-components/modal/modalBox.vue'
	import createArticle from '../4-components/forms/createArticle.vue'
	import authLogin from '../4-components/forms/authLogin.vue'

	export default {

		components: {
			'modal-box': modalBox,
			'form-article': createArticle,
			'form-login': authLogin
		},

		data(){

			return {
				el: ''
			}
		},

		computed: {
			isModalOpen () {
				return this.$store.getters.isModalOpen
			},
		},

		methods:
			Object.assign({},
				mapActions([ 'closeModal', 'openModal' ]),

				{
					openCreate(){
						this.el = 'form-article'
						this.$store.dispatch( 'openModal' )
					},

					openLogin(){
						this.el = 'form-login'
						this.$store.dispatch( 'openModal' )
					}
				}
			),

	}

</script>



	