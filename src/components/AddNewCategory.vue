<template>
  <v-sheet width="300" class="mx-auto">
    <v-form ref="form" @submit.prevent="onSubmit()" >

      <v-text-field v-model="name" :error-messages="nameErrors" required @input="$v.name.$touch()" :rules="rules"
        label="Name"></v-text-field>
      <v-text-field v-model="description" :error-messages="descriptionErrors" required @input="$v.description.$touch()"
        @blur="$v.description.$touch()" :rules="rules" label="Description"></v-text-field>
      <v-switch v-model="model" hide-details inset required></v-switch>
      <v-btn type="submit" value="Submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
// import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

//import { mapActions } from 'vuex';
export default {
  // mixins: [validationMixin],

  validations: {
    name: { required },
    description: { required },
    // select: { required },
  
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      // !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    descriptionErrors() {
      const errors = []
      if (!this.$v.description.$dirty) return errors
     
      !this.$v.description.required && errors.push('description is required.')
      return errors
    },
  },
  props: ['addItems'],
  methods: {

    // ...mapActions(['addCategories']),


    onSubmit() {
      this.$v.$touch()
      // event.target.reset()
      //e.preventDefault();
      let addData = { name: this.name, description: this.description, model: this.model }
      this.$store.dispatch('addCategories', addData),
    //  event.target.reset();
    this.$refs.form.reset()
    },

  },

  data: () => ({
    name: '',
    description: '',
    model: '',
    data: [],
    
    

    rules: [
      value => {
        if (value) return true

        return 'Item is required.'
      },
    ],
  }),
}
</script>