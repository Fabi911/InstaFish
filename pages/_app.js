import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  async function handleAddCatch(catchItem) {
    const response = await toast.promise(
      fetch("/api/catches", {
        method: "POST",
        body: JSON.stringify(catchItem),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "adding is pending",
        success: "Catch added! 👌",
        error: "adding rejected 🤯",
      }
    );

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} onSubmit={handleAddCatch} />
      </SWRConfig>
    </>
  );
}
