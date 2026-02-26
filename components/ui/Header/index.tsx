import { ThemeToggle } from "@/components/ThemeToggle";
import { CenterContainer } from "../CenterContainer";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-[#FF9500] text-center mb-2 py-2">
      <CenterContainer className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="text-start">
          <h2 className="text-white text-2xl font-bold">STALCE</h2>

          <p className="text-white text-sm">Painel de Controle</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/simulate"
            className="text-sm font-bold text-white bg-red-500 p-2 rounded-md"
          >
            Simular Erro
          </Link>
          <ThemeToggle />
        </div>
      </CenterContainer>
    </div>
  );
};
