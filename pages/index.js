import Router, { useRouter } from "next/router";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {!session && <p>Bitte unten Anmelden</p>}
      {session && (
        <div>
          <ContentBox>
            <button onClick={() => Router.push("/CatchOverviewPage")}>
              Mein Fangbuch
            </button>
            <button onClick={() => Router.push("/add")}>
              neuen Fang eintragen
            </button>
          </ContentBox>
        </div>
      )}
    </>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 4rem;
`;
