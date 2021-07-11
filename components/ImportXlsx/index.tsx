import { SectionDropZone, DropZone, ListFiles, LIFile, BtnRegister } from './style';
import { useCallback, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDropzone } from 'react-dropzone';
import XLSX from 'xlsx';

import { productsImportXlSX } from './types';


export default function ImportXlsx() {

    const [productsImported, setProducts] = useState<productsImportXlSX[]>([]);
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,
        isDragActive
    } = useDropzone({
        accept: '.xlsx',
        maxFiles:1,
    });

    const register = useCallback( async () => {
        console.log("productsImported", productsImported)

    }, [productsImported]);

    useEffect(() => {
        if(acceptedFiles && acceptedFiles[0]) {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(acceptedFiles[0]);
            fileReader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, {type: "binary"});
                const xlsxToJsonTransformed: productsImportXlSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                setProducts(xlsxToJsonTransformed);
            }
        }
    } , [acceptedFiles]);

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
                            {file.name} - {productsImported.length} produtos encontrados 
                        </LIFile>
                    ))
                }
            </ListFiles>

            <BtnRegister onClick={register}> 
                    Cadastrar
                </BtnRegister>
            
            {/* {
                productsImported.length > 0 && progress < 100 &&
                <BtnRegister onClick={register}> 
                    Cadastrar
                </BtnRegister>

            } */}
            

        </SectionDropZone>
    );
}