import React from 'react'

export default function HeaderSaludo() {
    return (
        <div className="mb-12 text-center px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Hola, Sebastián 👋</h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
                Este es tu espacio seguro para expresarte
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mx-auto mt-6"></div>
        </div>
    )
}
