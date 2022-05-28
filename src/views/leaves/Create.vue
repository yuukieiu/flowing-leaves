<template>
  <v-container>
    <h1>葉っぱを流す</h1>
    <v-img
      max-height="300"
      max-width="300"
      src='../../../public/img/leaf1.png'
      >
      <v-row align-content="center" style="height: 300px">
        <v-col align="center">{{ form.message }}</v-col>
      </v-row>
    </v-img>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submitCreate">
        <v-text-field
          v-model="form.message"
          :counter="300"
          :rules="nameRules"
          label="思うこと…"
          required
          clearable
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          type="submit"
        >
          流す
        </v-btn>
      </v-form>
  </v-container>
</template>

<script>
import { API } from 'aws-amplify'
import { createLeaf } from '../../graphql/mutations'

export default {
  name: 'LeafCreate',
  data () {
    return {
      form: {
        message: ''
      },
      valid: true,
      nameRules: [
        v => !!v || 'なにか入力してね',
        v => (v && v.length <= 300) || '300文字未満にしてね'
      ]
    }
  },
  methods: {
    async submitCreate () {
      if (this.$refs.form.validate()) {
        await API.graphql({
          query: createLeaf,
          variables: { input: this.form }
        })
          .then((result) => {
            console.log(result)
            this.$router.push({ name: 'LeafCreate' })
            this.form.message = ''
            this.$refs.form.resetValidation()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>
