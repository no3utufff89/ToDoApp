import type {LucideIcon} from "lucide-react";
import {NavLink} from "react-router";

interface MenuLinkProps {
    linkText?: string;
    linkIcon?: LucideIcon;
    linkDest: string;
    iconPosition?: 'left' | 'right';
}
function MenuLink(props:MenuLinkProps) {
    const { linkText, linkIcon: IconComponent, linkDest,iconPosition = 'right' } = props;
    const baseClasses = "flex items-center justify-center w-[48px] h-[48px] rounded-full menuLink";
    const linkClasses = `
   ${baseClasses}
   
   
  `.trim();
    const renderIcon = () => {
        if (IconComponent) {
            return <IconComponent size={22} color='#fff'/>;
        }
        return null;
    };
    const hasIcon = !!IconComponent
    const icon = renderIcon();
    return (
        <li>
            <NavLink to={linkDest} className={({ isActive }) => (!isActive ? linkClasses : `${linkClasses} active`)}>
                {hasIcon && iconPosition === 'left' && icon}
                {linkText && <span>{linkText}</span>}
                {hasIcon && iconPosition === 'right' && icon}
            </NavLink>
        </li>
    )
}
export default MenuLink;