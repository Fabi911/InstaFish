import useSWR from "swr";

export default function Catchview() {
  const { data, mutate } = useSWR("/api/data", { fallbackData: [] });

  console.log("data: ", data);
  const { date, location, spezies, size, weight, image, favorite, notes } =
    data;
  if (!data) return null;
  return <h1>instaFish</h1>;
}
