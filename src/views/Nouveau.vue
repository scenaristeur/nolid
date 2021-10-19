<template>
  <b-button @click='editFragment'>Nouveau</b-button>
</template>

<script>
export default {
  name: "Nouveau",
  methods:{
    editFragment(){
      this.$editFragment()
    }
  }
}
</script>

<style>

</style>
