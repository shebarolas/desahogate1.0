'use client'
import { loginSchema, LoginSchemaType } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import AuthForm from '@/components/auth/AuthForm';

export default function LoginForm() {
  const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema)
    })

    const handleLogin = async (data: LoginSchemaType) => {
        console.log("Datos de inicio de sesión:", data);
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
        <AuthForm
            title="Iniciar sesión"
            description="Ingresa tus credenciales para acceder a tu cuenta."
            actionText="Iniciar sesión"
            footerText="¿No tienes una cuenta?"
            footerLinkText="Regístrate aquí"
            footerLinkHref="/register"
            fields={[
                {
                    name: "email",
                    type: "email",
                    placeholder: "Correo electrónico",
                    label: "Correo electrónico",
                    register: register("email"),
                    error: errors.email?.message

                },
                {
                    name: "password",
                    type: "password",
                    placeholder: "Contraseña",
                    label: "Contraseña",
                    register: register("password"),
                    error: errors.password?.message
                },
            ]}
            submit={handleSubmit(handleLogin)}
        />
    );
}
