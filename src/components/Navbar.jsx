import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Navbar({ scrolled }) {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" : "bg-slate-950/20 backdrop-blur-sm"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/logo.png" alt="Logo" className="h-8 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>

                    {/* Nav links - hidden on small screens */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-sm text-gray-300 hover:text-blue-400 lg:text-base">
                            Features
                        </a>
                        <a href="#pricing" className="text-sm text-gray-300 hover:text-blue-400 lg:text-base">
                            Pricing
                        </a>
                        <a href="#testimonials" className="text-sm text-gray-300 hover:text-blue-400 lg:text-base">
                            Testimonials
                        </a>
                    </div>

                    <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6"/> : (<Menu className="w-5 h-5 sm:w-6 sm:h-6" />)}
                    </button>
                </div>
            </div>

            {/* Mobile menu - shown on small screens */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#features" onClick={() => setMobileMenuIsOpen(false)} className="block px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white">
                        Features
                        </a>
                        <a href="#pricing" onClick={() => setMobileMenuIsOpen(false)} className="block px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white">
                            Pricing
                        </a>
                        <a href="#testimonials" onClick={() => setMobileMenuIsOpen(false)} className="block px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white">
                            Testimonials
                        </a>
                    </div>

                </div>
            )}
        </nav>);
}