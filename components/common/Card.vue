<template>
  <div
      class="card"
  >
    <div class="card__left">
      <img class="card__image"  alt="img">
    </div>
    <div class="card__right">
      <a class="card-title">{{card.title}}</a>
      <a class="card-age">{{card.age}}</a>
      <a class="card-description">{{card.description}}</a>
      <div class="card-footer">
        <a class="card-budget">{{card.budget}}</a>
        <BaseButton>Хочу помощь</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton";
export default {
  name:'Card',
  components: {BaseButton},
  props:["card"]
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
    width: 70%;
  }
}
.card-title{
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #353535;
}
.card-age{
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #353535;
  opacity: 0.5;
}
.card-description{
  width: 40%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #353535;
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
</style>
