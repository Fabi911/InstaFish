import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <ContentBox>
      <Link href={"/CatchOverviewPage"}>Show myCatches</Link>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 3.5rem 0 2.5rem 0;
`;
