import styled from "styled-components";

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
    <ContentBox>
      <form onSubmit={handleSubmit}>
        <BoxInput>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" required name="date" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="location">Location</label>
          <input id="location" type="text" required name="location" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="species">Species</label>
          <input id="species" type="text" required name="species" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="size">Size</label>
          <input id="size" type="number" name="size" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="weight">Weight</label>
          <input id="weight" type="number" name="weight" />
        </BoxInput>
        <button type="submit">Add my catch</button>
      </form>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 3.5rem 0 2.5rem 0;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`;
