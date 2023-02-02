const channelViacep = {
    BASE_PATH: "https://viacep.com.br",
    async procurarCep(cep) {
        const url = new URL("/ws/"+cep+"/json/", this.BASE_PATH)
        return axios.get(url)
    }
}