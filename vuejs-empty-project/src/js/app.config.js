const appConfig = {
    data() {
        return {
            cep: "01001000",
            message: "Experimente buscar um cep diferente no campo acima",
            counter: 0
        }
    },
    mounted() {
        appService.useVueApp(this)
    },
    methods: {
        async searchCep() {
            appService.procurarCep(this.cep)
        },
        incrementar() {
            this.counter++
        },
        decrementar() {
            this.counter--
        }
    }
}