export type FetchError = {
    status: number;
    message: string;
    code: string;
}
export class Fetch {
    private url: string | undefined;

    constructor(url?: string) {
        this.url = url;
    };

    private async handleResponse(response: Response) {
        const contentType = response.headers.get('Content-Type');
        const result = contentType && contentType.includes('application/json') ? await response.json() : await response.text();
    
        if (!response.ok) {
            throw {
                status: response.status,
                message: result.error || result.message || 'An error occurred',
                code: result.code || 'UNKNOWN_ERROR',
            } as FetchError;
        }
    
        return {
            status: response.status,
            ok: response.ok,
            data: result,
        };
    };    

    async get(url: string) {
        url = url.replace(/^\//, '');
        const response = await fetch(`${this.url}/${url}`, { credentials: 'include' });
        return this.handleResponse(response);
    };

    async post(url: string, data?: unknown, headers?: object) {
        url = url.replace(/^\//, '');
        const response = await fetch(`${this.url}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        return this.handleResponse(response);
    };

    async upload(url: string, file: File, headers?: object) {
        url = url.replace(/^\//, '');
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${this.url}/${url}`, {
            method: 'POST',
            headers: {
                ...headers,
            },
            body: formData,
            credentials: 'include',
        });

        return this.handleResponse(response);
    };

    async put(url: string, data: unknown, headers?: object) {
        url = url.replace(/^\//, '');
        const response = await fetch(`${this.url}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        return this.handleResponse(response);
    };

    async delete(url: string) {
        url = url.replace(/^\//, '');
        const response = await fetch(`${this.url}/${url}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        return this.handleResponse(response);
    };
};