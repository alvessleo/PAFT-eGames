export interface Usuario {
    id?: number;
    nome: string;
    username: string;
    biografia?: string;
    dataNasc: Date;
    senha: string;
    confirmSenha?: string;
    jogoFavorito?: string;
    conquista?: number;
}