import Vue from 'vue'
import VueResource from 'vue-resource'
import interceptors from './interceptors'

Vue.use(VueResource)

const http = Vue.http

http.api = 'https://web-hiroshineto.herokuapp.com/api'

http.interceptors.push(interceptors)

//  pega a instancia do vue-resource (const http = Vue.http) e seta um header
//  pega o token e passa pra essa função
const setToken = token => {
  http.headers.common['Authorization'] = `Token token=${token}`
}
export { http, setToken }
