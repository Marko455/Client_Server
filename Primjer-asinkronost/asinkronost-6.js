let Service = axios.create({
    baseURL: process.env.VUE_APP_BPMN_SERVER,
    timeout: 10000,
});

let warningMessage = {
    data: null,
    message: "Oops, Something Went Wrong. Please try again.",
    color: "yellow darken-1",
    show: true,
}

let successNoMessage = {
    data: null,
    message: null,
    color: null,
    show: false
}

let ProcessDefinition = {
    async getProcessDefinitions() {
        try {
            let result = await Service.get('/process-definition');
            if(result?.data.length == 0) {
                warningMessage.data = []
                return warningMessage;
            }
            successNoMessage.data = JSON.parse(result.data);
            return successNoMessage
        }
        catch(e) { return errorMessage; }
    }
}