
import Logo from "../components/Logo.tsx";
import LoginForm from "../components/forms/LoginForm.tsx";

function LoginFormBlock() {

    return <div className="flex flex-col rounded-[8px] bg-white pt-[32px] pb-[72px] px-[32px] items-center gap-y-[15px] w-1/3">
        <Logo variant={'primary'} size={'md'}/>
        <p className="font-medium text-[24px]">React ToDo <span className="text-[#ffa500]">App</span></p>
        <LoginForm/>
    </div>;
}

export default LoginFormBlock;