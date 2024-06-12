import useSWR from "swr";
import CatchOverview from "@/components/catchList/CatchesOverview";
import Link from "next/link";
import styled from "styled-components";

export default function CatchOverviewPage({ handleDeleteCatch }) {
  const { data, isLoading, error, mutate } = useSWR(
    "/api/catches",
    {
      fallbackData: [],
    },
    { refreshInterval: 400 }
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <CatchOverview
        data={data}
        handleDeleteCatch={handleDeleteCatch}
        mutate={mutate}
      />
      <LinkAdd href={"/add"}>Add</LinkAdd>
    </>
  );
}

const LinkAdd = styled(Link)`
  text-decoration: none;
  color: white;
  position: fixed;
  bottom: 3.3rem;
  right: 6px;
  background-color: var(--light-color);
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
`;
