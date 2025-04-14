import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EmailProvider } from "@/components/OTP";
import { EventProvider } from "@/context/EventContext";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux"; // <-- ADD THIS
import store from "./redux/store.js"; // <-- ADD THIS
// import { OrganizersProvider } from "./Context/OrganizersContext.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";


const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        {" "}
        {/* <-- ADD THIS */}
        <AuthProvider>
          {/* <OrganizersProvider> */}
            <EmailProvider>
              <EventProvider>
                <GoogleOAuthProvider clientId={clientId}>
                  <Toaster position="top-right" reverseOrder={false} />
                  <App />
                </GoogleOAuthProvider>
              </EventProvider>
            </EmailProvider>
          {/* </OrganizersProvider> */}
        </AuthProvider>
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
