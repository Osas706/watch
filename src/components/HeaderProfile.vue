<template>
  <header>
    <ul>
      <li><a href="#">Movies</a></li>
      <li><a href="#">Series</a></li>
      <li><a href="#">Documentaries</a></li>
    </ul>

    <ul>
      <li><i class="fa fa-search"></i></li>
      <li><i class="fa fa-bell"></i></li>
      <li>
        <img src="../assets/mee.jpeg" />
        <p>Bruce</p>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderProfile",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  width: auto;
  margin: 0;
  position: relative;
  padding: 30px;
}

header ul {
  display: flex;
  list-style: none;
  gap: 24px;
  align-items: center;
}

header ul li {
  display: flex;
  gap: 10px;
  align-items: center;
}

header ul li .fa {
  font-size: 20px;
  color: #fff;
}

header ul li a {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;
}

header ul li a:hover,
header ul li .fa:hover {
  color: pink;
}

header ul li img {
  width: 32px;
  height: 32px;
  border-radius: 32px;
}

header ul li p {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}
</style>
