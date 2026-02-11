'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const menuItems = [
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/#policy' }, // Linking to Policy section as "About"
        { label: 'Contact', href: '/#contact' },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-off-white p-6 flex justify-between items-center bg-transparent pointer-events-none">
                {/* Logo / Brand Name */}
                <Link href="/" className="pointer-events-auto text-xl font-bold tracking-tight z-50 select-none">
                    Neo Craftica
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto z-50 p-2 hover:opacity-70 transition-opacity"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </header>

            {/* Full Screen Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-ink text-off-white flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <nav className="flex flex-col items-center gap-8">
                    {menuItems.map((item, idx) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-6xl md:text-8xl font-bold tracking-tighter hover:text-magenta transition-colors duration-300 transform translate-y-10 opacity-0",
                                isOpen && "animate-slide-up"
                            )}
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className={clsx("mt-12 text-sm text-gray-400 tracking-widest uppercase transition-opacity delay-500 duration-500", isOpen ? "opacity-100" : "opacity-0")}>
                        Creative AI Agency
                    </div>
                </nav>
            </div>
        </>
    )
}
