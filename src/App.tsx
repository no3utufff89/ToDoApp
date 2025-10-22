import './App.scss'
import {Navigate, Route, Routes} from "react-router";
import {CommonLayout} from "./react/layouts/CommonLayout.tsx";

import LoginLayout from "./react/layouts/LoginLayout.tsx";

import { ProtectedRoute } from "./react/components/ProtectedRoute.tsx";
import { PublicRoute } from "./react/components/PublicRoute.tsx";
import {useEffect, useState} from "react";
import {useAppSelector} from "./store/hooks.ts";
import TasksPage from "./react/ui/TasksPage.tsx";

function App() {
   const [isLoading, setIsLoading] = useState(true);
   const user = useAppSelector(state => state.userState.user)
   useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      },500)
   },[])
    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <span className="mt-4 text-gray-600">Загрузка...</span>
            </div>
        );
    }
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <PublicRoute user={user}>
                        <LoginLayout />
                    </PublicRoute>
                }
            />
            <Route
                path="/*"
                element={
                    <ProtectedRoute user={user}>
                        <CommonLayout />
                    </ProtectedRoute>
                }
            >
                {/* Вложенные маршруты внутри CommonLayout */}
                <Route index element={<TasksPage/>} />

            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
export default App
