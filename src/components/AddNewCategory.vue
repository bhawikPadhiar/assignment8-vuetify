<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="Name" :rules="rules" label="Name"></v-text-field>
      <v-text-field v-model="description" label="Description"></v-text-field>
      <v-switch v-model="status" hide-details inset :label="`Switch: ${status.toString()}`"></v-switch>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    status: true,
    Name: '',
    description: '',
    rules: [
      value => {
        if (value) return true

        return 'You must enter a first name.'
      },
    ],
  }),
}
</script>