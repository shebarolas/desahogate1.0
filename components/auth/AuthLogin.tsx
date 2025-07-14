import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
export default function AuthLogin() {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema)
    })

    const handleLogin = async (data: LoginSchemaType) => {
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if (res?.ok) {
            router.push('/bienvenida'); // Redirige a la página de bienvenida después de iniciar sesión
        } else {
            console.error("Error al iniciar sesión:", res?.error);
            // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
        }
    }

    return (
        <div>
            <motion.div
                key="login"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className='flex flex-col'
            >
                <h2 className="text-xl font-semibold text-rose-700 mb-2">
                    Tu espacio seguro te espera
                </h2>
                <p className="text-sm mb-4 text-rose-600">
                    Inicia sesión para continuar tu camino
                </p>
                <Input placeholder="Correo electrónico" className="mb-3" {...register('email')} />
                <Input type="password" placeholder="Contraseña" className="mb-4" {...register('password')} />
                <Button onClick={handleSubmit(handleLogin)} className="w-full bg-rose-500 hover:bg-rose-400 text-white">
                    Entrar
                </Button>
                <div className="text-center text-sm text-gray-400">o</div>
                <Button variant="outline" className="w-full">
                    <span className="mr-2">🔒</span> Iniciar con Google
                </Button>
                <p className="mt-3 text-xs text-rose-500 text-right">
                    ¿Olvidaste tu contraseña?
                </p>
            </motion.div>
        </div>
    )
}
