import useSWR from "swr";

export default function Home() {
  const { data, isLoading, error } = useSWR("/api/catches");
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { date, location, species, image } = data;

  console.log(data);

  return <>Hello</>;
}
