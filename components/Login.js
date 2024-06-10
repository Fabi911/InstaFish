import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login({ setlogin, setlogout }) {
  const { data: session } = useSession();
  const router = useRouter();

  function handleSignIn(setlogin) {
    signIn();
    setLogin(false);
  }

  // if (session) {
  //   return (
  //     <>
  //       Angemeldet als {session.user.name} <br />
  //       <button onClick={() => handleSignOut()}>Abmelden</button>
  //     </>
  //   );
  // }
  return (
    <>
      Du bist nicht angemeldet. <br />
      <button onClick={() => handleSignIn()}>Anmelden</button>
    </>
  );
}
