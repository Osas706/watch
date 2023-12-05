<template>
  <section>
    <div>
      <h5><i class="fa fa-mug-hot"></i>Watch</h5>
      <p>Enjoy the newest movies</p>
      <button><router-link class="a" @click="$emit('toggleToLogin')" :to="{name: 'home'}">Login</router-link></button>
      <p>No Account? <a href="#">Sign up</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  emits: ['toggleToLogin'],
  
 

};
</script>

<style lang="scss" scoped>
section {
  width: 100vw;
  height: 100vh;
  background: url(../assets/background.png),  rgb(48, 1, 48) 50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

section div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
}

section div h5 {
  margin: 6px 0;
  color: #fff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.32px;
  text-transform: uppercase;
  text-align: center;
}

section div h5 .fa {
  margin-right: 8px;
}

section div p {
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0;
  text-align: center;
}

section div button {
  display: flex;
  width: 225px;
  padding: 17px 24px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 14px;
  background: #6100c2;
  margin: 10px 0;
}

section div button .a {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
}

section div p .a {
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
}
</style>
