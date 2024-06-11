import Link from "next/link";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div>
          <ContentBox>
            <Link href={"/CatchOverviewPage"}>Show myCatches</Link>
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
`;
