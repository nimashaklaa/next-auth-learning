import NextAuth, { CredentialsSignin } from "next-auth"
import credentials from "next-auth/providers/credentials"

import Credentials from "next-auth/providers/credentials"
import connectDB from "./lib/db"
import { User } from "./model/User"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
        name: 'Credentials',
        credentials:{
            email: {label:"Email",type:"email"},
            password:{label:"Password",type:"password"}
        },

        authorize: async(credentials)=>{
            const email = credentials.email as string | undefined
            const password =  credentials.password as string | undefined

            if(!email ||!password ){

                throw new CredentialsSignin('Please provide both email & password')

            }

            await connectDB()

            const user = await User.findOne({email}).select("password + role");

            if(!user){
                throw new Error('Invalied email or password')
            }
            if(!user.password){
                throw new Error('Invalied email or password') 
            }
        }
    })
],
})