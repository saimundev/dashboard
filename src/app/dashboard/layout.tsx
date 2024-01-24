import Header from "@/components/dashboard/shaerd/Header"
import Sidebar from "@/components/dashboard/shaerd/Sidebar"
import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

type ChildrenProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'this is moon shop e-commerce website',
}

const DashboardLayout = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex">
                {/* side bar */}
                <div className="">
                    <Sidebar />
                </div>
                <div className="w-full">
                    {/* header */}
                    <div className="sticky top-0">
                        <Header />
                    </div>
                    {/* body content */}
                    <div className="px-6 pt-6">
                        {children}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default DashboardLayout