import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

const products = [
	{
		id: 1,
		name: "iPhone 16 Pro",
		price: "₹1,29,999",
		rating: 4.9,
		category: "Mobile",
	},
	{
		id: 2,
		name: "MacBook Air M4",
		price: "₹99,999",
		rating: 4.8,
		category: "Laptop",
	},
	{
		id: 3,
		name: "Sony Headphones",
		price: "₹12,999",
		rating: 4.7,
		category: "Audio",
	},
	{
		id: 4,
		name: "Nike Air Max",
		price: "₹8,499",
		rating: 4.8,
		category: "Shoes",
	},
	{
		id: 5,
		name: "Apple Watch",
		price: "₹39,999",
		rating: 4.9,
		category: "Watch",
	},
	{
		id: 6,
		name: "Gaming Keyboard",
		price: "₹5,999",
		rating: 4.6,
		category: "Accessories",
	},
	{
		id: 7,
		name: "Canon Camera",
		price: "₹59,999",
		rating: 4.8,
		category: "Camera",
	},
	{
		id: 8,
		name: "Smart TV",
		price: "₹44,999",
		rating: 4.7,
		category: "Electronics",
	},
];

function Card() {
	return (
		<div className=" mx-auto px-4 py-10">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
				<div>
					<h1 className="text-4xl font-bold">Our Products</h1>

					<p className="text-zinc-400 mt-2">
						Explore premium quality products.
					</p>
				</div>

				<input
					type="text"
					placeholder="Search Product..."
					className="bg-[#181818] border border-zinc-700 rounded-2xl px-5 py-3 outline-none focus:border-lime-400 w-full md:w-80"
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-[#111111] border border-zinc-700 rounded-3xl overflow-hidden hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
					>
						<div className="relative">
							<div className="h-60 bg-zinc-800 flex items-center justify-center">
								<span className="text-zinc-500 text-xl">Product Image</span>
							</div>

							<button className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-red-500 transition">
								<Heart size={18} />
							</button>
						</div>

						<div className="p-6">
							<span className="text-lime-400 text-sm">{product.category}</span>

							<h2 className="text-2xl font-bold mt-2">{product.name}</h2>

							<div className="flex items-center gap-2 mt-3">
								<Star size={18} className="fill-yellow-400 text-yellow-400" />

								<span>{product.rating}</span>
							</div>

							<div className="flex items-center justify-between mt-5">
								<h3 className="text-3xl font-bold text-lime-400">
									{product.price}
								</h3>
							</div>

							<div className="flex gap-3 mt-6">
								<button className="flex-1 bg-lime-400 hover:bg-lime-300 text-black rounded-xl py-3 font-bold flex justify-center items-center gap-2">
									<ShoppingCart size={18} />
									Cart
								</button>

								
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Card;
