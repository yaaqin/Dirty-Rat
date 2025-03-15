import React, { useState } from 'react'
import './style.css'
import car2 from '../../../assets/img/contact us (1).jpg'
import sendEmail from '../../../service/emailService';
export default function MainComponent() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Kirim email
            setLoading(true);
    
            // Tentukan penerima (to_name), misalnya 'Recipient Name'
            const to_name = "DirtyRat Admin"; // Ganti dengan nama penerima sesuai kebutuhan
    
            // Kirim email melalui EmailJS
            await sendEmail({
                from_name: formData.name,
                to_name: to_name,
                message: formData.message,
                user_email: formData.email,
            });
    
            // Reset formData ke nilai default setelah pengiriman email berhasil
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className='pt-10 md:pt-20 relative'>
            <img src={car2} alt="" className="min-h-screen w-full object-cover absolute z-0 filter blur-sm" />
            <section className='w-full flex justify-center pt-2'>
                <div className="mt-8 md:mt-16 p-4 md:p-20 absolute flex flex-col md:flex-row md:items-center gap-10 mx-auto w-full">
                    <div className="px-0 md:p-8 text-white flex-1">
                        <p className='font-bold font-sans text-4xl'>CONTACT US</p>
                        <div className="max-w-4xl mx-auto space-y-8 mt-4 md:mt-12 text-2xl">
                            <div>
                                <p className="font-semibold">General Inquiries</p>
                                <a href="mailto:contact@dekogon.com" className="text-xl">contact@dirtyratstudio.com</a>
                            </div>
                            <div>
                                <p className="font-semibold">New Business Inquiries</p>
                                <a href="mailto:inquiries@dekogon.com" className="text-xl">inquiries@dirtyratstudio.com</a>
                            </div>
                            <div>
                                <p className="font-semibold">Dirty Rat Studios</p>
                                <a href="https://www.dirtyratstudio.com" className="text-xl" target="_blank" rel="noopener noreferrer">www.dirtyratstudio.com</a>
                            </div>
                            <div>
                                <p className="font-semibold">Jakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-0 md:p-8 text-white flex-1 -mt-6 md:mt-0">
                        <div className="max-w-4xl mx-auto p-0 rounded-lg">
                            <div className="space-y-2 md:space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="" className="block text-sm text-shadow-md font-medium text-white">Fullname</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Fullname"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm text-shadow-md font-medium text-white">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm text-shadow-md font-medium text-white">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your message here"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className={`${loading ? 'cursor-wait': 'cursor-pointer'} w-full bg-secondaryColor text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
