<template>
    <v-main>
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form" @submit.prevent="onSubmit">
                 <v-text-field v-model="name" :error-messages="nameErrors"  @input="$v.name.$touch()"
                    @blur="$v.name.$touch()" label="name"></v-text-field>
                   <v-text-field v-model="price" :error-messages="priceErrors"  @input="$v.price.$touch()"
                    @blur="$v.price.$touch()" label="price"></v-text-field>
                  <v-text-field v-model="description" :error-messages="descriptionErrors" @input="$v.description.$touch()"
                    @blur="$v.description.$touch()" label="Description"></v-text-field>
                 <v-select v-model="category" :error-messages="selectErrors" @input="$v.category.$touch()"
                    @blur="$v.category.$touch()" :items="items" label="category"></v-select>
                  <v-switch v-model="model" hide-details inset></v-switch>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-main>
</template>

<script>
//import VueCurrencyFilter from 'vue-currency-filter'
// import { reactive, ref } from 'vue'
//   import { useVuelidate } from '@vuelidate/core'
// import { validationMixin } from 'vuelidate'
import { required, maxLength, numeric } from 'vuelidate/lib/validators'



//   import { email, required } from '@vuelidate/validators'
export default {
    // mixins: [validationMixin],
    validations: {
        name: { required, maxLength: maxLength(10) },
        price: { numeric, required },
        description: { required },
        category: { required },

    },
    computed: {
        selectErrors() {
            const errors = []
            if (!this.$v.category.$dirty) return errors
            !this.$v.category.required && errors.push('Select a Item')
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        descriptionErrors() {
            const errors = []
            if (!this.$v.description.$dirty) return errors
           
            !this.$v.description.required && errors.push('description is required.')
            return errors
        },
        // descriptionErrors() {
        //     const errors = []
        //     if (!this.$v.desc.$dirty) return errors
        //     // !this.$v.desc.minLength && errors.push('Name must be at most 10 characters long')
        //     !this.$v.desc.required && errors.push('description is required.')
        //     console.log(errors)
        //     return errors
        // },
        priceErrors() {
            const errors = []
            if (!this.$v.price.$dirty) return errors
            !this.$v.price.numeric && errors.push('price must be a number')
            !this.$v.price.required && errors.push('price is required.')
            return errors
        },
    },

    methods: {
        onSubmit() {
            this.$v.$touch()
      
            
            //  event.preventDefault();
            let addData = { name: this.name, description: this.description, model: this.model, price: this.price, category: this.category };
            this.$store.dispatch("addItems", addData);
            this.$refs.form.reset()
            // event.target.reset();
        },


    },
    data: () => ({
        name: "",
        model: false,
        description: "",
        price: "",
        category: null,
        items: [
            "Fire Type",
            "Water Type",
            "Earth Type",
            "Lightening Type",
        ],
        // Name: '',
        rules: [
            value => {
                if (value)
                    return true;
                return "You must enter a first name.";
            },
        ],
    }),

}
</script>