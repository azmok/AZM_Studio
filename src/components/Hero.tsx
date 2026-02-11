import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Abstract Blobs */}
            <div className="absolute -top-20 -right-20 w-[60vh] h-[60vh] bg-magenta/20 rounded-full blur-[100px] animate-fade-in" />
            <div className="absolute bottom-0 -left-20 w-[50vh] h-[50vh] bg-blue-500/10 rounded-full blur-[80px]" />

            {/* Main Grid Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Typography Area (Left/Top) */}
                <div className="col-span-1 lg:col-span-7 flex flex-col gap-8">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-ink">
                        <span className="block">未来を</span>
                        <span className="block text-magenta">創る</span>
                        <span className="block">デザイン</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md text-gray-700 tracking-wide">
                        Neo Crafticaは、AIと人間の創造性を融合させる
                        <br className="hidden md:block" />
                        次世代のクリエイティブ・エージェンシーです。
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link
                            href="/#contact"
                            className="group flex items-center gap-2 px-8 py-4 bg-ink text-off-white font-bold rounded-full hover:bg-magenta transition-colors"
                        >
                            依頼する
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/#works"
                            className="flex items-center gap-2 px-8 py-4 border border-ink text-ink font-bold rounded-full hover:bg-ink hover:text-off-white transition-colors"
                        >
                            実績を見る
                        </Link>
                    </div>
                </div>

                {/* Visual/Texture Area (Right/Bottom) */}
                <div className="col-span-1 lg:col-span-5 relative h-[50vh] w-full">
                    {/* Masked Image Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black blob-shape-1 opacity-90 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out flex items-center justify-center text-white/20 font-bold text-4xl">
                        {/* This would be an image in production */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                        Creativity
                    </div>

                    {/* Decorative floating element */}
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-magenta rounded-full mix-blend-multiply opacity-80 animate-pulse blob-shape-2"></div>
                </div>
            </div>

            {/* Vertical Japanese Text Decoration */}
            <div className="absolute left-6 bottom-12 text-xs font-bold tracking-[0.5em] writing-vertical text-gray-400 hidden lg:block opacity-60">
                ネオ・クラフティカ・デザイン
            </div>
        </section>
    )
}
