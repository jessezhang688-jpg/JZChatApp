import Background from "@/assets/temp.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

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
                    <Tabs defaultValue="account" className="w-100">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </div>
                <FieldSet>
                <FieldLegend>Profile</FieldLegend>
                <FieldDescription>This appears on invoices and emails.</FieldDescription>
                <FieldGroup>
                    <Field>
                    <FieldLabel htmlFor="name">Full name</FieldLabel>
                    <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
                    <FieldDescription>This appears on invoices and emails.</FieldDescription>
                    </Field>
                    <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" autoComplete="off" aria-invalid />
                    <FieldError>Choose another username.</FieldError>
                    </Field>
                    <Field orientation="horizontal">
                    <Switch id="newsletter" />
                    <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
                    </Field>
                </FieldGroup>
                </FieldSet>
            </div>
        </div>
    </div>
    );
};



export default Auth;