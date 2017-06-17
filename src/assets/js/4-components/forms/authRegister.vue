<template>

    <form @submit.prevent='register'>
        <div class="columns is-marginless">
            <div class="column is-2"><i class="fa-2x fa fa-registered"></i></div>
            <!--<div class="column is-2 is-offset-8"><i class="is-pulled-right fa-2x fa fa-trash"></i></div>-->
        </div>
		<label class="label has-text-centered">Register new User</label>
		<hr>

		<div class="columns">
			<div class="column is-half is-offset-one-quarter">
				<div class="field">
					<p class="control has-icon has-icon-left">
						<input class="input" name="username" type="text" placeholder="Username" v-model='username'>
						<span class="icon is-small"><i class="fa fa-user"></i></span>
					</p>
					<p v-if="error" class="help is-danger">This name is taken or wrong!</p>
					<br>
				</div>

				<div class="field">
					<p class="control has-icon has-icon-left">
						<input class="input" name="email" type="text" placeholder="Email" v-model='email'>
						<span class="icon is-small"><i class="fa fa-envelope"></i></span>
					</p>
					<p v-if="error" class="help is-danger">This email is wrong!</p>
					<br>
				</div>

				<div class="field">
					<p class="control has-icon has-icon-left">
						<input class="input" name="password" type="password" placeholder="Password" v-model='password'>
						<span class="icon is-small"><i class="fa fa-key"></i></span>
					</p>
					<p class="control has-icon has-icon-left">
						<input class="input" name="password" type="password" placeholder="Password" v-model='password2'>
						<span class="icon is-small"><i class="fa fa-check"></i></span>
					</p>
				</div>
				<p v-if="error" class="help is-danger">Check your credentials please.</p>
			</div>
		</div>
		<hr>

		<div class="columns">
			<div class="column is-half is-offset-one-quarter">
				<a @click.prevent="openLogin" class="is-success">Login here!</a>
				<button class="button is-danger is-pulled-right">Register</button>
			</div>
		</div>


	</div>

    </form>

</template>


<script>

	import { mapActions } from 'vuex'


    export default {
        name: 'Register',

        data(){
            return {
                username: '',
                email: '',
				password: '',
				password2: '',
				error: false
            }
        },

        created() {
        },

        mounted() {
        },

        computed: {
            verify(){

            }
        },

		methods:
			Object.assign({},
				mapActions([ 'elLogin' ]),

				{
					openLogin(){
						this.$store.dispatch( 'elLogin' )
					}
				}
			),


    }

</script>
