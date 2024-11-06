"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { GithubIcon, LinkedinIcon } from "lucide-react"

const ContactForm: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })

            if (response.ok) {
                console.log("submitted")
                setStatus('success')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <div className="max-h-screen bg-bg p-4 sm:p-8">
            <div className="max-w-2xl mx-auto bg-white border-8 border-black p-8  shadow-[8px_8px_0_0_#000]">
                <h1 className="text-4xl font-bold text-center mb-8 uppercase ">Contact Me!</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="name" className="text-lg font-bold uppercase">Name</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-2 border-4 border-black text-lg p-3 w-full focus:outline-none focus:ring-4 focus:ring-[#ffc800] transform transition-transform focus:rotate-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-lg font-bold uppercase">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-2 border-4 border-black text-lg p-3 w-full focus:outline-none focus:ring-4 focus:ring-[#ffc800] transform transition-transform focus:-rotate-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-lg font-bold uppercase">Message</Label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            className="mt-2 border-4 border-black text-lg p-3 w-full focus:outline-none focus:ring-4 focus:ring-[#ffc800] transform transition-transform focus:rotate-1"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-[#ffc800] text-black border-4 border-black text-xl font-bold uppercase p-4 hover:bg-[#FFDC58] transition-colors transform hover:-rotate-2 hover:translate-y-[-4px] hover:shadow-[4px_4px_0_0_#000]"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
                {status === 'success' && (
                    <p className="mt-4 text-2xl font-bold text-black bg-[#ffc800] p-4 border-4 border-black transform rotate-2">Your message has been sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="mt-4 text-2xl font-bold text-white bg-black p-4 border-4 border-[#ffc800] transform -rotate-2">There was an error sending your message. Please try again.</p>
                )}
            </div>
        </div>
    )
}

export default ContactForm