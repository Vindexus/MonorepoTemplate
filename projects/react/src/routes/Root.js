import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
export default function Root() {
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: "HEADER" }), _jsx("div", { id: "detail", children: _jsx(Outlet, {}) })] }));
}
