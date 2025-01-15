import Link from "next/link";

export default function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-cyan-400 flex flex-col gap-2 items-center text-center rounded-xl px-16 py-8">
          <h1 className="text-xl font-bold">PT. Shindengen Indonesia</h1>
          <h1 className="text-xl font-bold">Office Supplies</h1>
          <h1 className="text-lg">Masuk sebagai?</h1>
          <ul className="flex flex-col gap-4">
            <Link href={"/dashboard"}>
              <li className="bg-cyan-600 rounded-xl p-2">Admin</li>
            </Link>
            <Link href={"/dashboard"}>
              <li className="bg-cyan-600 rounded-xl p-2">Departemen 1</li>
            </Link>
            <Link href={"/dashboard"}>
              <li className="bg-cyan-600 rounded-xl p-2">Departemen 2</li>
            </Link>
            <Link href={"/dashboard"}>
              <li className="bg-cyan-600 rounded-xl p-2">Departemen 3</li>
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
}
