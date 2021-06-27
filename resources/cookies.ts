import ms from 'ms';

export const setCookie = (nameCookies: string, valueCookie: string, expireDate: string) => {
    const time = ms(expireDate) / 1000;
    document.cookie = `${nameCookies}=${valueCookie}; max-age=${time}; path=/; Secure;`;
    return true;
}

export const captureCookie = (nameCookie: string | undefined) => {
    if(nameCookie) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${nameCookie}=`);
        if (parts && parts.length === 2) return parts?.pop()?.split(';').shift();
    }
}