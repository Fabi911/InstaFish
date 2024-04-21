import useSWR from "swr";

export default function Catchview() {
  const { data, mutate } = useSWR("/api/plants", { fallbackData: [] });
  console.log("data: ", data);
  const { date, location, spezies, size, weight, image, favorite, notes } =
    data;

  return <h1>instaFish</h1>;
}
