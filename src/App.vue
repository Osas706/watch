<template>
  <div>
    <WelcomeScreen v-if="login" @toggleToLogin="login = false"/>
    <div v-else>
      <NavLink />
      <router-view/>
    </div>
    
  </div>
 
</template>

<script>
import NavLink from './components/NavLink.vue'
import WelcomeScreen from './views/WelcomeScreen.vue'


export default{
  name: 'App',
  data(){
    return{
      login: true,
    }
  },
  components: {
    NavLink,
    WelcomeScreen,

  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.3s ease;
  width: auto;
  height: auto;
  
}
</style>
