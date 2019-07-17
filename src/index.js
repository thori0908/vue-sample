import Vue from 'vue'

import App from './components/App'
import AppDecorator from "./components/AppDecorator"

new Vue({
  el: '#app-decorator',
  components: { AppDecorator },
  template: '<app-decorator :name="name" :initialEnthusiasm="5"/>'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
})
