<template>
    <div>
        <p>Estou trabalhando no momento.</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="(tecnologia, index) in tecnologias" v-bind:key="index">{{ tecnologia }}</li>
        </ul>
        <p>Meus amigos:</p>
        <ul>
            <li v-for="amigo in amigos" v-bind:key="amigo.id">{{ amigo.name }}</li>
        </ul>

        <div>
            <button @click="showEmail">{{ texto_botao }}</button>
            <p v-show="mostrar_email">Email: {{ email }}</p>
        </div>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
    name: "info",
    data() {
        return {
            meu_link: "https://google.com",
            email: "eduardorpimentaa@gmail.com",
            mostrar_email: false,
            texto_botao: "Mostrar e-mail",
            tecnologias: ["JavaScript","Python"],
            amigos: [
                {id: 1, name: "Gustavo"},
                {id: 2, name: "Bianca"},
                {id: 3, name: "Julia"},
            ]

        }
    },
    components: {
        Picture
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.texto_botao = 'Mostrar e-mail'
            }else{
                this.texto_botao = 'Esconder e-mail'
            }
        }
    }
}
</script>