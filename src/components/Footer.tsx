export default function Footer() {
    return (
        <footer className="bg-ink text-off-white py-20 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Neo Craftica</h2>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        AIを活用した次世代のクリエイティブエージェンシー。<br />
                        デザインとテクノロジーの融合で、ブランドの可能性を最大化します。
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Social</h3>
                    <a href="#" className="text-sm hover:text-magenta transition-colors">Instagram</a>
                    <a href="#" className="text-sm hover:text-magenta transition-colors">X (Twitter)</a>
                    <a href="#" className="text-sm hover:text-magenta transition-colors">Note</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Legal</h3>
                    <a href="#" className="text-sm hover:text-magenta transition-colors">プライバシーポリシー</a>
                    <a href="#" className="text-sm hover:text-magenta transition-colors">特定商取引法に基づく表記</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex justify-between items-end">
                <span className="text-xs text-gray-600">© 2026 Neo Craftica. All Rights Reserved.</span>
                <span className="text-[10px] text-gray-700">Tokyo, Japan</span>
            </div>
        </footer>
    )
}
