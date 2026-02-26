import { cn } from "@/lib/utils";

interface ICenterContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CenterContainer = ({
  children,
  className,
}: ICenterContainerProps) => {
  return (
    <div className={cn("max-w-[1450px] mx-auto px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};
