<template>
  <div class="hello">
    <Source />
    <Document />
    <Input />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    'Source': () => import('@/components/endpoint/Source'),
    'Document': () => import('@/components/editable/Document'),
    'Input': () => import('@/components/editable/Input'),
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
