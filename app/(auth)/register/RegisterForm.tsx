'use client'
import AuthForm from '@/components/auth/AuthForm'
import { registerSchema, RegisterSchemaType } from '@/schemas/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema)
    })

    const handleRegister = async (data: RegisterSchemaType) => {
        try {
            const res = await axios.post('/api/register', data);
            console.log("Registration response:", res.data);
        } catch (error) {
            console.error("Error during registration:", error);
            // Handle error appropriately, e.g., show a notification or message
        }

    }

    return (
        <AuthForm
            title='Crear cuenta'
            description='Crea una cuenta para comenzar a usar Desahogate.'
            actionText='Registrarse'
            footerText='¿Ya tienes una cuenta?'
            footerLinkText='Inicia sesión aquí'
            footerLinkHref='/login'
            fields={[
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Nombre',
                    label: 'Nombre',
                    register: register('name'),
                    error: errors.name?.message
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Correo electrónico',
                    label: 'Correo electrónico',
                    register: register('email'),
                    error: errors.email?.message
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Contraseña',
                    label: 'Contraseña',
                    register: register('password'),
                    error: errors.password?.message
                },
                {
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: 'Confirmar contraseña',
                    label: 'Confirmar contraseña',
                    register: register('confirmPassword'),
                    error: errors.confirmPassword?.message
                }
            ]}
            submit={handleSubmit(handleRegister)}
        />
    )
}
