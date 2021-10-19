<template>
  <b-container>
    <div ref="input"
    contentEditable="true"
    @change="change"
    @input="input"
    @blur="blur"> {{data.value}}
  </div>
  <b-button  @click="add">+</b-button>

  {{ data }}
</b-container>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  name: "Input",
  data(){
    return {
      //  content : "test",
      data: {
        id: null,
        type: "text",
        value: ""
      }
    }
  },
  methods:{
    add(){
      this.data.id = uuidv4();
      this.$refs.input.focus()
    },
    blur(){
      console.log("blur", this.$refs.input.innerHTML)
      var copie = Object.assign({}, this.data);
      copie.value= this.$refs.input.innerHTML,

      console.log(copie)
      this.$store.commit('updateData', copie)
      this.$refs.input.innerHTML = ""
    },
    input(){
      console.log("input", this.$refs.input.innerHTML)
    },
    change(){
      console.log("change", this.$refs.input.innerHTML)
    }
  }
}
</script>

<style>

</style>
