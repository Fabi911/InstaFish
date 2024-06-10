import Link from "next/link";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [login, setLogin] = useState(false);

  const { data: session } = useSession();

  function handleLogin() {
    setLogin(true);
  }

  console.log(login);
  return (
    <>
      {!session && <button onClick={handleLogin}>Anmelden</button>}
      {session && (
        <div>
          <ContentBox>
            <Link href={"/CatchOverviewPage"}>Show myCatches</Link>
          </ContentBox>
        </div>
      )}
      {login && <Modal setLogin={setLogin} />}
    </>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
