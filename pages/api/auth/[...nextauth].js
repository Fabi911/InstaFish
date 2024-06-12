import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const client = new MongoClient(process.env.MONGODB_URI);

const clientPromise = client.connect();

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === process.env.USERNAME_HEINI &&
          credentials.password === process.env.PASSWORD_HEINI
        ) {
          return {
            name: "Heinrich",
            email: "user@test.de",
          };
        } else {
          return null;
        }
      },
    }),
    //   CredentialsProvider({
    //     name: "Credentials",
    //     credentials: {
    //       email: {
    //         label: "Email",
    //         type: "email",
    //         placeholder: "email@example.com",
    //       },
    //       password: { label: "Password", type: "password" },
    //     },
    //     async authorize(credentials, req) {
    //       const db = (await clientPromise).db();
    //       const user = await db
    //         .collection("users")
    //         .findOne({ email: credentials.email });

    //       if (user && bcrypt.compareSync(credentials.password, user.password)) {
    //         return {
    //           name: credentials.name,
    //           email: credentials.email,
    //         };
    //       } else {
    //         return null;
    //       }
    //     },
    //   }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  // secret: process.env.SECRET,
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: process.env.SECRET,
  //   encryption: true,
  // },
  // callbacks: {
  //   async session(session, user) {
  //     session.user.id = user.id;
  //     return session;
  //   },
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
