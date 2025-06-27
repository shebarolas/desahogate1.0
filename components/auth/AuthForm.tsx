
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import logo from "@/assets/img/logosvg.png"; // Adjust the path as necessary

type FieldType = {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    register?: any; // Adjust type as necessary, e.g., use `UseFormRegister` from react-hook-form
    error?: string; // Adjust type as necessary, e.g., use `FieldError` from react-hook-form
}

type AuthFormProps = {
    title: string;
    description: string;
    fields: FieldType[];
    actionText: string;
    footerText: string;
    footerLinkText: string;
    footerLinkHref: string;
    submit?: () => void;
}

export default function AuthForm({
    title,
    description,
    fields,
    actionText,
    footerText,
    footerLinkText,
    footerLinkHref,
    submit
}: AuthFormProps) {
    return (

        <main className="flex flex-row items-center justify-center w-full h-screen">
            <div className="h-full w-full flex flex-2/5 justify-center items-center bg-gray-200">
                <div className="flex flex-col items-center">
                    <img src={logo.src} alt="Logo" className="w-[13rem] h-[13rem]" />
                    <form onSubmit={submit}>
                        <Card className='w-[30rem] h-min py-0'>
                            <div className="p-10 flex flex-col gap-2">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold">{title}</h2>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription>
                                        {description}
                                    </CardDescription>
                                </CardContent>
                                <div className="flex flex-col gap-4">
                                    {fields.map((field) => (
                                        <div key={field.name} className="flex flex-col gap-2">
                                            <Label htmlFor={field.name}>{field.label}</Label>
                                            <Input
                                                id={field.name}
                                                {...field.register} // Spread the register object if using react-hook-form
                                                name={field.name}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                            />
                                            {field.error && (
                                                <p className="text-red-500 text-sm">{field.error}</p>
                                            )}
                                        </div>
                                        
                                    ))}
                                    <Button className='w-full cursor-pointer bg-purple-500 hover:bg-purple-400' type="submit">{actionText}</Button>
                                </div>
                                <div className="flex justify-center items-center gap-2 mt-6">
                                    <p className="text-sm">{footerText}</p>
                                    <Link href={footerLinkHref} className="text-sm text-purple-500 hover:text-purple-400">
                                        {footerLinkText}
                                    </Link>
                                </div>
                            </div>

                        </Card>
                    </form>
                </div>

            </div>
            <div className="h-full w-full flex flex-3/5 justify-center items-center">Right</div>
        </main>
    )
}
