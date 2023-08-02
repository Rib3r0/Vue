<template>
    <H1>Meu nome é {{ nome }}</H1>
</template>

<script>
export default {
    name: "LifeCycle",
    data(){
        return {
            nome: "Ainda não sei"
        }
    },
    created(){
        this.nome = "Eduardo"
    },
    mounted(){
        
        this.nome = "Ribeiro"
    }
}
</script>