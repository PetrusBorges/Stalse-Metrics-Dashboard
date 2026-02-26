import { cn } from "@/lib/utils";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: ICardProps) => {
  return (
    <div
      className={cn(
        "border border-gray-300 dark:border-gray-700 p-2 rounded-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};
