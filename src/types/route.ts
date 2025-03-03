export type ChildrenRoute = Omit<RouteObj, 'icon' | 'alternativePath'>;

export type RouteObj = {
    id: string;
    path: string;
    name: string;
    element: JSX.Element;
    icon: JSX.Element;
    menu: string;
    children?: ChildrenRoute[];
    alternativePath?: string;
};