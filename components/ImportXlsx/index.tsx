import { SectionDropZone, DropZone, ListFiles, LIFile, BtnRegister } from './style';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from "next/link";
import XLSX from 'xlsx';

import { productsImportXlSX } from './types';

import api from '@/services/api';


export default function ImportXlsx() {

    const [productsImported, setProducts] = useState<productsImportXlSX[]>([]);
    const [importSuccess, setImportSuccess] = useState(false);

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,
        isDragActive
    } = useDropzone({
        accept: '.xlsx',
        maxFiles: 1,
    });

    const register = useCallback(async () => {
        const products = await api.post('/products/register', {products: productsImported});

        products && setImportSuccess(true);

    }, [productsImported]);

    useEffect(() => {
        if (acceptedFiles && acceptedFiles[0]) {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(acceptedFiles[0]);
            fileReader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, { type: "binary" });
                const xlsxToJsonTransformed: productsImportXlSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                setProducts(xlsxToJsonTransformed);
                setImportSuccess(false)
            }
        }
    }, [acceptedFiles]);

    return (
        <SectionDropZone className="container">
            <DropZone {...getRootProps()} isDragAccept={isDragAccept} isDragActive={isDragActive} isDragReject={isDragReject}>
                <input {...getInputProps()} />
                <p>Solte seu arquivo aqui, ou clique para selecionar.</p>
                <em>Somente arquivos com extensão .xlsx serão aceitos </em>
            </DropZone>

            <ListFiles>
                {
                    acceptedFiles.map((file, index) => (
                        <LIFile key={index}>
                            <span>
                                Arquivo Importado: <strong> {file.name} </strong>
                            </span>
                            <span>
                                Produtos: <strong> {productsImported.length} encontrados</strong>
                            </span>

                            { 
                                importSuccess && 
                                <Link href="/products">
                                    <a> Visualizar produtos incluidos </a> 
                                </Link>
                            }
                            
                        </LIFile>
                    ))
                }
            </ListFiles>

            {
                productsImported.length > 0 && !importSuccess &&
                <BtnRegister onClick={register}> 
                    Cadastrar
                </BtnRegister>
            }


        </SectionDropZone>
    );
}