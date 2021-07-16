<template>
  <div class="help-page">
    <Header/>
    <div class="card-list">
    <div class="card" v-for="card in cards" :key="card.id">
      <Card :card="card"/>
    </div>
    </div>
    <RegistrationModal :show="true"/>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Card from "../components/common/Card";
import RegistrationModal from "../components/common/RegistrationModal";
export default {
  components: {RegistrationModal, Card, Header},
  name:'help',
  data(){
    return{
      cards:[
        {
          id:1,
          title:"Тимофеев Валентин",
          age:"12 лет",
          description:"Всем здравсвуйте! Я ученик 28 школы в Караганде в 10 классе. Я пишу большой школьный проект для выпускного,  но у меня нет принтера, а сделать копию в специальеом месте не получается. Можете пожалуйста купить мне принтер, мне он очень нужен для успешного получения Алтын Белги",
          budget:"55 000 тг",
          src:"/1.svg"
        },
        {
          id:2,
          title: "Тулешов Арсен",
          age:"16 лет",
          description:"Меня зовут Тимофеев Валентин. Я учусь в 5 классе в селе Жамбыл. Мне очень нравиться учиться но у меня не хватает денег на компьюер, чтобы я мог полноценно заниматься. Прощу помощи, я и ми родители будут очень благодрны вам",
          budget:"48 000 тг",
          src:"/2.svg"
        },
        {
          if:3,
          title: "Антон Перепелкин",
          age:"16 лет",
          description: "Здравсвуйте! Я Антон из города Уральск. У меня есть большие финансовые трудности. Недавно я стал президентом школы и мне нужн елать много разных проектов, а мой телефон потоянно тупит и зависает, а родители не покупают новый, ведь у них нет свободных денег. Именно по этому я обратился сюда за помощью. Все контакты я оставил ниже, можем списаться. Готов предоставить все доказательства. Заранее спасибо!",
          budget:"35 000 тг",
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card-list{
  padding: 60px 200px;
}
.card{
  margin-bottom: 60px;
}
</style>
