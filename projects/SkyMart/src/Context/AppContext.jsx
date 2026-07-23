import { Children, createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
	const [registerUsers, setRegisterUsers] = useState(
		JSON.parse(localStorage.getItem("registerUser")) || [],
	);
	const [loggedInUsers, setLoggedInUsers] = useState(
		JSON.parse(localStorage.getItem("loggedingUser")),
	);

	console.log("register", registerUsers);
	console.log("logged", loggedInUsers);

	return (
		<Auth.Provider
			value={{
				registerUsers,
				loggedInUsers,
				setLoggedInUsers,
				setRegisterUsers,
			}}
		>
			{children}
		</Auth.Provider>
	);
};
