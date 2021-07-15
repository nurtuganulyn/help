<template>
  <button
  class="base-button">
    <slot>Регистрация</slot>
  </button>
</template>

<script>
export default {
  name:'BaseButton'
}
</script>

<style scoped>
.base-button{
  background: #FF9653;
  box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
  border-radius: 15px;
  height: 50px;
  padding: 14px 58px;
}

</style>
