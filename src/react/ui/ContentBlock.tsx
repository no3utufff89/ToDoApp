import WelcomeHeader from "./WelcomeHeader.tsx";
import {Outlet} from "react-router";

function ContentBlock() {
    return (
        <div className="flex flex-col gap-y-[20px] py-[32px] px-[37px] content w-full h-full">
            <WelcomeHeader/>
            <div className="w-full h-full bg-[#fff] p-2.5 rounded-[8px]">

                <Outlet/>
            </div>
        </div>
    )
}
export default ContentBlock;