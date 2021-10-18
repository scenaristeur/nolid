<template>
  <b-container>
    Do
    {{ documents}}
    <div v-for="doc in documents" :key="doc.id"> --
      <div  ref="input" contentEditable="true" @blur="blur(doc)">{{doc.value}}</div>
    </div>

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
  methods: {
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
    documents(){
      console.log("Updated",this.documents)
    }
  }
}
</script>

<style>

</style>
