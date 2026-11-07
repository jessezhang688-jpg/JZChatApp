import Background from "@/assets/temp.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {useState} from "react"
import { Button } from "@/components/ui/button"

const Auth = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[comfirmPassword, setComfirmPassword] = useState("")

    const handleLogin = async () => {};
    const handleSignup = async () => {};



    return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className = "h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw]xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
            <div className = "flex flex-col gap-10 items-center justify-center">
                <div className = "flex items-center justify-center flex-col">
                    <div className = "flex itmes-center justify-center">
                        <h1 className = "text-5xl font-bold md:text-6xl">Welcome</h1>
                    </div>
                    <p className = "font-medium text-center">
                        Fill in the details to use the app!
                    </p>
                </div>
                <div className = "flex items-center justify-center w-full">
                    <Tabs className="flex flex-col gap-4">
                        <TabsList>
                            <TabsTrigger value = "Login" className = " data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold border-b-blue-500 p-3 transition-all duration-300">Login</TabsTrigger>
                            <TabsTrigger value = "SignUp" className = " data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold border-b-blue-500 p-3 transition-all duration-300">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent className = "flex flex-col gap-4" value = "Login">
                            <Input placeholder = "Email" type = "email" className = "rounded-full p-6" value ={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder = "Password" type = "password" className = "rounded-full p-6" value ={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Button variant="blue" className="rounded-full p-5" onClick = {handleLogin}>Login</Button>
                        </TabsContent>
                        <TabsContent className = "flex flex-col gap-4" value = "SignUp">
                            <Input placeholder = "Email" type = "email" className = "rounded-full p-6" value ={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder = "Password" type = "password" className = "rounded-full p-6" value ={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Input placeholder = "Retype Password" type = "password" className = "rounded-full p-6" value ={comfirmPassword} onChange={(e) => setComfirmPassword(e.target.value)}/>
                            <Button variant="blue" className="rounded-full p-5" onClick = {handleSignup}>Sign Up</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className = "hidden xl:flex items-center justify-center w-full">
                <img src = "src/assets/temp.png" alt="login img" className="h-100 w-100"></img>
            </div>
        </div>
    </div>
    );
};



export default Auth;