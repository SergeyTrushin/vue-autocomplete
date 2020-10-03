<template>
  <form action="#" class="form" @submit.prevent="">
    <input type="text" 
           class="search" 
           placeholder="Хочу найти..." 
           @keydown.13="chooseItem" 
           @keydown.40="moveDown" 
           @keydown.38="moveUp" 
           v-model="inputValue">
    <ul class="autocomplete-list" v-if="searchMatch.length > 0">
      <li :class="{active: selectedIndex === index}"
          v-for="(result, index) in searchMatch" 
          @click="selectItem(index), chooseItem()"
      >
        {{result}}
      </li>
    </ul>
  </form>
</template>

<script>
export default {
 props: {
   items:Array,
 },
 data(){
   return{
     inputValue: '',
     searchMatch: [],
     selectedIndex: -1
   }
 },
 computed: {
    listToSearch() {
      if(typeof this.items !== 'undefined' && this.items.length > 0) {
        return this.items;
      } else {
        return []
      }
    }
  },
  watch: {
    inputValue(val) {
      this.searchMatch = [];
      if(this.inputValue !== '') {
        this.searchMatch = this.listToSearch.filter((el) => el.toLowerCase().indexOf(val.toLowerCase()) >= 0);  
      }
      if (this.searchMatch.length === 1 && this.inputValue === this.searchMatch[0]) {
        this.searchMatch = [];
      }

    }
  },
  methods: {
    moveDown() {
      if(this.selectedIndex < this.searchMatch.length-1) {
        this.selectedIndex++;
      }
    },
    moveUp() {
      if(this.selectedIndex !== -1) {
        this.selectedIndex--;
      }
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
    chooseItem() {
      if(this.selectedIndex !== -1) { 
        this.inputValue = this.searchMatch[this.selectedIndex];
        this.selectedIndex = -1;
      }
    },
  }
}
</script>

<style lang="scss">
.form{
  height: 40px;
  flex-grow: 0.75;
  position:relative;
  .search{
    padding-left: 14px;
    height: 100%;
    width: 100%;
    border: 1px solid #ECEFF1;
    box-sizing: border-box;
    border-radius: 4px;
    outline:none;
  }
  &::after{
    content:'';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url('../assets/search.svg');
    top:calc(50% - 10px);
    right: 10px;
  }
  .autocomplete-list {
    position: absolute;
    z-index: 2;
    top: 100%;
    min-width: 150px;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #fff;
    li {
      margin: 0;
      padding: 8px 15px;
      border-bottom: 1px solid #eee;
      &:last-child{
        border-bottom: 0;
      }
      &:hover,&:active{
        background-color: #f5f5f5;
      }
      &.active{
        background: #FAFBFC;
      }
    }
  }
}

</style>