'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react"
import { useState } from "react";
interface SelectionPageProps {
    selections: {
        journal: boolean;
        posts: boolean;
    };
    toggleSelection: (key: "journal" | "posts") => void;
    handleStart: () => void;
    selectBoth?: () => void; // Optional function to select both options
}

export default function SelectionPage({ selections, toggleSelection, handleStart, selectBoth }: SelectionPageProps) {

    return (
        <div className="min-h-screen bg-rose-100  flex flex-col items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
            {/* Header con mensaje de bienvenida */}
            <div className="text-center mb-12 max-w-md">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center animate-soft-pulse shadow-lg shadow-rose-100/50">
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-200" />
                    </div>
                </div>
                <p className="text-2xl md:text-2xl font-semibold text-rose-700 leading-tight">
                    No hay prisa ni juicio. Tú decides cómo comenzar a desahogarte.
                </p>
            </div>

            {/* Opciones de selección */}
            <div className="w-full max-w-lg space-y-6">
                {/* Opción 1: Diario Personal */}
                <Card
                    onClick={() => toggleSelection('journal')}
                    className={cn("p-6 border-2 border-rose-200 hover:border-rose-250 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-rose-100/20 bg-white/90 backdrop-blur-sm",
                        selections.journal && "border-rose-300 shadow-lg shadow-rose-100/30"
                    )}
                >
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center group-hover:animate-gentle-bounce shadow-sm">
                            <BookOpen className="w-6 h-6 text-rose-600" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mi Diario Personal</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Un espacio íntimo solo para ti. Escribe tus pensamientos, emociones y reflexiones en completa
                                privacidad.
                            </p>
                            <div className="mt-3 flex items-center text-sm text-rose-600">
                                <Heart className="w-4 h-4 mr-1 fill-rose-200" />
                                Solo tú puedes verlo
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Opción 2: Publicaciones Anónimas */}
                <Card
                    onClick={() => toggleSelection('posts')}
                    className={cn("p-6 border-2 border-rose-200 hover:border-rose-250 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-rose-100/20 bg-white/90 backdrop-blur-sm",
                        selections.posts && "border-rose-300 shadow-lg shadow-rose-100/30"
                    )}
                >
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center group-hover:animate-gentle-bounce shadow-sm">
                            <Users className="w-6 h-6 text-rose-600" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compartir sin mostrarte</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A veces compartir lo que llevas dentro, sin que nadie sepa quién eres, puede ser un alivio.
                                Aquí puedes soltar lo que sientes y sentirte acompañado sin exponerte.
                            </p>
                            <div className="mt-3 flex items-center text-sm text-rose-600">
                                <Users className="w-4 h-4 mr-1" />
                                No estás solo, aunque nadie te vea.
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Opción 3: Ambas */}
                <Card
                    className={cn("p-6 border-2 border-rose-200 hover:border-rose-250 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-rose-100/20 bg-white/90 backdrop-blur-sm",
                        selections.posts && selections.journal && "border-rose-300 shadow-lg shadow-rose-100/30"
                    )}
                    onClick={selectBoth}
                >
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center group-hover:animate-gentle-bounce shadow-sm">
                            <Sparkles className="w-6 h-6 text-rose-600" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambos caminos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Puedes guardar lo que sientes solo para ti o dejar que otros te acompañen en el camino. No tienes que elegir un solo modo de sanar.
                            </p>
                            <div className="mt-3 flex items-center text-sm text-rose-600">
                                <Sparkles className="w-4 h-4 mr-1" />
                                Tu espacio, a tu ritmo.
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            {/* Botón de inicio */}
            <div className="mt-8">
                <Button
                    onClick={handleStart}
                    className="w-full bg-rose-500 hover:bg-rose-400 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
                >
                    Comenzar a desahogarme
                </Button>
            </div>

            {/* Mensaje de apoyo */}
            <div className="mt-12 text-center max-w-md">
                <p className="text-gray-500 text-sm leading-relaxed">
                    Recuerda: no hay elección incorrecta. Puedes cambiar tu preferencia en cualquier momento desde tu perfil.
                </p>
            </div>

            {/* Botón flotante de ayuda */}
            <Button
                variant="outline"
                size="sm"
                className="fixed bottom-6 right-6 rounded-full border-rose-200 text-rose-600 hover:bg-rose-50 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-rose-100/30"
            >
                <Heart className="w-4 h-4 mr-2 fill-rose-200" />
                ¿Necesitas ayuda?
            </Button>
        </div>
    )
}
