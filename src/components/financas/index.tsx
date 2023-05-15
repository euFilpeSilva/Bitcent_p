import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import { Button, SegmentedControl } from "@mantine/core";
import {
  IconLayoutGrid,
  IconList,
  IconPlus,
  IconCoin,
  IconCreditCard
} from "@tabler/icons-react";
import Cabecalho from "../template/Cabecalho";
import CampoMesAno from "../template/CampoMesAno";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Grade from "./Grade";
import Lista from "./Lista";

export default function Financas() {
      const {
        data,
        alterarData,
        alterarExibicao,
        tipoExibicao,
        transacoes,
        transacao,
        selecionar,
        salvar,
        excluir,
      } = useTransacao();

      const totalReceitas = transacoes
        .filter((t) => t.tipo === "receita")
        .reduce((total, t) => total + t.valor, 0);

      const totalDespesas = transacoes
        .filter((t) => t.tipo === "despesa")
        .reduce((total, t) => total + t.valor, 0);

      const totalGeral = totalReceitas - totalDespesas;

    // Fim das partes adicionadas

    function renderizarControles() {

      return (
        <>
          <div className="grid grid-cols-3 gap-5">
            <div className="p-4 bg-green-500 rounded-lg">
              <div className="p-4 bg-green-500 rounded-lg flex items-center">
                <IconCoin className="text-white mr-2" size={32} />
              </div>
              <p className="mb-2 text-lg font-bold text-white">Receitas</p>
              <p className="text-3xl font-bold text-white">
                R$ {''}
                {calcularTotal(transacoes.filter((t) => t.tipo === "receita"))}
              </p>              
            </div>
            <div className="p-4 bg-red-500 rounded-lg">

               <div className="p-4 bg-red-500 rounded-lg flex items-center">
                    <IconCreditCard className="text-white mr-2" size={32} />
                </div>

              <p className="mb-2 text-lg font-bold text-white">Despesas</p>
              <p className="text-3xl font-bold text-white">
                R${" "}
                {calcularTotal(transacoes.filter((t) => t.tipo === "despesa"))}
              </p>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="p-4 bg-blue-500 rounded-lg flex items-center">
                  <IconCoin className="text-white mr-2" size={32} />
              </div>
              <p className="mb-2 text-lg font-bold text-white">Total geral</p>
              <p className="text-3xl font-bold text-white">
                R$ {totalGeral.toFixed(2)}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between mt-5">
            <CampoMesAno data={data} dataMudou={alterarData} />
            <div className="flex gap-5">
              <Button
                className="bg-blue-500"
                leftIcon={<IconPlus />}
                onClick={() => selecionar(transacaoVazia)}
              >
                Nova transação
              </Button>
              <SegmentedControl
                data={[
                  { label: <IconList />, value: "lista" },
                  { label: <IconLayoutGrid />, value: "grade" },
                ]}
                onChange={(tipo) => alterarExibicao(tipo as TipoExibicao)}
              />
            </div>
          </div>
        </>
      );
    }

    function calcularTotal(transacoes: Transacao[]) {
      const total = transacoes.reduce((acc, cur) => acc + cur.valor, 0);
      return total.toFixed(2);
    }

    function renderizarTransacoes() {
        const props = { transacoes, selecionarTransacao: selecionar }
        return tipoExibicao === 'lista' 
            ? <Lista {...props} />
            : <Grade {...props} />
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                {renderizarControles()}
                {transacao ? (
                    <Formulario
                        transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => selecionar(null)}
                    />
                ) : transacoes.length > 0 ? (
                    renderizarTransacoes()
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    )
}