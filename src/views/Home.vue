<template>
<b-container>
  <!-- <Document />
  <hr> -->
<Fragments />
<Nouveau />
</b-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    'Fragments': () => import('@/components/layout/Fragments'),
    'Nouveau': () => import('@/views/Nouveau'),
    // 'Document': () => import('@/components1/editable/Document'),
    //'Source': () => import('@/components/endpoint/Source'),
  }
}
</script>

<style>

</style>
