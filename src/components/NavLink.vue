<template>
  <section class="sidebar">
    <div>
      <h5><i class="fa fa-mug-hot"></i>Watch</h5>
      <ul>
        <li>
          <router-link class="a" :to="{name: 'home'}"><i class="fa fa-film"></i>Home</router-link>
        </li>
        <li>
          <router-link class="a" :to="{name: 'Favourite'}"><i class="fa fa-heart"></i>Favourites</router-link>
        </li>
        <li>
          <router-link class="a" :to="{name: 'Trending'}"><i class="fa fa-arrow-trend-up"></i>Trending</router-link>
        </li>
        <li>
          <router-link class="a" to="#"><i class="fa fa-calendar"></i>Coming Soon</router-link>
        </li>
      </ul>
    </div>

    <ul>
      <li>
        <router-link class="a" to="#"><i class="fa fa-user-group"></i>Community</router-link>
      </li>
      <li>
        <router-link class="a" to="#"><i class="fa fa-comment"></i>Social</router-link>
      </li>
    </ul>

    <ul class="last">
      <li>
        <router-link class="a" to="#"><i class="fa fa-sliders"></i>Settings</router-link>
      </li>
      <li>
        <router-link class="a" to="#"><i class="fa fa-arrow-right-from-bracket"></i>Logout</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "NavLink",
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #21201e;
  box-shadow: 2px 0px 30px 0px rgba(97, 0, 194, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 700px;
  z-index: 100;
}

.sidebar div {
  width: auto;
}

.sidebar div h5 {
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.32px;
  text-transform: uppercase;
  padding: 40px 35px;
  display: flex;
  align-items: center;
}

.sidebar div h5 .fa {
  font-size: 28px;
  margin-right: 6px;
}

.sidebar div ul,
.sidebar ul {
  list-style: none;
  margin: 0 0 70px 0;
}

.sidebar div ul li,
.sidebar ul li {
  margin-bottom: 15px;
  padding: 0 35px;
}

.sidebar div ul li .a,
.sidebar ul li .a {
  color: rgba(255, 255, 255, 0.8);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar div ul li .a:active{
  color: red;
}

.sidebar div ul li .a:hover,
.sidebar ul li .a:hover,
.sidebar div ul li .a .fa:hover,
.sidebar ul li .a .fa:hover {
  color: pink;
}

.sidebar div ul li .a .fa,
.sidebar ul li .a .fa {
  font-size: 20px;
  margin-right: 6px;
}

.sidebar .last {
  margin-top: 80px;
}

</style>
