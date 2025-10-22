import {useAppSelector} from "../../store/hooks.ts";
import CurrentDate from "../components/CurrentDate.tsx";

function WelcomeHeader() {
    const userName = useAppSelector(state => state.userState.user);
    return (
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Welcome back, {userName} </h1>
            <CurrentDate/>
        </div>
    )
}
export default WelcomeHeader;