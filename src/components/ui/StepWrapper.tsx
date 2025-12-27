import { cn } from "@/lib/utils";

export function StepWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-black/90 border border-white/5 rounded-xl p-0 md:p-8 ",
        className
      )}
    >
      {children}
    </div>
  );
}
