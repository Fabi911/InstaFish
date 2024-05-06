export default function Add() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  }
  return (
    <form>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" required name="date" />
      <label htmlFor="location">Location</label>
      <input id="location" type="text" required name="location" />
      <label htmlFor="species">Species</label>
      <input id="species" type="text" required name="species" />
      <button onClick={handleSubmit}>Add my catch</button>
    </form>
  );
}
