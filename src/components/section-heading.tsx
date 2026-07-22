import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "grid gap-6 border-t border-border/70 pt-6 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] md:gap-12",
        className,
      )}
    >
      <div className="flex items-center gap-3 self-start font-mono text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
        <span className="text-signal" aria-hidden="true">
          {index}
        </span>
        <span>{eyebrow}</span>
      </div>
      <div className="max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
