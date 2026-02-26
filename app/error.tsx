"use client";

import { Button } from "@/components/ui/Button";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 px-4 text-center">
      <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-8 max-w-md w-full border border-[#FF9500]">
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="text-[#FF9500] w-12 h-12" />
          <h2 className="text-2xl font-semibold">Erro inesperado!</h2>
          <p>{error.message || "Ocorreu um erro inesperado."}</p>
          <Button onClick={reset}>
            <RefreshCw />
            Tentar novamente
          </Button>
        </div>
      </div>
    </div>
  );
}
