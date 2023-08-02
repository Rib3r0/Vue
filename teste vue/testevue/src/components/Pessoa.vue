<template>
    <div>
        <h2>Está é a descrição da pessoa: {{ nome }}</h2>
        <Info />
    </div>
   
</template>
<script>
import Info from './Info.vue'
export default {
    name: "Pessoa",
    data(){
        return{
            nome: "Eduardo"
        }
    },
    components: { Info }
}
</script>