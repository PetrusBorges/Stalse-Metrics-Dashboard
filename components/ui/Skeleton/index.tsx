import { cn } from "@/lib/utils";

interface ISkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: ISkeletonProps) => {
  return (
    <div className="animate-pulse">
      <div
        className={cn("h-4 w-full bg-gray-200 rounded-2xl", className)}
      ></div>
    </div>
  );
};
