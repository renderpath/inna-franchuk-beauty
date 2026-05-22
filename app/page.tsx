import { AnimatedSection } from '@/components/animated-section';

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f5f2]">
            <section className="relative flex min-h-screen items-center justify-center px-6">
                <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#d9b8a5]/40 blur-3xl" />
                <div className="absolute bottom-[-140px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#ead6ca]/70 blur-3xl" />

                <AnimatedSection className="relative z-10 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b89b84]">
                        Premium Lash & Brow Studio
                    </p>

                    <h1 className="mb-6 text-5xl font-bold text-[#2a2a2a] md:text-7xl">
                        Инна Франчук
                    </h1>

                    <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-[#5f5f5f]">
                        Наращивание ресниц и оформление бровей в пгт Первомайское,
                        Республика Крым
                    </p>

                    <button className="rounded-full bg-[#2a2a2a] px-8 py-4 text-white shadow-xl shadow-black/10 transition duration-300 hover:scale-105 hover:bg-[#3a2f2a]">
                        Онлайн запись
                    </button>
                </AnimatedSection>
            </section>
        </main>
    );
}