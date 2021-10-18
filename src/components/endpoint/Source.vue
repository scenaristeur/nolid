<template>
  <b-container>
    <b-input-group size="sm" prepend="Endpoint">
      <b-form-input v-model="endpoint"></b-form-input>
    </b-input-group>
    <b-input-group size="sm" prepend="Dataset">
      <b-form-input v-model="dataset"></b-form-input>
    </b-input-group>
      <b-button variant="outline-primary" @click="load">Load</b-button>


  </b-container>
</template>

<script>
export default {
  name: "Source",
  data(){
    return {
      endpoint: "http://localhost:3030",
      dataset: "pizza"
    }
  },
  methods:{
    load(){
      let url = this.endpoint+'/'+this.dataset
      console.log(url)
      this.$store.dispatch('endpointTest', url)
    }
  }
}
</script>

<style>

</style>
