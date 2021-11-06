export interface SitemapperResponse {
    url: string;
    sites: string[];
}

export interface SitemapperOptions {
    method?: string;
    resolveWithFullResponse?: boolean;
    gzip?: boolean;
    responseType?: string;
    headers?: Headers;
    url?: string;
    timeout?: number;
    requestHeaders?: Object;
    debug?: boolean;
}

declare class Sitemapper {

    timeout: number;

    constructor(options: SitemapperOptions)

    /**
     * Gets the sites from a sitemap.xml with a given URL
     *
     * @param url URL to the sitemap.xml file
     */
    fetch(url?: string): Promise<SitemapperResponse>;
}

export default Sitemapper;
