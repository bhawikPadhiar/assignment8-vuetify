<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field v-model="Name" :rules="rules" label="Name"></v-text-field>
            <v-text-field v-model="money" label="money"></v-text-field>
            <v-text-field v-model="description" label="Description"></v-text-field>
            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
                required></v-select>
            <v-switch v-model="status" hide-details inset :label="`Switch: ${status.toString()}`"></v-switch>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>

    </v-sheet>

</template>

<script>
export default {
    data: () => ({
        status: true,
        description: '',
        money:"",
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        Name: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a first name.'
            },
        ],
    }),
}
</script>