<template>
  <b-container>
    Do
    {{ fragments}}
    <div v-for="doc in fragments" :key="doc.id">
      <div
      ref="input"
      contentEditable="true"
      @blur="blur(doc)" v-html="doc.formated || doc.value || doc.textContent"
      @keydown="keyDown"></div>
    </div>

  </b-container>
</template>

<script>
export default {
  name: "Document",
  computed: {
    fragments:{
      get () { return this.$store.state.fragments },
      set (/*cals*/) { /*this.$store.dispatch('events/updateCals', cals)*/ }
    },
  },
  methods: {
    keyDown(e){
      console.log(e.key)
      if(e.key == "/"){
        console.log("test if beginnig")
      }
    },
    blur(doc){
      console.log(doc)
      console.log("blur", this.$refs.input.innerHTML)
      var copie = Object.assign({}, this.data);
      copie.value= this.$refs.input.innerHTML,

      console.log(copie)
      this.$store.commit('updateData', copie)
      this.$refs.input.innerHTML = ""
    },
  },
  watch:{
    fragments(){
      console.log("Updated",this.fragments)
    }
  }
}
</script>

<style>

</style>
