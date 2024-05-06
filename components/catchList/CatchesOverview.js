import CatchCard from "./CatchCard";

export default function CatchOverview({ data }) {
  return data.map((catchItem) => (
    <CatchCard
      key={catchItem._id}
      image={catchItem.image}
      date={catchItem.date}
      species={catchItem.species}
      location={catchItem.location}
    />
  ));
}
