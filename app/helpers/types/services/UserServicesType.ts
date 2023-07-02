export type registerUserdataType = {
    username:string,
    first_name:string,
    last_name:string,
    phone:string,
    email:string,
    password:string,
    role : "admin"|"user"
}

export type loginUserDataType = {
    password:string,
    username:string,

}