import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.NEXT_PUBLIC_JWT_SECRET);


export default async function encrypts(text: string) {
    return cryptr.encrypt(text);
}