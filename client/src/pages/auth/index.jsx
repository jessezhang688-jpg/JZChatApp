import Background from "@/assets/temp.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Auth = () => {
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
                    <Tabs>
                        <TabsList>
                            <TabsTrigger value = "Login" className = " data-[state=active]: border-b-blue-500 p-3 transition-all duration-300">Login</TabsTrigger>
                            <TabsTrigger value = "SignUp" className = " data-[state=active]: border-b-blue-500 p-3 transition-all duration-300">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent className = "" value = "Login"></TabsContent>
                        <TabsContent className = "" value = "SignUp"></TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
    );
};



export default Auth;