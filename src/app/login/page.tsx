'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { supabase } from '@/client';

const Page = () => {
    const router = useRouter();
    const [isFormValid, setIsFormValid] = useState(false);

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        let valid = true;
        let errors = {
            email: '',
            password: '',
        };

        if (!formData.email) {
            errors.email = 'Cannot be empty';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.password) {
            errors.password = 'Cannot be empty';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    useEffect(() => {
        const isValid = validate();
        setIsFormValid(isValid);
    }, [formData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        const { email, password } = formData;
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            alert('Logged in successfully!');
            if (data.session) {
                const { access_token } = data.session;
                sessionStorage.setItem('access_token', access_token);
                localStorage.setItem('access_token', access_token);
            }
            if (data.user) {
                sessionStorage.setItem('user_id', data.user.id);
                localStorage.setItem('user_id', data.user.id);
                setShowSuccessPopup(true);
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            }
        }};

        return (
            <div className="min-h-screen mt-32 mb-12 flex items-center justify-center">
                <div className="flex min-w-[396px] flex-col items-center">
                    <div className="flex items-center space-x-2 mb-12">
                        <Image src="/logo.svg" alt="logo" width={32} height={32} />
                        <span className="text-[#333333] text-4xl font-bold">devlinks</span>
                    </div>
                    <div className="w-full">
                        <div className="text-left mt-10">
                            <h1 className="text-3xl font-bold mb-2">Login</h1>
                            <p className="text-[#737373] mb-10">
                                Add your details below to get back into the app
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6 flex flex-col w-full"
                        >
                            <div>
                                <label htmlFor="email" className="mb-1 text-xs text-[#333333]">
                                    Email address
                                </label>
                                <div className="relative">
                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="e.g. alex@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    <Image
                                        src="/mail.svg"
                                        alt="mail"
                                        width={16}
                                        height={16}
                                        className="w-4 h-4  absolute top-2.5 left-4"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs absolute right-2.5 top-2.5">{errors.email}</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className={`mb-1 text-xs ${errors.email ? 'text-red-500' : 'text-[#333333]'}`}>
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${errors.password ? 'border-red-500' : ''}`}
                                    />
                                    <Image
                                        src="/password.svg"
                                        alt="lock"
                                        width={16}
                                        height={16}
                                        className="w-4 h-4 absolute top-2.5 left-4"
                                    />
                                    {errors.password && <span className="text-red-500 text-xs absolute right-2.5 top-2.5">{errors.password}</span>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`w-full font-semibold text-base rounded-md p-2  text-white ${!isFormValid ? "bg-[#BEADFF] cursor-not-allowed" : "bg-[#633CFF]"
                                    }`}
                                disabled={!isFormValid}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <p className="text-sm pt-6">
                        Don’t have an account?{' '}
                        <span className="text-[#633CFF] cursor-pointer">
                            <Link href="/signup">Create account</Link>
                        </span>
                    </p>
                </div>
                {showSuccessPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-md shadow-md text-center">
                            <p className="text-lg font-semibold">
                                You have logged in successfully!
                            </p>
                            <p className="text-sm mt-2">
                                You will be redirected to your dashboard shortly.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default Page;
