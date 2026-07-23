import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { Auth } from "../Context/AppContext";


function Header() {
	let navigate = useNavigate();
	
	const { loggedInUsers } = useContext(Auth);
	return (
		<header className="w-full border-b border-zinc-800 bg-[#0d0d0d] text-white">
			<div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="w-11 h-11 rounded-2xl bg-lime-400 flex items-center justify-center">
						<Zap className="text-black" size={18} />
					</div>

					<h1 className="text-3xl font-bold">
						Sky<span className="text-lime-400">Mart</span>
					</h1>
				</div>

				{/* Navigation */}
				<nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
					<NavLink
						to="/main"
						className={({ isActive }) =>
							isActive ? "font-bold text-green-500" : "text-white"
						}
						end
					>
						Home
					</NavLink>

					<NavLink
						to={"/main/shop"}
						className={({ isActive }) =>
							isActive ? "font-bold text-green-500" : "text-white"
						}
					>
						Shop
					</NavLink>

					<NavLink
						to={"/main/about"}
						className={({ isActive }) =>
							isActive ? "font-bold text-green-500" : "text-white"
						}
					>
						About
					</NavLink>
				</nav>

				{/* Right Side */}
				<div className="flex items-center gap-4">
					{/* User */}
					<div className="hidden sm:flex items-center gap-3 bg-[#181818] border border-zinc-700 rounded-2xl px-4 py-2">
						<div className="w-10 h-10 rounded-xl bg-lime-400 text-black font-bold flex items-center justify-center">
							{loggedInUsers.name.charAt(0).toUpperCase()}
						</div>

						<span className="font-semibold">{loggedInUsers.name}</span>
					</div>

					{/* Cart */}
					<button className="w-12 h-12 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition">
						<ShoppingCart size={22} />
					</button>

					{/* Logout */}
					<button className="w-12 h-12 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition">
						<LogOut size={22} />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
