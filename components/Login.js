import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Angemeldet als {session.user.name} <br />
        <button onClick={() => signOut()}>Abmelden</button>
      </>
    );
  }
  return (
    <>
      Du bist nicht angemeldet. <br />
      <button onClick={() => signIn()}>Anmelden</button>
    </>
  );
}
