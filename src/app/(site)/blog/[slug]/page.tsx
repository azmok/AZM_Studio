import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Media } from '@/payload-types'
import { convertLexicalToHTML, defaultHTMLConverters } from '@payloadcms/richtext-lexical'

export const revalidate = 300 // ISR: 5 minutes

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({ collection: 'posts', limit: 100 })
    return posts.docs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
    })

    const post = posts.docs[0]
    if (!post) return {}

    return {
        title: `${post.title} | Neo Craftica Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [(post.coverImage as Media)?.url || ''],
        },
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
        collection: 'posts',
        where: { slug: { equals: slug } },
        depth: 2,
    })

    const post = posts.docs[0] as any
    if (!post) return notFound()

    const html = await convertLexicalToHTML({
        converters: defaultHTMLConverters,
        data: post.content,
        payload: payload,
    })

    return (
        <article className="min-h-screen bg-off-white pb-32">
            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
                {post.coverImage && (post.coverImage as Media).url && (
                    <Image
                        src={(post.coverImage as Media).url || ''}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-magenta transition-colors">
                            <ArrowLeft size={16} /> Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tighter">
                            {post.title}
                        </h1>
                        <div className="flex gap-4 items-center text-sm font-bold opacity-80">
                            <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                            <span>•</span>
                            <span>{post.tags?.map((t: any) => t.tag).join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-headings:font-bold prose-a:text-magenta prose-img:rounded-xl">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </article>
    )
}
