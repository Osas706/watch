<template>
  <div>
    <section class="main-cont">
      <div class="main">
        <HeaderProfile />

        <div class="fav-cont">
          <p>Favourites</p>

          <div class="fav-details">
            <div  v-for="fav in favs" :key="fav.id"  class="fav">
              <img :src="require(`@/assets/${fav.imgURL}`)" />

              <button id="add"><i class="fa fa-heart"></i></button>

              <div class="title">
                <h6>{{fav.title}}</h6>
                <p>{{fav.info}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderProfile from "@/components/HeaderProfile.vue";
import favJson from '@/fav.json'

export default {
  name: "FavouriteView",
  data() {
    return {
      favs: favJson, 
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

.fav-cont {
  height: auto;
  width: auto;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
}

.fav-cont p {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 8px 0;
}

.fav-details {
  display: flex;
  gap: 24px;
}

.fav {
  width: 348px;
  height: 209px;
  border-radius: 20px;
  border: 1px solid #969696;
  position: relative;
}

.fav img {
  width: 346px;
  height: 207px;
  border-radius: 20px;
  object-fit: cover;
}

.fav .title {
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

.fav .title h6 {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}

.fav .title p {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
}

.fav button {
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

.fav button .fa {
  font-size: 16px;
  color: #4e12a8;
}
</style>
