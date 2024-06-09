import useSWR from "swr";
import CatchOverview from "@/components/catchList/CatchesOverview";
import Link from "next/link";
import styled from "styled-components";

export default function CatchOverviewPage() {
  const { data, isLoading, error } = useSWR("/api/catches");
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <CatchOverview data={data} />
      <LinkAdd href={"/add"}>Add</LinkAdd>
    </>
  );
}

const LinkAdd = styled(Link)`
  text-decoration: none;
  color: white;
  position: fixed;
  bottom: 3rem;
  right: 10px;
  background-color: var(--light-color);
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
`;
