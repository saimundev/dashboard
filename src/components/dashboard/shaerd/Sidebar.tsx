"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils';
import LeftArrow from '@/components/icons/LeftArrow';
import { motion } from "framer-motion"
import SubRoute from './SubRoute';
import SettingIcon from '@/components/icons/SettingIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import NavItem from './NavItem';
import { Routes } from './Routes';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    return (
        <aside className="sticky top-0 ">
            {/* collapse icon */}
            <div onClick={() => setSidebarOpen((prev) => !prev)} className="w-8 h-8 border border-gray-200 dark:border-gray-700 rounded-full absolute bottom-2 bg-white dark:bg-gray-700 -right-4 grid place-items-center cursor-pointer z-50">
                <LeftArrow className={cn("w-5 h-5", sidebarOpen ? "rotate-0" : "rotate-180")} />
            </div>
            <motion.div initial={{ width: "250px" }} animate={{ width: sidebarOpen ? "250px" : "" }} className="border-r border-gray-300 dark:border-gray-700 h-screen relative overflow-x-hidden custom_scrollbar sm:block hidden">
                <div className="content-between grid h-full">
                    <div className="">
                        {/* logo */}
                        <div className="min-h-14 border-b border-gray-300 dark:border-gray-700 text-orange-500 font-bold text-lg flex justify-center items-center ">
                            {sidebarOpen && "MOON SHOP"}
                        </div>



                        {/* menu item render here */}
                        <div className="space-y-1 p-2 ">
                            {Routes.map((route) => {
                                // render sub routes
                                if (route.subRoutes) {
                                    return <SubRoute route={route} key={route.id} sidebarOpen={sidebarOpen} />
                                }
                                return (
                                    <div key={route.id}>
                                        <Link href={route.path} className={cn("nav__item", pathname === route.path ? "bg-gray-200 dark:bg-gray-700 font-medium" : null)}>
                                            <span>{route.icon}</span>
                                            {/* nav item  */}
                                            <NavItem item={route.item} sidebarOpen={sidebarOpen} />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* menu item footer */}
                    <div className="space-y-1 p-2">
                        <Link href="/dashboard/setting" className={cn("nav__item", pathname === "/dashboard/setting" ? "bg-gray-200 dark:bg-gray-700 font-medium" : null)}>
                            <SettingIcon className='w-5 h-5' />

                            <NavItem item="Setting" sidebarOpen={sidebarOpen} />

                        </Link>
                        <div className="nav__item">
                            <LogoutIcon className='w-6 h-5' />
                            <NavItem item="LogOut" sidebarOpen={sidebarOpen} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </aside>
    )
}

export default Sidebar