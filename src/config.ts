export const getVersion = () : string => {
	return "0.00.26";
}

export const getSiteLocation = () : string => {
    return process.env.SITE_URL ? 
        (process.env.SITE_URL.includes('http://localhost') ? 'local' : 'online') 
        : 'test';
}