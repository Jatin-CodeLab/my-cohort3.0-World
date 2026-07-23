import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Authlayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/subpages/Home";
import Shop from "../pages/subpages/Shop";
import About from "../pages/subpages/About";

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
					children: [
						{
							path: '',
							element: <Home />,
						},
						{
							path: "shop",
							element: <Shop />,
						},
						{
							path: "about",
							element: <About />,
						},
					],
				},
			],
		},
	]);
  return <RouterProvider router={router} />;
}
export default AppRoutes;
