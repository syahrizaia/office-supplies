import Link from "next/link";
import Master from "./master";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Master</h1>
            <Master></Master>
            <div className="flex flex-row gap-2">
                <Link href={"/dashboard/request-form"} className="bg-cyan-400 text-white text-center rounded-xl p-2">Buat Permintaan</Link>
                <Link href={"/dashboard/data-addition-form"} className="bg-cyan-400 text-white text-center rounded-xl p-2">Tambah data</Link>
            </div>
        </div>
    )
}