import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/Login";
import { LogoutButton } from "../components/Logout";

export const Account = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
};
