import { connectMongoDB } from "@/lib/mongo";
import User from "@/model/user";
import NextAuth, {AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account }) {
  //     console.log("User ", user);
  //     console.log("Account ", account);
  //     if (
  //       account?.provider === "google" ||
  //       account?.provider === "github"
  //     ) {
  //       const { name, email } = user;
  //       try {
  //         await connectMongoDB();
  //         const userExists = await User.findOne({ email });

  //         if (!userExists) {
  //           const res = await fetch("http://localhost:3000/api/user", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               name,
  //               email,
  //             }),
  //           });

  //           if (res.ok) {
  //             return user;
  //           }
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     return user;
  //   },
  // },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
