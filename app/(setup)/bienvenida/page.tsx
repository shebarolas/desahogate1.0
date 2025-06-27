"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { LuHandHeart } from "react-icons/lu";


const cardContent = [
    {
        title: "Publica de forma anónima",
        content: "Comparte lo que sientes sin mostrar tu nombre. Nadie sabrá quién eres, pero sí cómo te sientes.",
        icon: AiOutlineEyeInvisible
    },
    {
        title: "Recibe apoyo real",
        content: "Otras personas pueden reaccionar a tus publicaciones con empatía y dejarte comentarios con ánimo o comprensión.",
        icon: LiaHandsHelpingSolid
    },
    {
        title: "Conecta desde lo emocional",
        content: "Explora publicaciones por emociones como tristeza, ansiedad o alegría, y acompaña a quienes pasan por lo mismo que tú.",
        icon: LuHandHeart
    }
]

export default function WelcomePage() {
    const router = useRouter()

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-rose-100 px-4 py-12">
            <div className="max-w-6xl w-full space-y-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-rose-900">Bienvenido a Desahógate</h1>
                    <p className="mt-4 text-base md:text-lg text-rose-800 max-w-3xl mx-auto">
                        Desahógate es un espacio seguro y anónimo donde puedes expresar lo que sientes sin miedo a ser juzgada.
                        Aquí puedes compartir tus emociones, experiencias o pensamientos, y recibir apoyo de una comunidad que te entiende.
                        Porque a veces, simplemente necesitamos soltar lo que llevamos dentro.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                   {cardContent.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: i * 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Card className="bg-white shadow-md rounded-2xl transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-rose-800">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-rose-700">{card.content}</CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
