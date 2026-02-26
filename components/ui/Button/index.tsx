import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading,
  disabled,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center cursor-pointer border rounded-[12px] px-2 py-3 outline-none transition-all duration-300 w-full focus:border-[#FF9500] focus:ring-2 focus:ring-[#FF9500] dark:border-zinc-600 dark:bg-zinc-800",
        isLoading && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && children}
    </button>
  );
};
