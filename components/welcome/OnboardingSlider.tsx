'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from '@/app/(setup)/bienvenida/welcomePage/WelcomePage';
import SelectionPage from '@/app/(setup)/bienvenida/selectionPage/SelectionPage';
import { useSession } from 'next-auth/react';
import { getEntryMode } from '@/utils/onboarding';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRefreshToken } from '@/hooks/useRefreshToken';

interface PropsSelection {
    journal: boolean,
    posts: boolean
}

export default function OnboardingSlider() {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState<PropsSelection>({
        journal: false,
        posts: false,
    });

    const router = useRouter();

    const { refresh } = useRefreshToken();

    const selectBoth = () => {
        if (selections.journal && selections.posts) {
            setSelections({ journal: false, posts: false });
        } else {
            setSelections({ journal: true, posts: true });
        }

    };
    const toggleSelection = (key: keyof typeof selections) => {
        // Toggle the selection state for the given key
        // This will switch between true and false
        setSelections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const entryMode = getEntryMode(selections);


    const { data: session, update } = useSession();
    const handleStart = async () => {
        const userId = session?.user?.id;
        if (!userId) {
            console.error('User ID not found');
            return;
        }
        const { status } = await axios.put(`/api/user/${userId}/welcome`, {
            hasSeenWelcome: true,
            entryMode: entryMode,
        });

        if (status !== 200) {
            console.error('Failed to update welcome status');
            return;
        } else {
            await refresh();
            router.push('/home');
        }

    };

    return (
        <div className="w-full h-screen relative bg-rose-50 overflow-x-hidden">
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
                            selectBoth={selectBoth}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
