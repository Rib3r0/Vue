const { createApp, ref } = Vue

const MyNameApp = {
    data() {
        return {
            name: 'Eduardo'
        }
    }
}

createApp(MyNameApp).mount('#app')