"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

export default function WelcomePage({ onNext }: { onNext: () => void }) {
   
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-rose-100 px-4 py-12">
            <div className="max-w-6xl w-full space-y-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-rose-900 leading-tight">
                            Bienvenida a <span className="text-rose-600">Desahógate</span>
                        </h1>
                        <p className="text-lg md:text-xl text-rose-700 max-w-2xl mx-auto leading-relaxed">
                            Desahógate es un espacio seguro y anónimo donde puedes expresar lo que sientes sin miedo a ser juzgada.
                            Aquí puedes compartir tus emociones, experiencias o pensamientos, y recibir apoyo de una comunidad que te entiende.
                            Porque a veces, simplemente necesitamos soltar lo que llevamos dentro.
                        </p>
                    </div>

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
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Card className="bg-white/70 backdrop-blur-sm border-rose-200 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader className="flex flex-col items-center text-center space-y-2">
                                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                                        <card.icon className="h-8 w-8 text-rose-600" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-rose-900">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-rose-700 leading-relaxed">{card.content}</CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button onClick={onNext} className="bg-rose-400 hover:bg-rose-300 cursor-pointer">Empieza a desahogarte</Button>
                </div>
            </div>
        </div>
    )
}
