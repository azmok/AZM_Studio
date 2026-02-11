import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Media } from '@/payload-types'

export default async function BlogPreview() {
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
        collection: 'posts',
        limit: 3,
        sort: '-publishedAt',
        depth: 1,
    })

    return (
        <section id="blog" className="py-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Blog</h2>
                        <p className="text-sm font-bold text-gray-500">最新情報</p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-magenta hover:border-magenta transition-colors">
                        Read all posts <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.docs.length === 0 ? (
                        <div className="col-span-3 text-center py-12 text-gray-500">
                            まだ投稿がありません。
                        </div>
                    ) : (
                        posts.docs.map((post: any) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-4 relative">
                                    {post.coverImage && (typeof post.coverImage !== 'string') && (post.coverImage as Media).url ? (
                                        <Image
                                            src={(post.coverImage as Media).url || ''}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400">No Image</div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-magenta">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('ja-JP') : 'Draft'}
                                    </span>
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-magenta transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-magenta hover:border-magenta transition-colors">
                        Read all posts <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
