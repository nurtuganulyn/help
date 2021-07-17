<template>
  <div class="help-page">
    <Header :title="'Подать объявление'"/>
    <div class="title">
      <h2>Кому можно помочь</h2>
    </div>
    <div class="card-list">
      <div class="card" v-for="card in cards" :key="card.id">
        <Card :card="card"/>
      </div>
      <div class="more">
        <button>
          <a>Показать еще</a>
        </button>
      </div>
    </div>
    <AddHelpModal2 :show="true"/>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Card from "../components/common/Card";
import RegistrationModal from "../components/common/RegistrationModal";
import AddHelpModal2 from "../components/common/AddHelpModal2";
export default {
  components: {AddHelpModal2, RegistrationModal, Card, Header},
  name:'help2',
  data(){
    return{
      cards:[
        {
          id:1,
          title:"Тимофеев Валентин",
          age:"12 лет",
          description:"Всем здравсвуйте! Я ученик 28 школы в Караганде в 10 классе. Я пишу большой школьный проект для выпускного,  но у меня нет принтера, а сделать копию в специальеом месте не получается. Можете пожалуйста купить мне принтер, мне он очень нужен для успешного получения Алтын Белги",
          budget:"55 000 тг",
          src:1
        },
        {
          id:2,
          title: "Тулешов Арсен",
          age:"16 лет",
          description:"Меня зовут Тимофеев Валентин. Я учусь в 5 классе в селе Жамбыл. Мне очень нравиться учиться но у меня не хватает денег на компьюер, чтобы я мог полноценно заниматься. Прощу помощи, я и ми родители будут очень благодрны вам",
          budget:"48 000 тг",
          src:2
        },
        {
          if:3,
          title: "Антон Перепелкин",
          age:"16 лет",
          description: "Здравсвуйте! Я Антон из города Уральск. У меня есть большие финансовые трудности. Недавно я стал президентом школы и мне нужн елать много разных проектов, а мой телефон потоянно тупит и зависает, а родители не покупают новый, ведь у них нет свободных денег. Именно по этому я обратился сюда за помощью. Все контакты я оставил ниже, можем списаться. Готов предоставить все доказательства. Заранее спасибо!",
          budget:"35 000 тг",
          src: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card-list{
  padding: 0 200px;
}
.title{
  padding: 0 200px;
  h2{
    margin: 0;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #353535;

  }
}
.card{
  margin-bottom: 60px;
  margin-top: 40px;
}
.more{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
  button{
    background: #FFFFFF;
    border: 1px solid #FF9653;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(255, 150, 83, 0.5);
    border-radius: 15px;
    padding: 19px 87px;
  }
  a{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
}
</style>
