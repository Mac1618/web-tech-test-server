'use client';

// constant data
import { response } from '@/constants/api-data';

export default function Home() {
	return (
		<footer className="pt-20 px-20 w-full h-full">


			<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-10">

				{/* data 1 */}
				<ul className="text-base">
					<li className="font-semibold">title</li>
					<li className="text-gray-500">list 1</li>
					<li className="text-gray-500">list 2</li>
					<li className="text-gray-500">list 3</li>
					<li className="text-orange-500">view more</li>
				</ul>

				{/* data 2 */}
				<ul className="text-base">
					<li className="font-semibold">title</li>
					<li className="text-gray-500">list 1</li>
					<li className="text-gray-500">list 2</li>
					<li className="text-gray-500">list 3</li>
					<li className="text-orange-500">view more</li>
				</ul>

				{/* data 3 */}
				<ul className="text-base">
					<li className="font-semibold">title</li>
					<li className="text-gray-500">list 1</li>
					<li className="text-gray-500">list 2</li>
					<li className="text-gray-500">list 3</li>
					<li className="text-orange-500">view more</li>
				</ul>

				{/* data 4 */}
				<ul className="text-base">
					<li className="font-semibold">title</li>
					<li className="text-gray-500">list 1</li>
					<li className="text-gray-500">list 2</li>
					<li className="text-gray-500">list 3</li>
					<li className="text-orange-500">view more</li>
				</ul>

				{/* data 5 */}
				<ul className="text-base">
					<li className="font-semibold">title</li>
					<li className="text-gray-500">list 1</li>
					<li className="text-gray-500">list 2</li>
					<li className="text-gray-500">list 3</li>
					<li className="text-orange-500">view more</li>
				</ul>
			</div>
		</footer>
	);
}
