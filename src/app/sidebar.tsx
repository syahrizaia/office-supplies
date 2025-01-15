import Link from "next/link";

export default function Sidebar() {
    return (
        <nav className="fixed left-0 bg-gray-800 text-white p-4 h-screen">
            <ul className="flex flex-col gap-4">
                <Link href={"/dashboard"}>
                    <li className="bg-emerald-400 rounded-xl px-4 py-2">Dashboard</li>
                </Link>
                <Link href={"/incoming-request"}>
                    <li className="bg-emerald-400 rounded-xl px-4 py-2">Permintaan Masuk</li>
                </Link>
                <Link href={"/dashboard/"}>
                    <li className="bg-emerald-400 rounded-xl px-4 py-2">-</li>
                </Link>
            </ul>
        </nav>
    )
}