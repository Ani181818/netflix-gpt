export const checkValidate = (name,email,password)=>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const nameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!emailValidate)return "Email is Not Valid"
    if(!passwordValidate)return "PassWord is Not Valid"
    if(!nameValidate && name != null)return "Name is Not Valid"

    return null;
}