import HeaderAuth from "../components/headers/auth/headerAuth";
import MainRegister from "../components/mains/auth/mainRegister";
function RegisterPage() {

    return <>
        <HeaderAuth type={"Đăng kí"} ></HeaderAuth>
        <MainRegister></MainRegister>
    </>
}

export default RegisterPage;