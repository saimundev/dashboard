"use client";

import { useState } from 'react';
import BellIcon from '@/components/icons/BellIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import BarsIcon from '@/components/icons/BarsIcon';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import Link from 'next/link';
import NavItem from './NavItem';
import SubRoute from './SubRoute';
import { cn } from '@/lib/utils';
import SettingIcon from '@/components/icons/SettingIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import { Routes } from './Routes';

const Header = () => {
    const [responsiveSidebarOpen, setResponsiveSidebarOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { setTheme } = useTheme()
    const pathname = usePathname();

    return (
        <>
            <div className="flex justify-between items-center min-h-14 sm:px-6 px-2 border-b border-gray-300 dark:border-gray-700 bg-white/40 dark:bg-white/10 backdrop-blur   !z-[99999999] sm:gap-0 gap-2">
                <div onClick={() => setResponsiveSidebarOpen((prev) => !prev)} className="sm:hidden block cursor-pointer">
                    <BarsIcon className='w-6 h-6' />
                </div>
                <h3 className='capitalize font-medium sm:block hidden text-base'>{pathname?.split("/")[2] ? pathname?.split("/")[2] : "Dashboard"}</h3>

                {/* search bar */}
                <form className="">
                    <div className="sm:w-[300px]  flex gap-2 border dark:border-gray-500 border-gray-200 rounded-full px-4 py-1 items-center shadow">
                        <input placeholder='Search Anything...' type='search' className='focus:outline-none bg-transparent border-none py-1 w-full text-sm text-gray-600 dark:text-gray-300  placeholder:text-gray-400 placeholder:font-medium' />
                        <SearchIcon className='w-5 h-5 text-gray-600' />
                    </div>
                </form>

                <div className="flex sm:gap-4 gap-2 items-center">
                    {/* dark mood */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">

                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className='font-semibold' onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem className='font-semibold' onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem className='font-semibold' onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* notification */}
                    <BellIcon className='w-6 h-6' />

                    {/* profile */}
                    <div className="flex items-center">
                        <Avatar className=''>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>


                </div>


            </div>

            {/* responsive menu  */}
            <Sheet open={responsiveSidebarOpen} onOpenChange={setResponsiveSidebarOpen}>
                <SheetContent side="left" className=' content-between grid h-full'>
                    <div className="">
                        <SheetHeader>
                            <SheetTitle className='text-orange-500 font-bold text-lg'>Moon Shop</SheetTitle>
                        </SheetHeader>


                        {/* menu item render here */}
                        <div className="space-y-1 p-2 ">
                            {Routes.map((route) => {
                                //    render sub routes
                                if (route.subRoutes) {
                                    return <SubRoute route={route} key={route.id} sidebarOpen={sidebarOpen} />
                                }

                                return (
                                    <div key={route.id}>
                                        <Link onClick={() => setResponsiveSidebarOpen(false)} href={route.path} className={cn("nav__item", pathname === route.path ? "bg-gray-200 font-medium" : null)}>
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
                    <div className="space-y-1 p-2 ">
                        <Link onClick={() => setResponsiveSidebarOpen(false)} href="/dashboard/setting" className={cn("nav__item", pathname === "/dashboard/setting" ? "bg-gray-200 font-medium" : null)}>
                            <SettingIcon className='w-5 h-5' />

                            <NavItem item="Setting" sidebarOpen={sidebarOpen} />

                        </Link>
                        <div className="nav__item">
                            <LogoutIcon className='w-6 h-5' />
                            <NavItem item="LogOut" sidebarOpen={sidebarOpen} />
                        </div>
                    </div>


                </SheetContent>
            </Sheet>
        </>

    )
}

export default Header