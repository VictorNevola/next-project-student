import { InfoSmall, LinkExemple, InfoDetails, InfosHeader, Btn } from "@/styles/pages/products/import/styles";
import Link from "next/link";

import Layout from "@/components/Layout";
import ImportXlsx from "@/components/ImportXlsx"

export default function ImportProducts() {

    return (
      <Layout titlePage="Importar Produtos">
        <>
          <InfosHeader>
            <div>
              <InfoSmall>
                Siga o modelo da planilha abaixo para fazer a importação dos seus produtos corretamente.
              </InfoSmall>
              <LinkExemple href='/examples/Exemplo-importação-produtos-Imeals.xlsx' download>
                Clique aqui para baixar
              </LinkExemple>
            </div>
              <Btn>
                <Link href="/products">
                    <a>
                        Ver Produtos
                    </a>
                </Link>
              </Btn>
          </InfosHeader>
  
          <InfoDetails>
            Produtos já cadastrados não serão removidos ou sobrescritos.
          </InfoDetails>

          <ImportXlsx /> 
        </>
      </Layout>
    )
  
  }