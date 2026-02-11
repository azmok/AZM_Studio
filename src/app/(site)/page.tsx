import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Policy from '@/components/Policy'
import Workflow from '@/components/Workflow'
import Works from '@/components/Works'
import BlogPreview from '@/components/BlogPreview'
import ContactCTA from '@/components/ContactCTA'

export const revalidate = 60 // ISR

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Policy />
            <Workflow />
            <Works />
            <BlogPreview />
            <ContactCTA />
        </>
    )
}
