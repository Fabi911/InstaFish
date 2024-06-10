import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Login />
      {session && (
        <ContentBox>
          <Link href={"/CatchOverviewPage"}>Show myCatches</Link>
        </ContentBox>
      )}
    </>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
