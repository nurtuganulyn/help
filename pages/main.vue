<template>
  <div>
    <Header/>
    <div class="main">
      <div class="main__left">
        <h2>Помоги детям получить знания</h2>
        <div class="buttons">
          <button @click="sendNeed" class="want">Хочу помочь</button>
          <button @click="sendWant" class="need">Мне нужна помощь</button>
        </div>
      </div>
      <div class="main__right">
        <p>Тысячи детей по всему миру не могут позволить себе купить базовый набор школьных принадлежностей и школьную форму</p>
      </div>
    </div>
    <div class="main2">
      <div class="main__left">
        <h2>Кто мы?</h2>
        <p>
          Мы - юная команда энтузиастов, которая хочет помочь школьникам и школам с финансовыми проблемами и не только. Наш проект предлагает площадку, на которой школы и школьники  могут разместить обьявление о поиске материальной и моральной помощи от добровольцев и получить её совершшенно бесплатно
        </p>
      </div>
      <div class="main_right">
        <div class="image">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
export default {
  components: {Header},
  name:'main',
  methods:{
    sendNeed(){
      this.$router.push({path:'/help'})
    },
    sendWant(){
      this.$router.push({path:'/helpNoReg'})
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  background-image: url("../main1.jpg");
  background-size: 1700px 748px;
  background-repeat: no-repeat;
  padding: 128px 320px 320px 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p{
    width: 380px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #353535;
    margin-top: 75px;

  }
  h2{
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;

    color: #000000;
  }
  &__left{
    width: 50%;
  }
}
.main2{
  padding: 80px 200px 292px 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__left{
    h2{
      margin: 0;
      margin-top: 25px;
      font-family: Inter;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 58px;
      letter-spacing: -0.02em;
      color: #353535;
    }
    p{
      width: 70%;
    }
  }
}
.image{
  border-radius: 20px;
  width: 600px;
  height: 450px;
  background-image: url("../company.jpg");
  background-repeat: no-repeat;
  background-size: 600px 450px;
}
.want{
  background: #FF9653;
  box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
  border-radius: 15px;
  height: 50px;
  padding: 14px 58px;
  border: none;
}
.need{
  background: #6951FC;
  box-shadow: 0px 0px 10px rgba(105, 81, 252, 0.5);
  border-radius: 15px;
  height: 50px;
  padding: 14px 58px;
  border: none;
}
</style>
