export function getAllUser(){
    retrun axios.get("http://localhost:4500/users")
}

export function registerUser(data:{
    name:string, email: string, password: string
}) {
    return axios.post("http://localhost:4500/users", data)
}