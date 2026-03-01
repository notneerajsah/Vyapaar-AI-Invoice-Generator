import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import CreateInvoice from "./pages/CreateInvoice";
import Invoices from "./pages/Invoices";

// const ClerkProtected = ({ children }) => (
//   <>
//     <SignedIn>{children}</SignedIn>
//     <SignedOut>
//       <RedirectToSignIn />
//     </SignedOut>
//   </>
// );
const ClerkProtected = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
const App = () => {
  return (
    <div className=" min-h-screen max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* it musst be a protected oute */}
        <Route
          path="/app"
          element={
            <ClerkProtected>
              <AppShell />
            </ClerkProtected>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-invoice" element={<CreateInvoice/>}/>
          <Route path="invoices" element={<Invoices/>}/>
          {/* <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
