import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { motion } from "framer-motion"
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchemaType } from '@/schemas/register'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

export default function AuthRegister() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema)
    })

    const handleRegister = async (data: RegisterSchemaType) => {
        try {
            const {status} = await axios.post('/api/register', data);
            if(status === 201){
                reset();
            }
        } catch (error) {
            console.error("Error during registration:", error);
            // Handle error appropriately, e.g., show a notification or message
        }

    }
    return (
        <div>
            <motion.div
                key="register"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className='flex flex-col'
            >
                <h2 className="text-xl font-semibold text-rose-700 mb-2">
                    Crea tu espacio personal
                </h2>
                <p className="text-sm mb-4 text-rose-600">
                    Publicarás de forma anónima, pero no estarás solo.
                </p>
                <Input placeholder="Nickname" className="mb-3"
                    {...register('name')}
                />
                <Input placeholder="Correo electrónico" className="mb-3"
                    {...register('email')}
                />
                <Input type="password" placeholder="Contraseña" className="mb-4"
                    {...register('password')}
                />
                 <Input type="password" placeholder="Confirmar contraseña" className="mb-4"
                    {...register('confirmPassword')}
                />
                <Button className="w-full bg-rose-500 hover:bg-rose-400 text-white"
                    onClick={handleSubmit(handleRegister)}
                >
                    Unirse
                </Button>
                <p className="mt-3 text-xs text-rose-500 text-left">
                    Tus datos están protegidos. Solo tú sabrás quién eres aquí.
                </p>
            </motion.div>
        </div>
    )
}
