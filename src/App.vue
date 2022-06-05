<template>
  <Virtual_keyboard title="Virtual keyboard" :engKeys = "engKeys" :ruKeys = "ruKeys"/>
</template>

<script>
import {engKeys, ruKeys} from './keys';
import Virtual_keyboard from './components/Virtual_keyboard.vue'


export default {
  name: 'App',
  components: {
    Virtual_keyboard
  },
  data() {
    return {engKeys: {}, ruKeys: {}}
  } ,
  created()  {
    this.engKeys = engKeys,
    this.ruKeys = ruKeys
  },
  methods: {
     
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
