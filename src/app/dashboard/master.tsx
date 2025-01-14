import Link from "next/link";

export default function Master() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Master</h1>
            <table>
                <thead>
                    <tr>
                        <th className="border border-black p-1">No</th>
                        <th className="border border-black p-1">Description</th>
                        <th className="border border-black p-1">Unit</th>
                        <th className="border border-black p-1">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black p-1">1</td>
                        <td className="border border-black p-1">3M 764 VINYL TAPE BIRU  2"X33m</td>
                        <td className="border border-black p-1">ROLL</td>
                        <td className="border border-black p-1">-</td>
                    </tr>
                    <tr>
                        <td className="border border-black p-1">2</td>
                        <td className="border border-black p-1">3M 764 VINYL TAPE HIJAU 5mmmx3mm</td>
                        <td className="border border-black p-1">ROLL</td>
                        <td className="border border-black p-1">-</td>
                    </tr>
                    <tr>
                        <td className="border border-black p-1">3</td>
                        <td className="border border-black p-1">3M 764 VINYL TAPE HIJAU 2"X33m</td>
                        <td className="border border-black p-1">ROLL</td>
                        <td className="border border-black p-1">-</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-row gap-2">
                <Link href={"/dashboard/request-form"} className="bg-cyan-400 text-white text-center rounded-xl p-2">Buat Permintaan</Link>
                <Link href={"/dashboard/data-addition-form"} className="bg-cyan-400 text-white text-center rounded-xl p-2">Tambah data</Link>
            </div>
        </div>
    )
}