"use client";

import Layout from "@/components/UI/organisms/Layout";
import { Box, Button } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <Layout name="layout">
      <Box> Bem vindo! </Box>
      <Box> Bem vindo! </Box>
      <Box> Bem vindo! </Box>

      {/* Adicionando link para a página de pedidos */}
      <Link href="/orders/pedidos" passHref>
  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
    Ver Lista de Pedidos
  </Button>
</Link>

    </Layout>
  );
};

export default Home;
