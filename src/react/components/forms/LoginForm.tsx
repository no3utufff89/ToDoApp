import InputWithLabel from "../inputs/InputWithLabel.tsx";
import Button from "../buttons/Button.tsx";
import type {User} from "../../../types.ts";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../store/hooks.ts";
import {login} from "../../../store/slices/userSlice.ts";
import {capitalizeFirst} from "../../scripts/helpers/capitalizeFirst.ts";

function LoginForm() {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
    } = useForm<User>();

    const onSubmit = (data: User) => {
        data.login = capitalizeFirst(data.login)
        dispatch(login(data))
    };
    return (
        <form action="" className="w-[70%] flex flex-col gap-y-[40px]" onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel
                labelText="Username"
                id="login"
                name="login"
                register={register}
                type="text"
            />
            <Button btnType='submit' btnText='Login' variant='secondary'/>
        </form>
    )
}
export default LoginForm;