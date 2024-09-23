import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Questions = ({ isOpen, onClose, handleSubmit }) => {
    const [step, setStep] = useState(1);
    const [gender, setGender] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [background, setBackground] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            // Disable background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable background scrolling when modal is closed
            document.body.style.overflow = '';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNextStep = () => {
        if (step === 1) {
            // Validate step 1: check if gender and age group are selected
            if (!gender || !ageGroup) {
                setError('Please select both your gender and age group.');
                return;
            }
            setError('');
            setStep(2);
        } else if (step === 2) {
            // Validate step 2: check if background is selected
            if (!background) {
                setError('Please select your situation.');
                return;
            }
            setError('');
            const userInfoSentence = `I, your user, am a person of gender: ${gender} in age group ${ageGroup} and my situation is best described as: ${background.replace('_', ' ')}.`;
            handleSubmit(userInfoSentence);
        }
    };

    const handleBackStep = () => {
        if (step === 2) {
            setStep(1);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-[40px] pb-[60px] px-2">
                    <motion.div
                        className="relative bg-white rounded-lg shadow-lg md:p-8 px-2 py-5 w-full max-w-5xl overflow-y-auto max-h-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="md:text-2xl text-xl font-bold mb-6">Legal Consultation Questionnaire</h2>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2 text-sm">
                                <span>Step {step} of 2</span>
                                <div className="relative md:w-[90%] w-[75%] h-3 bg-gray-300 rounded">
                                    <div
                                        className="absolute h-full bg-purple-500 rounded"
                                        style={{ width: `${step === 1 ? 50 : 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        {step === 1 && (
                            <div>
                                <h3 className="text-md font-semibold mb-4">What is your gender?</h3>
                                <div className="flex gap-6 mb-6 items-center justify-center">
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${gender === 'male' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setGender('male')}>
                                        Male
                                    </button>
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${gender === 'female' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setGender('female')}>
                                        Female
                                    </button>
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${gender === 'other' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setGender('other')}>
                                        Other
                                    </button>
                                </div>

                                <h3 className="text-md font-semibold mb-4">What is your age group?</h3>
                                <div className="flex gap-6 mb-6 items-center justify-center">
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${ageGroup === 'under_18' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setAgeGroup('under_18')}>
                                        Under 18
                                    </button>
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${ageGroup === '18_24' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setAgeGroup('18_24')}>
                                        18-24
                                    </button>
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${ageGroup === '25_34' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setAgeGroup('25_34')}>
                                        25-34
                                    </button>
                                    <button
                                        className={`py-3 md:px-6 px-3 rounded-lg text-md ${ageGroup === '35_44' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setAgeGroup('35_44')}>
                                        35-44
                                    </button>
                                </div>

                                <button
                                    className="bg-purple-500 text-white py-3 px-6 rounded-lg text-md hover:bg-purple-600 transition-all"
                                    onClick={handleNextStep}>
                                    Next
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h3 className="text-md font-semibold mb-4">What best describes your situation?</h3>
                                <div className="flex flex-col gap-4 mb-6">
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'student' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('student')}>
                                        Student
                                    </button>
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'international_student' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('international_student')}>
                                        International Student
                                    </button>
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'married_with_issues' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('married_with_issues')}>
                                        Married with Issues
                                    </button>
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'employed_with_issues' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('employed_with_issues')}>
                                        Employed with Issues
                                    </button>
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'seeking_advice' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('seeking_advice')}>
                                        Seeking Legal Advice
                                    </button>
                                    <button
                                        className={`py-3 px-6 rounded-lg text-md ${background === 'others' ? 'bg-purple-300' : 'bg-gray-200'} hover:bg-purple-400 transition-all`}
                                        onClick={() => setBackground('others')}>
                                        Other
                                    </button>
                                </div>

                                <div className="flex justify-between">
                                    <button
                                        className="bg-gray-500 text-white py-3 px-6 rounded-lg text-md hover:bg-gray-600 transition-all"
                                        onClick={handleBackStep}>
                                        Back
                                    </button>
                                    <button
                                        className="bg-purple-500 text-white py-3 px-6 rounded-lg text-md hover:bg-purple-600 transition-all"
                                        onClick={handleNextStep}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}

                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl" onClick={onClose}>
                            &times;
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Questions;
