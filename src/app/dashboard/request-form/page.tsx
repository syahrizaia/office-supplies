export default function RequestFormPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Form Permintaan</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="description" className="pr-10">Description</label>
                        </td>
                        <td>
                            <select name="" id="" className="border border-black rounded-xl p-1">
                                <option value="">Pilih</option>
                                <option value="">3M 764 VINYL TAPE BIRU 2"X33m</option>
                                <option value="">3M 764 VINYL TAPE HIJAU 5mmmx3mm</option>
                                <option value="">3M 764 VINYL TAPE HIJAU 2"X33m</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="unit" className="pr-10">Unit</label>
                        </td>
                        <td>
                            <select name="" id="" className="border border-black rounded-xl p-1">
                                <option value="">Pilih</option>
                                <option value="">ROLL</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="stock" className="pr-10">Stock</label>
                        </td>
                        <td>
                            <input type="number" id="stock" className="border border-black rounded-xl p-1" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="bg-green-400 text-white rounded-xl px-2 py-1">Minta</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}