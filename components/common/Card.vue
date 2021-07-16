<template>
  <div
      class="card"
  >
    <div class="card__left">
      <img class="card__image" :src="require(`../../${card.src}.svg`)"   alt="img">
    </div>
    <div class="card__right">
      <div class="top">
        <div class="top1">
          <a class="card-title">{{card.title}}</a>
          <a class="card-age">{{card.age}}</a>
          <a class="card-description">{{card.description}}</a>
        </div>
        <div v-if="help" class="help">
          <h2>Контакты</h2>
          <a class="card-phone">{{card.phone}}</a>
          <a class="card-email">{{card.email}}</a>
          <a class="card-link" onclick="sendBase()">Вы можете помочь, связавшись с автором объявления напрямую</a>
        </div>
      </div>
      <div class="card-footer">
        <a class="card-budget">{{card.budget}}</a>
        <BaseButton v-on:click.native="help = true">Хочу помощь</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton";
export default {
  name:'Card',
  components: {BaseButton},
  data(){
    return{
      help:false
    }
  },
  props:["card"],
  methods:{
    sendBase(){
      this.$router.push({path:'/main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__left{
    width: 30%;
  }
  &__right{
    display: flex;
    flex-direction: column;
    width: 90%;
  }
}
.card-title{
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #353535;
  margin-bottom: 10px;
}
.card-age{
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #353535;
  opacity: 0.5;
  margin-bottom: 20px;
}
.card-description{
  width: 60%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #353535;
  margin-bottom: 64px;
}
.card-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-budget{
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #353535;
}
.card-phone{
  margin-top: 10px;
}
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.top1{
  display: flex;
  flex-direction: column;
  width: 150%;
}
.help{
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(105, 81, 252, 0.5);
  border-radius: 15px;
  width: 35%;
  max-height: 200px;
  margin-bottom: 20px;
  padding: 23px 20px 26px 20px;
  h2{
    margin: 0;
  }
}
.card-email{
  margin-top: 10px;
}
.card-link{
  margin-top: 54px;
  color: #6951FC;
}
</style>
