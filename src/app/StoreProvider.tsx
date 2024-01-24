"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux"

type ChildrenProps = {
    children: React.ReactNode
}

const StoreProvider = ({ children }: ChildrenProps) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default StoreProvider