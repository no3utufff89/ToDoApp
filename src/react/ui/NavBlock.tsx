import Logo from "../components/Logo.tsx";


function NavBlock() {
    return (
        <div className="flex flex-row p-[20px] items-center md:px-[21px] md:flex-col md:pt-[30px] md:items-center bg-dark">
            <Logo variant={'secondary'} size={'xxs'}/>
            {/*<NavList/>*/}


        </div>
    )
}
export default NavBlock;