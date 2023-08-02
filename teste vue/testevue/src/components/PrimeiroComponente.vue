<template>
    <div>
        <H1>Olá Vue!</H1>
        <h2>Meu nome é {{ nome }}</h2>
    </div>
    
</template>

<script>

export default {
    name: "PrimeiroComponente",
    data(){
        return{
            nome: "Eduardo"
        }
    }
}
</script>