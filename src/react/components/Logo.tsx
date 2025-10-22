import {Link} from "react-router";
import logoImage from '/Logo.svg';
interface LogoProps {
    variant?: 'primary' | 'secondary';
    size?: 'xxs'|'sm' | 'md' | 'lg';
}
function Logo(props:LogoProps) {
    const {variant = 'primary',size = 'sm'} = props;

    // Базовые классы
    const baseClasses = "";
    const variantClasses = {
        primary: "",
        secondary: "transition  scale-100  hover:scale-120 ",
    };

    const logoSizes = {
        xxs: 'w-[24] h-[26]',
        sm: 'w-[40px] h-[40px]',
        md: 'w-[60px] h-[60px]',
        lg: 'w-[80px] h-[80px]'
    };
    const logoClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${logoSizes[size]}
  `.trim();

    return (
        <Link to={'/'} className="max-w-max mr-auto  md:mr-0 md:mb-[30px]">
            <img src={logoImage} alt="Logo" className={logoClasses}/>
        </Link>
    )
}
export default Logo;