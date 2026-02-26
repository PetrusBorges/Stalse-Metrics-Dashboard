import { ThemeToggle } from "@/components/ThemeToggle";
import { CenterContainer } from "../CenterContainer";

export const Header = () => {
  return (
    <div className="bg-[#FF9500] text-center mb-2 py-2">
      <CenterContainer className="flex items-center justify-between gap-2">
        <div className="text-start">
          <h2 className="text-white text-2xl font-bold">STALCE</h2>

          <p className="text-white text-sm">Painel de Controle</p>
        </div>

        <ThemeToggle />
      </CenterContainer>
    </div>
  );
};
