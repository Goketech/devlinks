'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { supabase } from '@/client';

const Page = () => {
    const router = useRouter();
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
            confirmPassword: '',
        };

        if (!formData.email) {
            errors.email = 'Cannot be empty';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format";
            valid = false;
        }

        if (!formData.password) {
            errors.password = 'Please check again';
            valid = false;
        } else if (formData.password.length < 8) {
            errors.password = "Password too short";
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
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
        if (supabase?.auth) {
            const { data, error } = await supabase.auth.signUp({ email, password });

            if (error) {
                alert(error.message);
            } else {
                alert('User created successfully!');
                if (data.session) {
                    const { access_token } = data.session;
                    sessionStorage.setItem('access_token', access_token);
                    localStorage.setItem('access_token', access_token);
                }
                setShowSuccessPopup(true);
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            }
        } else {
            alert('Supabase auth is not initialized.');
        }
    };

    return (
        <div className="mx-6 md:mx-0 md:min-h-screen md:mt-32 mb-12 md:flex md:items-center md:justify-center">
            <div className="flex md:min-w-[396px] flex-col mt-6 md:mt-0 md:items-center">
                <div className="flex items-center space-x-2 mb-12">
                    <Image src="/logo.svg" alt="logo" width={32} height={32} />
                    <span className="text-[#333333] text-4xl font-bold">devlinks</span>
                </div>
                <div className="w-full">
                    <div className="text-left mt-10">
                        <h1 className="text-3xl font-bold mb-2">Create account</h1>
                        <p className="text-[#737373]">
                            Let&apos;s get you started sharing your links!
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-6 flex flex-col w-full"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className={`mb-1 text-xs ${errors.email ? 'text-red-500' : 'text-[#333333]'
                                    }`}
                            >
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
                            <label htmlFor="password" className={`mb-1 text-xs ${errors.password ? 'text-red-500' : 'text-[#333333]'}`}>
                                Create password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="At least 8 characters"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${errors.password ? 'border-red-500' : ''}`}
                                />
                                <Image
                                    src="/password.svg"
                                    alt="lock"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4  absolute top-2.5 left-4"
                                />
                                {errors.password && <span className="text-red-500 text-xs absolute right-2.5 top-2.5">{errors.password}</span>}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className={`mb-1 text-xs ${errors.confirmPassword ? 'text-red-500' : 'text-[#333333]'}`}
                            >
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="At least 8 characters"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md pl-11 p-2 outline-[#633CFF] ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                />
                                <Image
                                    src="/password.svg"
                                    alt="lock"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 absolute top-2.5 left-4"
                                />
                                {errors.confirmPassword && <span className="text-red-500 text-xs absolute right-2.5 top-2.5">{errors.confirmPassword}</span>}
                            </div>
                        </div>
                        <p className="text-xs text-[#737373]">
                            Password must contain at least 8 characters
                        </p>
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full font-semibold text-base rounded-md p-2  text-white ${!isFormValid ? "bg-[#BEADFF] cursor-not-allowed" : "bg-[#633CFF]"
                                }`}
                        >
                            Create new account
                        </button>
                    </form>
                </div>
                <p className="text-sm text-center md:text-left pt-6">
                    Already have an account?{' '}<br className="md:hidden" />
                    <span className="text-[#633CFF] cursor-pointer">
                        <Link href="/login">Login</Link>
                    </span>
                </p>
            </div>
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-md text-center">
                        <p className="text-lg font-semibold">You have signed up successfully!</p>
                        <p className="text-sm mt-2">You will be redirected to your dashboard shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
