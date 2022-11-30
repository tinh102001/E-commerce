import HeaderAuth from "../components/headers/auth/headerAuth";
import MainLogin from "../components/mains/auth/mainLogin";

function LoginPage() {
    return <>
        <HeaderAuth type={"Đăng nhập"}></HeaderAuth>
        <MainLogin></MainLogin>
    </>
}

export default LoginPage;