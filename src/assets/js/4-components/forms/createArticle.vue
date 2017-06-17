<template>

    <section class="section">
        <form method="POST" action="url.articlesApi" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="columns">
                <div class="column is-8 field">
                    <label class="label">Title</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Name your article."
                        v-model="form.title">
                    </p>
                    <p class="help is-danger" 
                        v-text="form.errors.get('title')"
                        v-if="form.errors.has('title')">
                        </p>
                </div>

                <div class="column is-2 field">
                    <label class="label"><i class="fa fa-cc" aria-hidden="true"></i></label>
                    <p class="control">
                        <input class="input" type="text" disabled
                        v-model="form.autor">
                    </p>
                </div>
                
                <div class="column is-2 field">
                    <label class="label">Project</label>
                    <p class="control">
                        <span class="select">
                            <select v-model="form.project_id">
                                <option value="def">Select Project</option>
                                <option value="1">Burrien</option>
                            </select>
                        </span>
                    </p>
                    <p class="help is-danger" v-text="form.errors.get('project_id')"></p>
                </div>
            </div>
                
            <div class="columns">
                <div class="column is-12 field">
                    <label class="label"><i class="fa fa-file-text" aria-hidden="true"></i> Article</label>
                    <p class="control">
                        <textarea class="textarea" placeholder="Markdown powered!"
                        v-model="form.body">
                        </textarea>
                    </p>
                    <p class="help is-danger" v-text="form.errors.get('body')"></p>
                </div>
            </div>

            <div class="columns">
                <div class="column is-8 field">
                    <label class="label">Preview</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Article preview. ~ 50 words in plain text"
                        v-model="form.preview">
                    </p>
                    <p class="help is-danger" v-text="form.errors.get('preview')"></p>
                </div>

                <div class="column is-2 is-offset-2 field">
                    <label class="label">Level</label>
                    <p class="control">
                        <span class="select">
                            <select v-model="form.level">
                                <option value="def">Select Clerance</option>
                                <option value="0">L0 User</option>
                                <option value="1">L1 Public</option>
                            </select>
                        </span>
                    </p>
                    <p class="help is-danger" v-text="form.errors.get('level')"></p>
                </div>
            </div>

            <div class="columns">
                <div class="column is-offset-8">
                    <!--<a class="button is-info">
                        <span class="icon is-small">
                        <i class="fa fa-eye"></i>
                        </span>
                        <span>View</span>
                    </a>
                    <a class="button is-primary">
                        <span class="icon is-small">
                        <i class="fa fa-floppy-o"></i>
                        </span>
                        <span>Save</span>
                    </a>
                    <a class="button is-warning">
                        <span class="icon is-small">
                        <i class="fa fa-pencil"></i>
                        </span>
                        <span>Edit</span>
                    </a>-->
                    <button class="button is-success" :disabled="form.errors.any()">
                        <span class="icon is-small">
                        <i class="fa fa-check"></i>
                        </span>
                        <span>Create</span>
                    </button>
                </div>
            </div>
        </form>


    </section>

</template>


<script>

    import Form from '../../2-core/Form.js'
    import url from '../../2-core/Config.js'

    export default {
        name: 'createArticle',

         data(){
            return {
                form: new Form({
                    // project_id: "def",
                    // level: "def",
                    // title:'',
                    // body: '',
                    project_id: "1",
                    title:'Testing',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quis aliquam, perspiciatis cumque in, maiores inventore ab odio saepe, accusamus minima. Earum culpa natus debitis, cupiditate omnis doloremque possimus vitae.',
                    preview: '',
                    level: "0",
                    visits: "0",
                    flame: "0",
                    icon_css: 'fa fa-camera-retro fa-3x',
                    img: 'http://placehold.it/250x225',
                }),


                autor: 'Autor',
                user_id: '1',
            
          }
     },

        methods: {

            onSubmit() {
                this.form.post( url.domain + url.articlesApi )
                    .then(data => { this.$router.push( '/Articles' ) })
                    .catch(errors => console.log(errors))
            }

        },


    }

</script>


<style lang='sass'>
</style>