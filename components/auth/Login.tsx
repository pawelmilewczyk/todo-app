"use client";

import Button from "components/ui/Button";
import { signIn, signOut } from "next-auth/react";
import { routes } from "consts/routes";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { PropsWithSession } from "types/propsWithSession";

function Login({ session }: PropsWithSession) {
  const loginWithGoogle = () => {
    signIn("google", { redirect: true, callbackUrl: routes.home });
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="h-screen w-full mb-24 flex flex-col gap-4 justify-center items-center">
      {!session ? (
        <Button
          icon={faGoogle}
          color="red"
          onClick={loginWithGoogle}
          label="Sign in with google"
          className="min-w-[250px]"
        />
      ) : (
        <Button
          onClick={handleSignOut}
          label="Logout"
          className="min-w-[250px]"
        />
      )}
    </div>
  );
}

export default Login;
