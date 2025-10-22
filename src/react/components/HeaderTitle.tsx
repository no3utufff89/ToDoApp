interface HeaderTitleProps {
    text: string;
    textSize?:'sm' | 'md' | 'lg';
}

function HeaderTitle(props:HeaderTitleProps) {
    const {text, textSize = 'sm'} = props;
    const size = {
        sm: '16px',
        md: '20px',
        lg: '24px'
    };

    const textStyle = `
    text-[${size[textSize]}]
    `.trim()

    return (
        <p className={`${textStyle} font-semibold`}>{text}</p>
    )
}
export default HeaderTitle;