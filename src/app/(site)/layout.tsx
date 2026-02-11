import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-noto-sans-jp",
    display: "swap",
    preload: false, // Sometimes helpful to avoid preload issues with large CJK fonts
});

export const metadata = {
    title: "Neo Craftica | Creative Agency",
    description: "AI-powered creative agency designing the future.",
    openGraph: {
        title: "Neo Craftica",
        description: "AI-powered creative agency.",
        type: "website",
        locale: "ja_JP",
    },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ... imports

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja" className={clsx(notoSansJP.variable, "antialiased scroll-smooth")}>
            <body className="font-sans-jp bg-off-white text-ink overflow-x-hidden min-h-screen selection:bg-magenta/20 selection:text-magenta flex flex-col">
                <Header />
                <main className="relative flex-grow min-h-screen flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
