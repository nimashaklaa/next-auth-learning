import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./lib/db"
import { User } from "./model/User"
import { compare } from "bcryptjs"

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

            const isMatched = await compare(password, user.password)

            if(!isMatched){
                throw new Error('Invalied email or password')
            }
            const userData ={
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                id:user._id
            }

            return userData;

        }
    })
],
pages:{
    signIn:'/login',
}

})