import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    let msg;
    if ('statusText' in error || 'message' in error) {
        msg = error.statusText || error.message;
    }
    else {
        msg = `${error}`;
    }
    return (_jsxs("div", { id: "error-page", children: [_jsx("h1", { children: "Oops!" }), _jsx("p", { children: "Sorry, an unexpected error has occurred." }), _jsx("p", { children: _jsx("i", { children: msg }) })] }));
}
