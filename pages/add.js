import styled from "styled-components";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";

export default function Add({ onSubmit }) {
  const [imageUrl, setImageUrl] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      await onSubmit({
        date: data.date,
        location: data.location,
        species: data.species,
        size: data.size,
        weight: data.weight,
        image: imageUrl,
        favorite: false,
        notes: [""],
        methode: data.methode,
        bait: data.bait,
      });
      event.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <ContentBox>
      <Form onSubmit={handleSubmit}>
        <BoxInput>
          <label htmlFor="date">Fangdatum</label>
          <input id="date" type="date" required name="date" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="location">Fangort</label>
          <input id="location" type="text" required name="location" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="species">Fischart</label>
          <input id="species" type="text" required name="species" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="size">Größe in cm</label>
          <input id="size" type="number" name="size" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="weight">Gewicht in kg</label>
          <input id="weight" type="number" name="weight" step=".001" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="methode">Angelart </label>
          <input id="methode" type="text" name="methode" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="bait">Köder/Monatge </label>
          <input id="bait" type="text" name="bait" />
        </BoxInput>
        <BoxInput>
          <label htmlFor="image">Fangfoto hochladen</label>
          <CldUploadWidget
            uploadPreset="fish-img"
            options={{
              maxFileSize: 25485760,
            }}
            onUpload={(result) => {
              setImageUrl(result.info.secure_url);
            }}
          >
            {({ open }) => {
              return (
                <button
                  style={{
                    width: "30vw",
                    borderRadius: "8px",
                    boxShadow: "var(--box-shadow-default)",
                    margin: "8px auto 5px auto",
                    height: "3rem",
                  }}
                  type="button"
                  onClick={() => open()}
                >
                  <br />
                  <Image
                    src={"/img/uploadImg.png"}
                    alt="upload"
                    width={40}
                    height={40}
                    style={{
                      paddingBottom: "5px",
                    }}
                  />
                </button>
              );
            }}
          </CldUploadWidget>
          <p style={{ fontSize: "12px", textAlign: "center", margin: "0" }}>
            max. 10 MB
          </p>
        </BoxInput>
        <button type="submit">Fang eintragen</button>
      </Form>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 80vw;
`;
