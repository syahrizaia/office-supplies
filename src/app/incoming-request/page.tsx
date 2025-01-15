import Table from "./table";

export default function IncomingRequestPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Permintaan Masuk</h1>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <p>Peminta: Syahriza (Departemen 2)</p>
                    <p>Tanggal: Selasa, 14 Januari 2025</p>
                    <Table></Table>
                </div>
                <div className="flex flex-col">
                    <p>Peminta: Ade Gunawan (Departemen 3)</p>
                    <p>Rabu, 15 Januari 2025</p>
                    <Table></Table>
                </div>
            </div>
        </div>
    )
}