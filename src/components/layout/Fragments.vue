<template>
  <b-container>s
    <div v-for="fragment in fragments" :key="fragment.id">
      <div
      :ref="fragment.id"
      contentEditable="true"
      @blur="blur(fragment)"

      @keydown="keyDown">
      {{ fragment.text || fragment.formated || fragment.textContent }}
    </div>
  </div>s
</b-container>
</template>

<script>
export default {
  name: "Fragments",
  computed: {
    fragments:{
      get () { return this.$store.state.fragments },
      set (/*cals*/) { /*this.$store.dispatch('events/updateCals', cals)*/ }
    },
  },
  methods:{
    keyDown(e){
      console.log(e)
      console.log(e.key)
      if(e.key == "/"){
        console.log("test if beginnig")
      }
    },
    blur(fragment){
      console.log(fragment)
      console.log("blur", this.$refs)
      console.log(this.$refs[fragment.id][0].innerHTML)
      console.log(this.$refs[fragment.id][0].innerText)
      fragment.text = this.$refs[fragment.id][0].innerText
      fragment.formated = this.$refs[fragment.id][0].innerHTML
      // console.log(fragment)
      // let input_ref = 'input_'+fragment.id
      // console.log(input_ref)
      // console.log("blur", this.$refs)
      // var copie = Object.assign({}, this.data);
      // copie.value= this.$refs.input.innerHTML,
      //
      // console.log(copie)
      // this.$store.commit('updateData', copie)
      // this.$refs.input.innerHTML = ""
    },
  }

}
</script>

<style>

</style>
