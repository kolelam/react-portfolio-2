import React, { useState } from 'react';

// Constructs the Contact page
export default function Contact() {
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isMessageEmpty, setIsMessageEmpty] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);

    // creates error when no data is inputted into the field
    const handleBlur = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value.trim();

        if (fieldName === 'name') {
            setIsNameEmpty(fieldValue === '');
        }

        // .test is a regex validation method that returns a boolean in order to compare to the fieldValue
        if (fieldName === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsEmailInvalid(!emailPattern.test(fieldValue));
        }

        if (fieldName === 'message') {
            setIsMessageEmpty(fieldValue === '');
        }
    };

    // Clears previous error messages and checks to see if any fields are empty when clicking the submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Clear previous error messages
        setIsNameEmpty(false);
        setIsEmailInvalid(false);
        setIsMessageEmpty(false);

        // Check for empty fields
        if (!name) {
            setIsNameEmpty(true);
            return;
        }

        if (!email) {
            setIsEmailInvalid(true);
            return;
        }

        if (!message) {
            setIsMessageEmpty(true);
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        event.target.reset();
    };

    return (
        <div className='contact py-16'>
            <form className='contact-form main-container bg-white shadow-md rounded-lg p-6' onSubmit={handleSubmit}>
                <div className='contact-items mb-4'>
                    <label htmlFor='name' className='block text-gray-700 font-medium'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onBlur={handleBlur}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
                    />
                    {isNameEmpty && <p className='mt-1 text-red-500 text-sm'>Name is required</p>}
                </div>

                <div className='contact-items mb-4'>
                    <label htmlFor='email' className='block text-gray-700 font-medium'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onBlur={handleBlur}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
                    />
                    {isEmailInvalid && <p className='mt-1 text-red-500 text-sm'>Invalid email address</p>}
                </div>

                <div className='contact-items mb-4'>
                    <label htmlFor='message' className='block text-gray-700 font-medium'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        rows={5}
                        onBlur={handleBlur}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
                    />
                    {isMessageEmpty && <p className='mt-1 text-red-500 text-sm'>Message is required</p>}
                </div>

                <div className='contact-items'>
                    <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
