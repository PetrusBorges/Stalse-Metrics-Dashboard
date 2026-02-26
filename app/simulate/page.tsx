import { simulateError } from "../actions";

export default async function Simulate() {
  await simulateError();

  return (
    <div>
      <h1>Página de Simulação de Erro</h1>
    </div>
  );
}
