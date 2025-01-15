import Sidebar from "../sidebar";

export default function IncomingRequestLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="grid items-center justify-center min-h-screen">
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}