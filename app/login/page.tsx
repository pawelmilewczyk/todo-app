import Login from "components/auth/Login";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

async function LoginPage() {
  const session = await unstable_getServerSession(authOptions);
  return <Login session={session} />;
}

export default LoginPage;
