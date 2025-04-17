import { JSX } from "react";

export type ChildrenRoute = Omit<RouteObj, 'icon' | 'alternativePath'>;

type PermissionName =
  | "ViewHome"
  | "ViewProfile"
  | "ViewSettings"
  | "ViewUsers"
  | "ViewRoles"
  | "ViewPermissions"
  | "ViewFiles"
  | "ViewLogs";

export type RouteObj = {
    id: string;
    path: string;
    name: string;
    element: JSX.Element;
    icon?: JSX.Element;
    menu: boolean;
    children?: ChildrenRoute[];
    alternativePath?: string;
    permission?: PermissionName;
};