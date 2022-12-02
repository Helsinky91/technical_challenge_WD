import service from "./config.services";

//get the phone list of the client
const getPhoneList = () => {
    return service.get("/phones")
}

//get the phone details by Id
const getPhoneId = (id) => {
    return service.get(`/phones/${id}`)
}

export {
    getPhoneList,
    getPhoneId
}