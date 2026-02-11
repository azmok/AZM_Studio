export default function Policy() {
    return (
        <section id="policy" className="py-24 bg-ink text-off-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Policy</h2>
                    <p className="text-xl font-medium leading-relaxed max-w-md text-gray-300">
                        私たちは、AIという<span className="text-magenta">「力」</span>を使いこなし、
                        <br />デザインという<span className="text-magenta">「魂」</span>を吹き込みます。
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="border-l-2 border-magenta pl-6">
                        <h3 className="text-2xl font-bold mb-2">Transparency</h3>
                        <p className="text-sm text-gray-400">プロセスの透明化。AI活用の範囲を明確にし、誠実な制作を行います。</p>
                    </div>
                    <div className="border-l-2 border-magenta pl-6">
                        <h3 className="text-2xl font-bold mb-2">Speed</h3>
                        <p className="text-sm text-gray-400">圧倒的な速度。AIによる効率化で、従来の制作フローを劇的に短縮。</p>
                    </div>
                    <div className="border-l-2 border-magenta pl-6">
                        <h3 className="text-2xl font-bold mb-2">Quality</h3>
                        <p className="text-sm text-gray-400">妥協なき品質。人間の感性とAIの精度を掛け合わせ、最高到達点へ。</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
