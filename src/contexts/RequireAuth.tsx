import { useContext } from "react"
import { AuthContext } from "~/contexts/AuthContext"
import { useRouter } from "next/navigation";

const router = useRouter();

export const RequireAuth = () => {
  const auth = useContext(AuthContext);

  if(auth.token) {
    router.push("/register");
  }
}
