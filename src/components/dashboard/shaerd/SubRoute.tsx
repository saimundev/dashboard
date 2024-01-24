import RightArrowIcon from '@/components/icons/RightArrowIcon';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem';

const SubRoute = ({ route, sidebarOpen }: any) => {
    const [showSubRoute, setShowSubRoute] = useState(false);

    const subMenuAnimation = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: .3
            }
        },
        show: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: .3
            }
        }
    }

    return (
        <div className=''>
            <Link onClick={() => setShowSubRoute((prev) => !prev)} href={route.path} className={cn("nav__item justify-between")}>
                <div className="flex gap-2 items-center">
                    <span>{route.icon}</span>
                    <NavItem item={route.item} sidebarOpen={sidebarOpen} />
                </div>
                {sidebarOpen && <RightArrowIcon className={cn("w-6 h-6", showSubRoute ? "rotate-90 duration-300 " : "rotate-0 duration-300")} />}
            </Link>


            {/* sub item render here */}
            <AnimatePresence >
                {showSubRoute &&
                    route.subRoutes.map((subRoute: any) => (
                        <motion.div className="" key={subRoute.item}
                            variants={subMenuAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden">
                            <Link href={subRoute.path} className={cn("nav__item ml-4")}>
                                <span>{subRoute.icon}</span>
                                <NavItem item={route.item} sidebarOpen={sidebarOpen} />
                            </Link>
                        </motion.div>
                    ))
                }

            </AnimatePresence>
        </div >

    )
}

export default SubRoute