<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="city">
          <img src="./assets/city.svg" alt="">
          <a href="#">Волгоградская область</a>
        </div>
      <div class="navigation"> 
        <nav>
          <ul>
            <li>Тендеры</li>
            <li>База подрядчиков</li>
            <li class="other-services">Другие сервисы</li>
          </ul>
        </nav>
      </div>
      </header>
    </div>

    <section class="menu">
      <img src="./assets/stroy-portal_icon.svg" alt="" class="logo">
      <button class="btn catalog">
        <img src="./assets/menu.svg" alt="">
        <span>Каталог</span>
      </button>

      <InputAutocomplete :items="dataItems"/>

      <button class="btn list">
        <img src="./assets/list.svg" alt="">
        <span>Список</span>
      </button>
      <div class="avatar">
        <span>A</span>
      </div>
    </section>
  </div>
</template>

<script>
import InputAutocomplete from './components/InputAutocomplete';
export default {
  name: 'App',
  components: {
    InputAutocomplete,
  },
  data(){
    return{
      dataItems : ['Самаорезы','Анкеры', 'Болты', 'Шайбы', 'Болгарки', 'Бокорезы', 'Анкер болт', 'Болты анкерные', 'Саморезы кровельные'],
    }
  },
   methods: {
    itemSelected (item) {
      this.item = item;
    },
    setLabel (item) {
      return item.name;
    },
    inputChange (text) {
      this.items = items.filter(item => item.name.contains(text));
    },
  },
  methods: {
    getLabel (item) {
      return item.name
    },
    updateItems (text) {
      yourGetItemsMethod(text).then( (response) => {
        this.items = response
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
$text-color : #708598;
$headerBackground : #FAFBFC;
$buttonBackground : #FED83D;
$avatarColor : #9B51E0;

*{
  font-family: 'Open Sans';
}
.container{
  background: $headerBackground;
}
.header {
  margin:0 auto;
  width: 80%;
  height: 32px;
  font-size:12px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  .city {
    height: 20px;
    display:flex;
    align-items: center;
    &:hover{
      cursor:pointer;
    }
    a{
      text-decoration: none;
      color:$text-color;
      margin: 0 0 0 12px;
       &:hover {
          color:#a85225;
       }
    }
  }
  .navigation{
    nav ul {
      list-style: none;
      display:flex;
      li {
        margin: 0 24px 0 0;
        color:$text-color;
        &:hover {
          color:#a85225;
          cursor: pointer;
          &.other-services:after {
            border-color: #a85225;
          }
        }
      }
      .other-services {
        position: relative;
        &::after {
          content:'';
          width:4.5px;
          height: 4.5px;
          border:1px solid $text-color;
          position: absolute;
          top:40%;
          right:-10px;
          transform:translateY(-50%) rotate(45deg);
          border-left:none;
          border-top:none;
        }
      }
    }
  }
}
.menu{
  font-size: 14px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:80%;
  margin:0 auto;
  padding: 14px 0 14px;
  .logo{
    &:hover{
      cursor:pointer;
    }
  }
  .btn{
    outline: none;
    width: 116px;
    height: 40px;
    border-radius:4px;
    font-weight: bold;
    color: #000;
    display:flex;
    justify-content: center;
    align-items: center;
    &.catalog{
      background: $buttonBackground;
      border:none;
    }
    &.list{
      background: $headerBackground;
      border: 1px solid #ECEFF1;
    }
    img{
      margin-right: 10px;
    }
    &:hover{
      cursor:pointer;
    }
  }
  .avatar{
      background: $avatarColor;
      border-radius: 50%;
      color:#fff;
      width: 40px;
      height: 40px;
      display:flex;
      justify-content: center;
      align-items: center;
      &:hover{
        cursor:pointer
      }
    }
}
</style>
