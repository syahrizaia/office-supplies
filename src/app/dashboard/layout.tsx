import Link from "next/link";

export default function DashboardLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="grid items-center justify-center min-h-screen">
            <nav className="fixed left-0 bg-gray-800 text-white p-4 h-screen">
                <ul className="flex flex-col gap-4">
                    <Link href={"/dashboard"}>
                        <li className="bg-emerald-400 rounded-xl px-4 py-2">Dashboard</li>
                    </Link>
                    <Link href={"/dashboard/"}>
                        <li className="bg-emerald-400 rounded-xl px-4 py-2">-</li>
                    </Link>
                    <Link href={"/dashboard/"}>
                        <li className="bg-emerald-400 rounded-xl px-4 py-2">-</li>
                    </Link>
                </ul>
            </nav>
            <div className="w-auto">{children}</div>
        </div>
    )
}