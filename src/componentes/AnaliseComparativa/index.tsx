import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface AnaliseComparativaProps {
  data: any[];
  periodoColumn: string;
  valorColumn: string;
}

function AnaliseComparativa({ data, periodoColumn, valorColumn }: AnaliseComparativaProps) {
  // Agrupa dados por período
  const dadosPorPeriodo = data.reduce((acc, row) => {
    const periodo = row[periodoColumn];
    const valor = parseFloat(row[valorColumn]) || 0;
    acc[periodo] = (acc[periodo] || 0) + valor;
    return acc;
  }, {});

  // Ordena períodos
  const periodos = Object.keys(dadosPorPeriodo).sort();
  
  // Calcula estatísticas
  const valores = Object.values(dadosPorPeriodo) as number[];
  const total = valores.reduce((a, b) => a + b, 0);
  const media = total / valores.length;
  const minimo = Math.min(...valores);
  const maximo = Math.max(...valores);

  // Calcula variações
  const variacoes = periodos.map((periodo, index) => {
    if (index === 0) return null;
    const atual = dadosPorPeriodo[periodo];
    const anterior = dadosPorPeriodo[periodos[index - 1]];
    const variacao = ((atual - anterior) / anterior) * 100;
    return {
      periodo,
      valor: atual,
      variacao,
    };
  }).filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Resumo Estatístico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Total</h3>
          <p className="text-2xl font-bold text-white">
            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Média</h3>
          <p className="text-2xl font-bold text-white">
            {media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Mínimo</h3>
          <p className="text-2xl font-bold text-white">
            {minimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300">Máximo</h3>
          <p className="text-2xl font-bold text-white">
            {maximo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>

      {/* Tabela de Variações */}
      <div className="bg-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Período
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Variação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {variacoes.map((item, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {item.periodo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center text-sm ${
                    item.variacao > 0 
                      ? 'text-green-400' 
                      : item.variacao < 0 
                        ? 'text-red-400' 
                        : 'text-gray-400'
                  }`}>
                    {item.variacao > 0 ? (
                      <ArrowUpRight size={16} className="mr-1" />
                    ) : item.variacao < 0 ? (
                      <ArrowDownRight size={16} className="mr-1" />
                    ) : (
                      <Minus size={16} className="mr-1" />
                    )}
                    {Math.abs(item.variacao).toFixed(2)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnaliseComparativa;