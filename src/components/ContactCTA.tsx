export default function ContactCTA() {
    return (
        <section id="contact" className="py-32 bg-off text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-50 opacity-50 skew-y-3 transform origin-bottom-right"></div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    Let&apos;s Create.
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    AI時代の新しい表現を、共に作りませんか？
                    <br />
                    まずはお気軽にご相談ください。
                </p>

                <form className="flex flex-col gap-4 max-w-md mx-auto mb-12">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-6 py-4 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-magenta transition-colors"
                    />
                    <button className="w-full px-6 py-4 bg-ink text-white font-bold hover:bg-magenta transition-colors">
                        Send Message
                    </button>
                </form>

                <p className="text-sm text-gray-500">
                    Or email us at <a href="mailto:hello@neocraftica.com" className="underline hover:text-magenta">hello@neocraftica.com</a>
                </p>
            </div>
        </section>
    )
}
