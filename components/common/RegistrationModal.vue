<template>
  <BaseModal v-if="show">
    <div class="modal__content">
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
        <BaseButton v-on:click.native="send">Зарегистрироваться</BaseButton>
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
      this.$router.push({name:'/'})
    }
  }
}
</script>

<style scoped lang="scss">
.reg-form{
  display: flex;
  flex-direction: column;
  a{
    margin-bottom: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #353535;
  }
  input{
    width: 550px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
    border-radius: 10px;
    border: none;
    margin-bottom: 30px;
    ::placeholder{
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
