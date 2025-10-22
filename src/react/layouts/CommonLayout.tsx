import NavBlock from "../ui/NavBlock.tsx";
import ContentBlock from "../ui/ContentBlock.tsx";

export function CommonLayout() {
    return (
        <div className='sm:flex flex-col md:flex-row  h-dvh '>
            <NavBlock/>

            <ContentBlock/>

        </div>
    )
}