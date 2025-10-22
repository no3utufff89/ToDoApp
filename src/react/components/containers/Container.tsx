import type { ReactNode } from 'react';

type ContainerProps = {
    children?: ReactNode;
};
function Container(props: ContainerProps) {
    const { children } = props;
    return <div className="container">{children}</div>;
}

export default Container;