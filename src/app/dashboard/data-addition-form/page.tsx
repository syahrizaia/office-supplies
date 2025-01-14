export default function DataAdditionFormPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Form Penambahan Data</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="description" className="pr-10">Description</label>
                        </td>
                        <td>
                            <input type="text" id="description" className="border border-black rounded-xl p-1" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="unit" className="pr-10">Unit</label>
                        </td>
                        <td>
                            <input type="text" id="unit" className="border border-black rounded-xl p-1" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="stock" className="pr-10">Stock</label>
                        </td>
                        <td>
                            <input type="text" id="stock" className="border border-black rounded-xl p-1" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="bg-green-400 text-white rounded-xl px-2 py-1">Tambah</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}