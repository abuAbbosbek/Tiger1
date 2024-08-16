import Import from "../goods/import";
import Katalog from "../goods/katalog";
import Repricing from "../goods/repricing";
import WriteOff from "../goods/writeoff";
import ShopChildreanPage from "../hisobotlar/children/shop";
import Customers from "../mijozlar/mijozlar";
import CustomerGroup from "../mijozlar/mijozlarguruhi";
import CustomerDebts from "../mijozlar/mijozlarqarzlari";
import YangiMijoz from "../mijozlar/yangimijozbutton";
import NewSales from "../sales/newsales";

export const menu = [
    {
        id: 1,
        path: "/katalog",
        element: <Katalog />,
    },
    {
        id: 2,
        path: "/customers",
        element: <Customers />,
    },
    {
        id: 3,
        path: "/shop",
        element: <ShopChildreanPage />,
    },
    {
        id: 4,
        path: "/customerdebts",
        element: <CustomerDebts />,
    },
    {
        id: 5,
        path: "/writeoff",
        element: <WriteOff />,
    },
    {
        id: 6,
        path: "/import",
        element: <Import />,
    },
    {
        id: 7,
        path: "/customersgroup",
        element: <CustomerGroup />,
    },
    {
        id: 8,
        path: "/newsales",
        element: < NewSales />,
    },
    {
        id: 9,
        path: "/repricing",
        element: <Repricing />,
    },
    {
        id: 10,
        path: "/yangimijoz",
        element: < YangiMijoz />,
    }
];
