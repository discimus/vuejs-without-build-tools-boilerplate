const app = {
    bootstrap() {
        const { createApp } = Vue
        createApp(appConfig).mount('#app')
    }
}