'use client'
import { loginSchema, LoginSchemaType } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import AuthForm from '@/components/auth/AuthForm';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {AnimatePresence } from "framer-motion";
import AuthRegister from '@/components/auth/AuthRegister';
import AuthLogin from '@/components/auth/AuthLogin';

export default function LoginForm() {

    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#f9fafb] text-gray-800 font-sans">
            {/* Visual izquierda */}
            <div className="hidden md:flex md:w-3/5 bg-rose-100 items-center justify-center p-10 relative">
                <div className="absolute top-8 left-8 text-sm text-rose-600">Desahógate © 2025</div>
                <div className="max-w-md">
                    <p className="text-3xl font-light leading-snug text-rose-900">
                        "Aquí puedes dejar lo que llevas dentro, sin juicios."
                    </p>
                    <p className="mt-4 text-sm text-rose-800">
                        Este es tu espacio emocional. Comparte, respira, y sigue a tu ritmo. 💭
                    </p>
                    <div className="mt-6 flex gap-2 text-2xl">
                        <span>💗</span><span>☁️</span><span>🕊️</span><span>🌿</span><span>💭</span>
                    </div>
                    <div className="absolute bottom-8 text-sm text-rose-500">
                        Hoy la comunidad se siente nostálgica 💭
                    </div>
                </div>
            </div>

            {/* Formulario derecha */}
            <div className="w-full md:w-2/5 flex items-start md:items-center justify-center py-12 px-8 relative">
                <div className="w-full max-w-md backdrop-blur-sm bg-white/70 rounded-3xl shadow-2xl p-8">
                    <div className="mb-6 flex gap-2 text-center">
                        <Button
                            onClick={() => setMode("login")}
                            className={cn(
                                "flex-1 text-sm font-medium py-2 rounded-full transition hover:bg-rose-300 hover:text-white cursor-pointer",
                                mode === "login" 
                                    ? "bg-rose-400 text-white"
                                    : "bg-white text-rose-400 border border-rose-200"
                            )}
                        >
                            Iniciar Sesión
                        </Button>
                        <Button
                            onClick={() => setMode("register")}
                            className={cn(
                                "flex-1 text-sm font-medium py-2 rounded-full transition hover:bg-rose-50 cursor-pointer",
                                mode === "register"
                                    ? "bg-rose-400 text-white"
                                    : "bg-white text-rose-400 border border-rose-200"
                            )}
                        >
                            Registrarse
                        </Button>
                    </div>

                    <AnimatePresence mode="wait">
                        {mode === "login" ? (
                            <AuthLogin />
                        ) : (
                            <AuthRegister />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
    //   const router = useRouter();

    //     const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    //         resolver: zodResolver(loginSchema)
    //     })

    //     const handleLogin = async (data: LoginSchemaType) => {
    //         console.log("Datos de inicio de sesión:", data);
    //         const res = await signIn('credentials', {
    //             email: data.email,
    //             password: data.password,
    //             redirect: false
    //         })

    //         if (res?.ok) {
    //             router.push('/bienvenida'); // Redirige a la página de bienvenida después de iniciar sesión
    //         } else {
    //             console.error("Error al iniciar sesión:", res?.error);
    //             // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
    //         }
    //     }

    //     return (
    //         <AuthForm
    //             title="Iniciar sesión"
    //             description="Ingresa tus credenciales para acceder a tu cuenta."
    //             actionText="Iniciar sesión"
    //             footerText="¿No tienes una cuenta?"
    //             footerLinkText="Regístrate aquí"
    //             footerLinkHref="/register"
    //             fields={[
    //                 {
    //                     name: "email",
    //                     type: "email",
    //                     placeholder: "Correo electrónico",
    //                     label: "Correo electrónico",
    //                     register: register("email"),
    //                     error: errors.email?.message

    //                 },
    //                 {
    //                     name: "password",
    //                     type: "password",
    //                     placeholder: "Contraseña",
    //                     label: "Contraseña",
    //                     register: register("password"),
    //                     error: errors.password?.message
    //                 },
    //             ]}
    //             submit={handleSubmit(handleLogin)}
    //         />
    //     );
}
