"use client"; // Isso é necessário para usar useState e useEffect

import { useEffect, useState } from 'react';
import axios from 'axios';
import { env } from "@/config/env";

interface Pedido {
  id: number;
  data: string;
  cpf: string;
  forma_pagamento: string;
  quantidade_itens: number;
  valor_total: number;
}

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(`${env.apiBaseUrl}/pedido`);
        console.log(response.data); // Verifica a resposta da API

        const pedidos = response.data.pedidos.map((pedido: any) => ({
          id: pedido.id,
          data: pedido.data,
          cpf: pedido.cpf,
          forma_pagamento: pedido.forma_pagamento,
          quantidade_itens: pedido.quantidade_itens,
          valor_total: pedido.valor_total,
        }));

        setPedidos(pedidos);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
        setError("Erro ao carregar pedidos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">Lista de Pedidos</h1>
      {loading ? (
        <p>Carregando pedidos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : pedidos.length > 0 ? (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              <strong>ID:</strong> {pedido.id} | <strong>Data:</strong> {pedido.data} | <strong>CPF:</strong> {pedido.cpf} | <strong>Forma de Pagamento:</strong> {pedido.forma_pagamento} | <strong>Itens:</strong> {pedido.quantidade_itens} | <strong>Total:</strong> R${pedido.valor_total}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum pedido encontrado.</p>
      )}
    </main>
  );
}
