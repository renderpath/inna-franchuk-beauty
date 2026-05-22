type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
    return (
        <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                — {eyebrow}
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                {title}
            </h2>

            {text && (
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                    {text}
                </p>
            )}
        </div>
    );
}