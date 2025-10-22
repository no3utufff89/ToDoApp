import * as React from "react";
import {Navigate} from "react-router";

interface PublicRouteProps {
    children: React.ReactNode;
    user: any;
}
export const PublicRoute: React.FC<PublicRouteProps> = (
    {children,user}) => {
    if (user) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};