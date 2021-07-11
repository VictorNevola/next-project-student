export interface StyleDropZone {
    isDragAccept: boolean,
    isDragReject: boolean,
    isDragActive: boolean
}

export interface productsImportXlSX{
    "Categorias Relacionadas": string,
    "ID": string
    "Nome": string
    "Possui variação": string
    "Preços": string
    "Url Imagem": string
    "Variações": string
}

export interface IFile {
    id: string;
    name: string;
    readableSize: string;
    uploaded?: boolean;
    preview: string;
    file: File | null;
    progress?: number;
    error?: boolean;
    url: string;
}