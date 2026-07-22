import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Authlayout from "../layouts/Authlayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
	let router = createBrowserRouter([
		{
			path: "/",
			element: <Authlayout />,
			children: [
				{
					path: "",
					element: <LoginPage />,
				},
				{
					path: "register",
					element: <RegisterPage />,
				},
			],
		},
		{
			path: "/main",
			element: <ProtectedRoute />,
			children: [
				{
					path: "",
					element: <MainLayout />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default AppRoutes;
