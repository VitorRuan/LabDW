import Layout from "@/components/UI/organisms/Layout";
import { TextField } from "@mui/material";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  // <div>{params.slug}</div>

  // "descricao": "Bolacha",
  // "marca": "Trakinas",
  // "valor": 1.99,
  // "peso_gramas": 100,
  // "sabor": "morango"

  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default ProductEdit;
