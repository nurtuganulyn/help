<template>
  <BaseModal v-if="show">
    <div class="modal__content">
      <div v-on:click="send" class="close-icon">
        <svg width="24" height="24" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <path d="M35 11L11 37M11 11L35 37" stroke="#6951FC" stroke-width="2"/>
          </g>
          <defs>
            <filter id="filter0_d" x="0.265198" y="0.321716" width="45.4696" height="47.3566" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0 0.988235 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <h2>Регистрация</h2>
      <div class="reg-form">
        <a>Имя</a>
        <input placeholder="Введите ваше имя...">
        <a>Фамилия</a>
        <input placeholder="Введите вашу фамилию...">
        <a>Дата рождения</a>
        <input placeholder="ДД.ММ.ГГГГ">
        <a>Телефон</a>
        <input placeholder="+7 ___ ___ __ __">
        <a>Email</a>
        <input placeholder="example@mail.com">
      </div>
      <div class="reg-form-send">
        <BaseButton v-on:click.native="show=false">Зарегистрироваться</BaseButton>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from "../base/BaseModal";
import BaseButton from "../base/BaseButton";
export  default {
  name:'RegistrationModal',
  components: {BaseButton, BaseModal},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  model:{
    prop:"show",
    event:"updateShow"
  },
  methods:{
    send(){
      this.$router.push({path:'/help'})
    }
  }
}
</script>

<style scoped lang="scss">
h2{
  margin-top: 0;
}
.reg-form{
  display: flex;
  flex-direction: column;
  a{
    margin-bottom: 5px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #353535;
  }
  input{
    width: 550px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
    border-radius: 10px;
    border: none;
    margin-bottom: 15px;
    ::placeholder{
      position: absolute;
      left: 10px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #353535;
      opacity: 0.5;
      margin-left: 15px;
      padding: 19px 357px 19px 15px;
    }
  }
}
.reg-form-send{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
