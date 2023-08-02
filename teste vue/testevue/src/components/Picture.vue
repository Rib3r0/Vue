<template>
    <img :src="src" :alt="descricao">
</template>

<script>
export default {
    name: "Picture",
    data(){
        return {
            src: "/img/5.png",
            descricao: "Icon"
        }
    }
}
</script>