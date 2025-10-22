
import type {LucideIcon} from "lucide-react";

interface ButtonProps {
    btnText?: string;
    btnDisabled?: boolean;
    btnIcon?: LucideIcon;
    btnType: 'submit' | 'reset' | 'button';
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'xxs'| 'sm' | 'md' | 'lg';
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}
function Button(props:ButtonProps) {
    const {
        btnText,
        btnDisabled = false,
        btnIcon: IconComponent,
        btnType = 'button',
        variant = 'primary',
        size = 'md',
        iconPosition = 'left',
        loading = false,
        onClick,

        ...restProps
    } = props;
    // Базовые классы
    const baseClasses = "cursor-pointer button inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Варианты стилей
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-blue-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
    };

    // Размеры
    const sizeClasses = {
        xxs: 'px-1 py-1 text-xs rounded-md gap-1.5',
        sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
        md: "px-4 py-2 text-base rounded-lg gap-2",
        lg: "px-6 py-3 text-lg rounded-lg gap-2.5"
    };

    // Размеры иконок
    const iconSizes = {
        xxs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px'
    };

    const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
  `.trim();

    // Рендер иконки
    const renderIcon = () => {
        if (loading) {
            return (
                <div className="animate-spin">
                    <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                </div>
            );
        }
        if (IconComponent) {
            return <IconComponent size={iconSizes[size]} />;
        }
        return null;
    };

    const hasIcon = !!IconComponent || loading;
    const icon = renderIcon();
    return (
        <button
            type={btnType}
            disabled={btnDisabled || loading}
            onClick={onClick}
            className={buttonClasses}
            {...restProps}
        >
            {hasIcon && iconPosition === 'left' && icon}
            {btnText && <span>{btnText}</span>}
            {hasIcon && iconPosition === 'right' && icon}
        </button>
    );
}
export default Button;