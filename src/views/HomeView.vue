<template>
  <section class="main-cont">
    <div class="main">
      <HeaderProfile />

      <div class="suggestion">
        <h1>Insider</h1>
        <p>2022 | Comedy horror | 1 Season</p>

        <div>
          <button><a href="play.html">Watch now</a></button>
          <button class="fav"><i class="fa fa-heart"></i></button>
        </div>
      </div>
    </div>

    <div class="movies">
      <div class="trending">
        <p>Trending</p>
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

      <div class="watchingnow">
        <p>Continue watching</p>
        <div class="watchingnow-details">
          <div v-for="watching in WatchingList" :key="watching.id" class="watching">
            <img :src="require(`@/assets/${watching.imgURL}`)"/>

            <button id="add"><i class="fa fa-heart"></i></button>

            <div class="title">
              <h6>{{watching.title}}</h6>
              <p>{{watching.info}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderProfile from '@/components/HeaderProfile.vue';
import infoJson from '@/info.json'
import contWatchingJson from '@/contWatching.json'
export default {
  name: "HomeView",
  data() {
    return {
      infos: infoJson,
      WatchingList: contWatchingJson
    }
  },
  components: {
    HeaderProfile
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: linear-gradient(0deg, #191817 -4.62%, rgba(0, 0, 0, 0.00) 45.9%), url(../assets/insider.png), lightgray 50% / cover no-repeat;
  max-width: 1150px;
  width: 100%;
  height: 455px;
  position: relative;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
}

.main .suggestion {
  position: absolute;
  background-color: transparent;
  bottom: 0;
  padding: 30px;
}

.suggestion h1 {
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  margin: 10px 0;
}

.suggestion p {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.suggestion div {
  display: flex;
  width: auto;
  height: auto;
  gap: 16px;
  margin-top: 10px;
}

.suggestion div button {
  display: inline-flex;
  align-items: flex-start;
  border: none;
  border-radius: 14px;
  background: #6100c2;
  line-height: 20px;
}

.suggestion div button a {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  padding: 17px 24px;
}

.suggestion div .fav {
  padding: 15px;
  border-radius: 14px;
  border: 1px solid #fff;
  background: linear-gradient(
    99deg,
    #fff 3.36%,
    rgba(255, 255, 255, 0) 238.16%
  );
  cursor: pointer;
}

.suggestion div .fav .fa {
  font-size: 20px;
  color: #6100c2;
}

.movies {
  width: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: #191817;
  padding: 5px 20px 50px 20px;
  margin-left: 200px;
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
  border-radius: 0px 0px 20px 20px;
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

.watchingnow {
  display: flex;
  flex-direction: column;
}

.watchingnow p {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 20px 0 8px 0;
}

.watchingnow-details {
  display: flex;
  gap: 24px;
}

.watching {
  width: 348px;
  height: 209px;
  border-radius: 20px;
  border: 1px solid #969696;
  position: relative;
}

.watching img {
  width: 346px;
  height: 207px;
  border-radius: 20px;
}

.watching .title {
  position: absolute;
  bottom: 0;
  width: 346px;
  height: 66px;
  border-radius: 0px 0px 20px 20px;
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

.watching .title h6 {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}

.watching .title p {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
}
</style>