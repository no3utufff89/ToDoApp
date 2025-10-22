import {Navigate, useLocation} from "react-router";
import * as React from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    user: any;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = (
    {children,user}) => {
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <>{children}</>;
};