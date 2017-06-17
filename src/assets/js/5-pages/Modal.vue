<template>

	<section class="section">
		<button class="button is-info" @click.prevent="openPrew">
			<i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Preview
		</button>

		<button class="button is-warning" @click.prevent="openLogin">
			<i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Login
		</button>

		<modal-box>
			<div slot="content">

				<component :is="elModal"></component>

			</div>
		</modal-box>

	</section>

</template>


<script>

	import { mapActions } from 'vuex'
	import modalBox from '../4-components/modal/modalBox.vue'
	import createArticle from '../4-components/forms/createArticle.vue'
	import authLogin from '../4-components/forms/authLogin.vue'
	import authRegister from '../4-components/forms/authRegister.vue'

	export default {

		components: {
			'modal-box': modalBox,
			'form-article': createArticle,
			'form-login': authLogin,
			'form-register': authRegister
		},

		data(){

			return {
			}
		},

		computed: {
			elModal (){
				return this.$store.getters.elModal
			}
		},

		methods:
			Object.assign({},
				mapActions([ 'openModal', 'elLogin', 'elPrew' ]),

				{
					openPrew(){
						this.$store.dispatch( 'elPrew' )
						this.$store.dispatch( 'openModal' )
					},

					openLogin(){
						this.$store.dispatch( 'elLogin' )
						this.$store.dispatch( 'openModal' )
					}
				}
			),

	}

</script>






	