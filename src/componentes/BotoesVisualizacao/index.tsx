import { Table, PieChart, BarChart, LineChart, TrendingUp } from 'lucide-react';

interface BotoesVisualizacaoProps {
  viewMode: 'table' | 'pie' | 'doughnut' | 'bar' | 'stacked-bar' | 'horizontal-bar' | 'line' | 'analytics';
  setViewMode: (mode: 'table' | 'pie' | 'doughnut' | 'bar' | 'stacked-bar' | 'horizontal-bar' | 'line' | 'analytics') => void;
}

function BotoesVisualizacao({ viewMode, setViewMode }: BotoesVisualizacaoProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <button
        onClick={() => setViewMode('table')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'table'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <Table size={20} />
        Tabela
      </button>
      <button
        onClick={() => setViewMode('line')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'line'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <LineChart size={20} />
        Linha Temporal
      </button>
      <button
        onClick={() => setViewMode('analytics')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'analytics'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <TrendingUp size={20} />
        Análise Comparativa
      </button>
      {/* Botões existentes */}
      <button
        onClick={() => setViewMode('pie')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'pie'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <PieChart size={20} />
        Pizza
      </button>
      <button
        onClick={() => setViewMode('bar')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'bar'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <BarChart size={20} />
        Barras
      </button>
      <button
        onClick={() => setViewMode('stacked-bar')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          viewMode === 'stacked-bar'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        <BarChart size={20} />
        Barras Empilhadas
      </button>
    </div>
  );
}

export default BotoesVisualizacao;