"use server";
import connectDB from "@/lib/db"
import {User} from "@/model/User";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs"
import { CredentialsSignin } from "next-auth";
import {signIn} from "@/auth"

const login =async(formData:FormData) =>{
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log("email and password",email,password)
    try{
        const result = await signIn('credentials',{
            redirect: false,
            callbackUrl:'/',
            email,
            password,
        })
        if(result.error){
            throw new Error(result.error);
        }

    }catch(error){
        console.log("Login Error:",error)
        const Error = error as CredentialsSignin
        return Error.cause  
    }
    redirect('/')
}

const register = async (formData:FormData)=>{
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!firstName || !lastName || !email || !password) {
        throw new Error("Please fill all fields");
    }

    await connectDB()

    const existingUser = await User.findOne({email})

    if(existingUser) throw new Error("User already exists");

    const hashedPassword = await hash(password, 12)

    await User.create({firstName,lastName,email,password:hashedPassword})

    console.log('User created successfully 🥂')

    redirect('/login')

};

const fetchAllUsers = async()=>{
    await connectDB();
    const users = await User.find({});
    return users;
}
export {register, login ,fetchAllUsers};
