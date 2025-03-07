import Image from "next/image";

export default function AboutPage() {
	const localImagePath = "/images/snape.jpg";
	const externalImageUrl =
		"https://edwardtanguay.vercel.app/share/images/employees/employee_1.jpg";
	return (
		<div>
			<p>This page shows various features of Next.js.</p>

			<h2 className="text-2xl mt-3 mb-2">next/image</h2>

			<h3 className="mb-2">local image (in /public/images)</h3>
			<Image
				src={localImagePath}
				alt="employee 001"
				width={200}
				height={200}
				className="w-64 h-64 rounded-2xl shadow-2xl border-4 border-blue-500 
         hover:scale-110 hover:rotate-6 transition-transform duration-500 ease-in-out
         brightness-110 contrast-125"
			/>

			<h3 className="mb-2">external image</h3>
			<Image
				src={externalImageUrl}
				alt="employee 001"
				width={200}
				height={200}
				className="rounded rotate-[4deg]"
			/>
		</div>
	);
}
