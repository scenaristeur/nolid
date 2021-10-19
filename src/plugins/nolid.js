import { v4 as uuidv4 } from 'uuid';
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$editFragment = async function(frag = {id: uuidv4(), type: "text", text:"test"}){
      console.log(frag)
      this.$store.commit('updateFragment', frag)
    }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
