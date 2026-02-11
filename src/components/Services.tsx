import { Layout, PenTool, Zap, Sparkles } from 'lucide-react'

const services = [
    {
        title: 'Web Design',
        description: 'Next.jsを用いた高速で美しいWebサイト制作。SEOとUXを最大化します。',
        icon: Layout,
    },
    {
        title: 'Branding',
        description: 'ロゴ、カラーパレット、フォント選定。AIを活用し、ブランドの核を可視化。',
        icon: PenTool,
    },
    {
        title: 'Marketing Assets',
        description: 'フライヤー、バナー、SNS用画像。一貫した世界観で顧客の心を掴みます。',
        icon: Zap,
    },
    {
        title: 'AI Consultation',
        description: '生成AIの導入支援・ワークフロー構築。クリエイティブ業務を効率化。',
        icon: Sparkles,
    },
]

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-gray-200 pb-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h2>
                    <span className="text-sm font-bold text-gray-500 mt-4 md:mt-0">提供サービス</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group p-8 border border-gray-100 bg-off-white hover:bg-magenta hover:text-white transition-all duration-300 rounded-2xl cursor-default">
                            <s.icon className="w-8 h-8 mb-6 text-magenta group-hover:text-white transition-colors" />
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 font-medium">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
