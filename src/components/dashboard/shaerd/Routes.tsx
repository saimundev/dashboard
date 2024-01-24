import Category from "@/components/icons/Category";
import DashboardIcon from "@/components/icons/DashboardIcon";
import OrderIcon from "@/components/icons/OrderIcon";
import ProductIcon from "@/components/icons/ProductIcon";
import UsersIcon from "@/components/icons/UsersIcon";

export const Routes = [
  {
    id: 1,
    item: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
  },
  {
    id: 2,
    item: "Products",
    path: "/dashboard/products",
    icon: <ProductIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    item: "Category",
    path: "/dashboard/category",
    icon: <Category className="w-5 h-5" />,
  },
  {
    id: 4,
    item: "Orders",
    path: "/dashboard/orders",
    icon: <OrderIcon className="w-5 h-5" />,
  },
  {
    id: 5,
    item: "Users",
    path: "/dashboard/users",
    icon: <UsersIcon className="w-5 h-5" />,
  },
  {
    id: 6,
    item: "Users",
    path: "/dashboard/users",
    icon: <DashboardIcon className="w-5 h-5" />,
    subRoutes: [
      {
        item: "Profile",
        path: "/dashboard/users",
        icon: <DashboardIcon className="w-6 h-6" />,
      },
      {
        item: "Account",
        path: "/dashboard/users",
        icon: <DashboardIcon className="w-6 h-6" />,
      },
      {
        item: "Advance Setting",
        path: "/dashboard/users",
        icon: <DashboardIcon className="w-6 h-6" />,
      },
    ],
  },
];
