const appService = {
    useVueApp(app) {
        this.app = app
    },
    async procurarCep(cep) {
        const { data } = await channelViacep.procurarCep(cep)
        this.app.message = JSON.stringify(data)
    }
}