'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from '@/app/(setup)/bienvenida/welcomePage/WelcomePage';
import SelectionPage from '@/app/(setup)/bienvenida/selectionPage/SelectionPage';
import { useSession } from 'next-auth/react';
import { getEntryMode } from '@/utils/onboarding';

export default function OnboardingSlider() {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState({
        journal: false,
        posts: false,
    });

    const toggleSelection = (key: keyof typeof selections) => {
        setSelections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const entryMode = getEntryMode(selections);

    const { data: session } = useSession();
    const handleStart = () => {
        console.log('Entry mode:', entryMode);
        console.log('Starting with selections:', selections);
        // Aquí puedes enviar a tu API o contexto global
    };

    return (
        <div className="w-full h-screen relative bg-rose-50 overflow-x-hidden overflow-y-hidden">
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="welcome"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <WelcomePage onNext={() => setStep(1)} />
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="selection"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="absolute inset-0 overflow-x-hidden overflow-y-auto"
                    >
                        <SelectionPage
                        toggleSelection={toggleSelection}
                        selections={selections}
                        handleStart={handleStart}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
