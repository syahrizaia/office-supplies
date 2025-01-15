import Master from "../dashboard/master";

export default function Table() {
    return (
        <div className="flex">
            <Master></Master>
            <table>
                <thead>
                    <tr>
                        <th className="border border-black p-1">
                            <h1>Selesai</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black p-1">
                            <input type="checkbox" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-black p-1">
                            <input type="checkbox" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-black p-1">
                            <input type="checkbox" name="" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}