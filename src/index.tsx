import React from "react";
import ReactDOM from "react-dom/client";
import "./global-styles/tailwind.css";

// Filter out App for production
if (process.env.NODE_ENV !== "production") {
    import("./components/app/App")
        .then(({ App }) => {
            const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
            root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
        })
        .catch(err => {
            console.log("APP IS ONLY FOR DEV");
        });
}
else {
    import("./exports")
        .then((modules) => {
        })
        .catch(err => {
        });
}
