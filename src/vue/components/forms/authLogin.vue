<template>

    <form @submit.prevent='logIn'>
        <div class="columns is-marginless">
            <div class="column is-2"><i class="fa-2x fa fa-sign-in"></i></div>
            <!--<div class="column is-2 is-offset-8"><i class="is-pulled-right fa-2x fa fa-trash"></i></div>-->
        </div>
		<label class="label has-text-centered">Welcome back</label>
		<hr>

		<div class="columns">
			<div class="column is-half is-offset-one-quarter">
				<div class="field">
					<p class="control has-icon has-icon-left">
						<input class="input" name="email" type="email" placeholder="Email" v-model='email'>
						<span class="icon is-small"><i class="fa fa-envelope"></i></span>
					</p>
					<br>
				</div>

				<div class="field">
					<p class="control has-icon has-icon-left">
						<input class="input" name="password" type="password" placeholder="Password" v-model='password'>
						<span class="icon is-small"><i class="fa fa-key"></i></span>
					</p>
				</div>
				<br>
				<p v-if="error" class="help is-danger">Check your credentials please.</p>
			</div>
		</div>
		<hr>

		<div class="columns">
			<div class="column is-half is-offset-one-quarter">
				<a @click.prevent="openRegister" class="is-success">Register here!</a>
				<button class="button is-success is-pulled-right">Login</button>
			</div>
		</div>


	</div>

    </form>

</template>


<script>

	import { mapActions } from 'vuex'
	import { required } from 'vuelidate/lib/validators'

    export default {
        name: 'Login',

        data(){
            return {
                email: '',
				password: '',
				error: false
            }
        },

		methods:
			Object.assign({},
				mapActions([ 'elRegister' ]),

				{
					openRegister(){
						this.$store.dispatch( 'elRegister' )
					},
				}
			),

    }

</script>
