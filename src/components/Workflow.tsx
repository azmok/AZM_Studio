const steps = [
    { num: '01', title: 'Hearing', desc: 'ヒアリング', detail: '課題と目的を深く理解します。' },
    { num: '02', title: 'Planning', desc: '設計・企画', detail: '構成とデザインの方向性を策定。' },
    { num: '03', title: 'Creation', desc: '制作・実装', detail: '最高品質のアウトプットを形に。' },
    { num: '04', title: 'Launch', desc: '公開・改善', detail: '公開後の運用もサポート。' },
]

export default function Workflow() {
    return (
        <section id="workflow" className="py-24 bg-off-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Workflow</h2>
                    <p className="text-gray-500 font-bold text-sm">制作の流れ</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-6 pt-12 border-t border-gray-300 hover:border-magenta transition-colors group">
                            <span className="absolute top-0 right-0 text-6xl font-black text-gray-200 group-hover:text-magenta/10 transition-colors -translate-y-1/2">
                                {step.num}
                            </span>
                            <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                            <span className="block text-sm font-bold text-magenta mb-4">{step.desc}</span>
                            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-black transition-colors">
                                {step.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
