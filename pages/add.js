export default function Add({ onSubmit }) {
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log(data);
      await onSubmit({
        date: data.date,
        location: data.location,
        species: data.species,
        size: data.size,
        weight: data.weight,
        image: "",
        favorite: false,
        notes: [""],
      });
      event.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" required name="date" />
      <label htmlFor="location">Location</label>
      <input id="location" type="text" required name="location" />
      <label htmlFor="species">Species</label>
      <input id="species" type="text" required name="species" />
      <label htmlFor="size">Size</label>
      <input id="size" type="number" name="size" />
      <label htmlFor="weight">Weight</label>
      <input id="weight" type="number" name="weight" />
      <button type="submit">Add my catch</button>
    </form>
  );
}
