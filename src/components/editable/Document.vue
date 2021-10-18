<template>
  <b-container>
    Do
     {{ documents}}
  </b-container>
</template>

<script>
export default {
  name: "Document",
  computed: {
    documents:{
      get () { return this.$store.state.documents },
      set (/*cals*/) { /*this.$store.dispatch('events/updateCals', cals)*/ }
    },
  },
  watch:{
    documents(){
      console.log("Updated",this.documents)
    }
  }
}
</script>

<style>

</style>
