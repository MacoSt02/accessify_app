import { JSX } from "react";

export type ChildrenRoute = Omit<RouteObj, 'icon' | 'alternativePath'>;

export type RouteObj = {
    id: string;
    path: string;
    name: string;
    element: JSX.Element;
    icon?: JSX.Element;
    menu: boolean;
    children?: ChildrenRoute[];
    alternativePath?: string;
};