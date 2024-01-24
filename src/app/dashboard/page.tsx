"use client";

import OrderIcon from '@/components/icons/OrderIcon'
import UsersIcon from '@/components/icons/UsersIcon'
import { LineChart, BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Label, LabelList } from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react';

const DashboardPage = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="">
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow">
                    <div className="flex justify-between items-center">
                        <h3 className='text-sm font-semibold text-gray-700 dark:text-gray-200 '>Total Orders</h3>
                        <OrderIcon className='w-4 h-4 text-gray-500' />
                    </div>
                    <h2 className='text-2xl font-bold mt-2'>250</h2>
                    <p className='text-xs text-gray-400 font-medium'>From last month</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h3 className='text-sm font-semibold text-gray-700 dark:text-gray-200 '>Pending Orders</h3>
                        <OrderIcon className='w-4 h-4 text-gray-500' />
                    </div>
                    <h2 className='text-2xl font-bold mt-2'>250</h2>
                    <p className='text-xs text-gray-400 font-medium'>From last month</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h3 className='text-sm font-semibold text-gray-700 dark:text-gray-200 '>Users</h3>
                        <UsersIcon className='w-4 h-4 text-gray-500' />
                    </div>
                    <h2 className='text-2xl font-bold mt-2'>250</h2>
                    <p className='text-xs text-gray-400 font-medium'>From last month</p>
                </div>


            </div>

            <div className="w-full mt-4">
                <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-4 ">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4  shadow !max-h-[400px] overflow-hidden ">
                        <h3 className='text-black font-semibold text-base'>Overview</h3>
                        <ResponsiveContainer className="!max-h-[340px] mt-4">

                            <BarChart
                                data={data}
                            >
                                <XAxis dataKey="name" className='text-xs' />
                                <YAxis className='text-xs font-semibold' tick={{ className: "fill:text-red-500" }} />

                                <Bar dataKey="pv" radius={[6, 6, 0, 0]} className='dark:fill-gray-300  fill-black ' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow !max-h-[400px]  overflow-y-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-700
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                        <h3 className='text-black font-semibold text-base'>Recent Sales</h3>
                        <p className='text-gray-500 text-sm'>You made 265 sales this month</p>

                        <div className="mt-4 space-y-4">
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="">
                                        <h4 className='font-semibold text-sm'>Olivia Martin</h4>
                                        <p className='text-gray-500 text-sm'>olivia.martin@email.com</p>
                                    </div>
                                </div>

                                <h5 className='text-base font-bold'>+$1,999.00</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage