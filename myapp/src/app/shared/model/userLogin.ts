export interface Ilogin{
    UserLogin : {
        UserName :string,
        Password :string
    };
    UserIdentity?:string;
    FirstName?:string;
    LastName?:string
    MobileNo?:string
    EmailId?:string
    Error?:string;
}