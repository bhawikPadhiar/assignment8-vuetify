<template>
    <v-main>
      <TrialVue></TrialVue>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit="onSubmit">
            <v-text-field v-model="name" :rules="[v => !!v || 'Item is required']" ></v-text-field>
            <v-text-field  v-model="name" :rules="[v => !!v || 'Item is required']" label="name"></v-text-field>
            <v-text-field  v-model="price" :rules="[v => !!v || 'Item is required']" label="price"></v-text-field>
            <v-text-field v-model="description" :rules="[v => !!v || 'Item is required']" label="Description"></v-text-field>
            <v-select v-model="category"  :items="items" :rules="[v => !!v || 'Item is required']" label="category"
                required></v-select>
            <v-switch v-model="model" hide-details inset ></v-switch>
            <v-btn type="submit"  block class="mt-2">Submit</v-btn>
        </v-form>
    </v-sheet>
</v-main>
</template>

<script>
//import VueCurrencyFilter from 'vue-currency-filter'
// import { reactive, ref } from 'vue'
//   import { useVuelidate } from '@vuelidate/core'

import TrialVue from './TrialVue.vue'

//   import { email, required } from '@vuelidate/validators'
export default {
    // setup () {
    //   const initialState = {
    //     name: '',
    //     email: '',
    //     select: null,
    //     checkbox: null,
    //   }
    //   const state = reactive({
    //     ...initialState,
    //   })
    //   const item = ref([
    //     'Item 1',
    //     'Item 2',
    //     'Item 3',
    //     'Item 4',
    //   ])
    //   const rules = {
    //     name: { required },
    //     email: { required, email },
    //     select: { required },
    //     item: { required },
    //     checkbox: { required },
    //   }
    //   const v$ = useVuelidate(rules, state)
    //   function clear () {
    //     v$.value.$reset()
    //     for (const [key, value] of Object.entries(initialState)) {
    //       state[key] = value
    //     }
    //   }
    //   return { state, item, clear, v$ }
    // },
    methods: {
        onSubmit() {
            //  event.preventDefault();
            let addData = { name: this.name, description: this.description, model: this.model, price: this.price, category: this.category };
            this.$store.dispatch("addItems", addData);
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
    components: { TrialVue }
}
</script>