const works = [
    { id: 1, title: 'Future Cafe', cat: 'Branding / Web', color: 'bg-blue-100' },
    { id: 2, title: 'Tech Nova', cat: 'Logo Design', color: 'bg-green-100' },
    { id: 3, title: 'Art Vibe', cat: 'Marketing Flyer', color: 'bg-purple-100' },
    { id: 4, title: 'Eco Life', cat: 'Web Renewal', color: 'bg-orange-100' },
]

export default function Works() {
    return (
        <section id="works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 flex items-end justify-between">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Works</h2>
                    <span className="text-sm font-bold text-gray-500">制作実績</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work) => (
                        <div key={work.id} className="group relative aspect-video bg-gray-100 rounded-none overflow-hidden cursor-pointer">
                            {/* Image Placeholder */}
                            <div className={`absolute inset-0 ${work.color} transition-transform duration-700 group-hover:scale-105`}></div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs uppercase tracking-widest mb-2">{work.cat}</span>
                                <h3 className="text-3xl font-bold">{work.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-magenta hover:border-magenta transition-colors">
                        View All Works
                    </button>
                </div>
            </div>
        </section>
    )
}
