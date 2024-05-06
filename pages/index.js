import useSWR from "swr";
import CatchOverview from "@/components/catchList/CatchesOverview";

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/catches");
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <CatchOverview data={data} />;
}
