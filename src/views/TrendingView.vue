<template>
  <section class="main-cont">
    <div class="main">
      <HeaderProfile />

      <div class="movies">
        <div class="trending">
          <p>Trending at this moment</p>
          <div class="trending-details">
            <div v-for="info in infos" :key="info.id" class="trend">
            <img :src="require(`@/assets/${info.imgURL}`)" />

            <button><i class="fa fa-heart"></i></button>

            <div class="title">
              <h6>{{info.title}}</h6>
              <p>{{info.info}}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderProfile from "@/components/HeaderProfile.vue";
import infoJson from '@/info.json'

export default {
  name: "TrendingView",
  data() {
    return {
      infos: infoJson,
    }
  },
  components: {
    HeaderProfile,
  },
};
</script>

<style lang="scss" scoped>
.main-cont {
  display: flex;
  flex-direction: column;
}

.main {
  background: #191817;
  width: 1166px;
  height: 100vh;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
}

.movies {
  width: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: #191817;
  margin: 0 20px 50px 30px;
}

.trending {
  display: flex;
  flex-direction: column;
}

.trending p {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.trending-details {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.trend {
  width: 255px;
  height: 301px;
  border-radius: 20px;
  border: 1px solid #969696;
  position: relative;
}

.trend img {
  width: 253px;
  height: 299px;
}

.trend button,
.watching button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8.889px;
  border-radius: 8.296px;
  border: 0.593px solid #fff;
  background: linear-gradient(
    99deg,
    #fff 3.36%,
    rgba(255, 255, 255, 0) 238.16%
  );
  cursor: pointer;
}

.trend button .fa,
.watching button .fa {
  font-size: 16px;
  color: #9276bb;
}

.trend .title {
  background-color: red;
  width: 255px;
  height: 86px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(
    100deg,
    #fff 12.94%,
    rgba(255, 255, 255, 0) 159.1%
  );
}

.trend .title h6 {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}

.trend .title p {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
</style>
