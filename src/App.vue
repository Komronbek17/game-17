<template>
  <div>
    <Home @startBtn="scrollPage" />
    <PickAnimal :scrollPage="scrollPage" @choosedanimal="pickedAnimal" />
    <GameContainer :animal="choosedAnimal" :hasClick="(new Date()).getTime()" />
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import PickAnimal from '@/components/pickAnimal.vue';
import GameContainer from '@/components/gameContainer.vue';
export default {
  name: 'App',
  data() {
    return {
      choosedAnimal:{
        name:'rabbit',
        src:'http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png'
      }
    }
  },
  components: {
    Home,
    PickAnimal,
    GameContainer
  },
  methods: {
    scrollPage(){
      window.scrollBy({
        top:window.scrollY+window.innerHeight,
        left:0,
        behavior:'smooth'
      });
    },
    pickedAnimal(anima){
      this.choosedAnimal=anima;
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

*{
  box-sizing: border-box;
  font-family: 'Yusei Magic', sans-serif;
  margin:0;
}


body{
  text-align: center;
  font-family: 'Yusei Magic', sans-serif;
  overflow: hidden;
  width:100%;
  height: 100%;
  scroll-behavior: smooth;
}
</style>
