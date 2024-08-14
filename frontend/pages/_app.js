import GlobalStyle from "../styles";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/router";
import Layout from "@/components/Layout/Layout";
import {SessionProvider} from "next-auth/react";
import axios from "axios";

export default function App({Component, pageProps}) {
    const router = useRouter();


    async function handleAddCatch(catchItem) {
        /* const response = await toast.promise(*/
        axios.post("/api/catch", {catchItem})
            .catch((error) => {
                console.log(error)
            })
        /* {
             pending: "adding is pending",
             success: "Catch added! 👌",
             error: "adding rejected 🤯",
         }*/
        /*);

        if (response.ok) {
            await response.json();
            router.push("/CatchOverviewPage");
        } else {
            console.error(`Error: ${response.status}`);
        }*/
    }

    async function handleDeleteCatch(id, mutate) {
        const response = await toast.promise(
            fetch(`/api/catches/${id}`, {
                method: "DELETE",
            }),
            {
                pending: "deleting is pending",
                success: "Catch deleted! 👌",
                error: "deleting rejected 🤯",
            }
        );

        if (response.ok) {
            router.push("/CatchOverviewPage");
            mutate();
        } else {
            console.error(response.status);
        }
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <GlobalStyle/>

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

                <Component
                    {...pageProps}
                    onSubmit={handleAddCatch}
                    handleDeleteCatch={handleDeleteCatch}
                />

            </Layout>
        </SessionProvider>
    );
}