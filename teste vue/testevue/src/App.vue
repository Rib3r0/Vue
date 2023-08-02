<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
  export default {
    name: "App",
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    }
  }
</script>

<style>
  body{
    background-color: #333;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  img{
    height: 100px;
  }

  a{
    color: #f00;
  }
</style>
