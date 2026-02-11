import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'

export const revalidate = 60 // ISR: Revalidate every 60 seconds

export default async function BlogListing() {
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
        collection: 'posts',
        limit: 10,
        sort: '-publishedAt',
        depth: 1,
    })

    return (
        <div className="bg-off-white min-h-screen py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-ink mb-6">
                        Blog
                    </h1>
                    <p className="text-xl font-bold text-gray-500">
                        デザインとAIの最前線
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {posts.docs.map((post: any) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6 relative rounded-sm">
                                {post.coverImage && (post.coverImage as Media).url ? (
                                    <Image
                                        src={(post.coverImage as Media).url || ''}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-magenta/0 group-hover:bg-magenta/10 transition-colors duration-300 pointer-events-none" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold bg-ink text-white px-2 py-1">
                                        {post.tags?.[0]?.tag || 'News'}
                                    </span>
                                    <span className="text-xs font-bold text-gray-500">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('ja-JP') : 'Draft'}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold leading-tight group-hover:text-magenta transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
