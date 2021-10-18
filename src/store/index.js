import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    source: {
      endpoint: "",
      datasets: "",
      query_url: ""
    },
    sources: {},
    data: {},
    documents : []
  },
  mutations: {
    updateData(state, data){
      const index = state.documents.findIndex((el) => el.id === data.id)
      index == -1 ? state.documents.push(data) : Object.assign(state.documents[data.id], data);
      console.log(state.documents)
    },
    setData(state, data){
      state.data = data
      console.log(state.data)
    }
  },
  actions: {
    endpointTest(context, url){
      let query = `SELECT ?subject ?predicate ?object
      WHERE {
        ?subject ?predicate ?object
      }
      LIMIT 25`
      axios(
        {
          method: 'post',
          url: url+'/query?query='+query,
          headers: {
            //'Content-type': 'application/json',
            'Accept': 'application/sparql-results+json'
          },
          //  query: query,
          // headers: {
          //   'Content-Type': 'application/json',
          // }
          //responseType: 'application/sparql-results+json'
        })
        .then(function (response) {
          console.log(response);
          context.commit('setData', response)
        })
        .catch(function (error) {
          console.log(error);
          context.commit('setData', error)
        });
      },
      minimalEndpointTest(context, url){
        axios(
          {
            method: 'get',
            url: url,
          })
          .then(function (response) {
            console.log(response);
            context.commit('setData', response)
          })
          .catch(function (error) {
            console.log(error);
            context.commit('setData', error)
          });
        }
      },
      modules: {
      }
    })