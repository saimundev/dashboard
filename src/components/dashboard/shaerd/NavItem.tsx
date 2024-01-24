"use client";

import { motion, AnimatePresence } from 'framer-motion'

const NavItem = ({ item, sidebarOpen }: any) => {

    const NavItemAnimation = {
        hidden: {
            opacity: sidebarOpen ? 1 : 0,
            width: sidebarOpen && 0,
            transition: {
                duration: .5
            }
        },
        show: {
            opacity: sidebarOpen ? 1 : 0,
            width: sidebarOpen && 0,
            display: sidebarOpen ? "block" : "none",
            transition: {
                duration: .5
            }
        }
    }
    return (
        <AnimatePresence>
            <motion.span
                className='text-sm font-medium '
                variants={NavItemAnimation}
                animate="show"
                exit="hidden"
            >
                {item}
            </motion.span>
        </AnimatePresence>
    )
}

export default NavItem