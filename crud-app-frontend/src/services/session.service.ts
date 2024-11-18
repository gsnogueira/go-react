import { Product } from "../models/Product.interface";

class SessionService {
    private static instance: SessionService;

    private constructor() {}

    public static getInstance(): SessionService {
        if (!SessionService.instance) {
            SessionService.instance = new SessionService();
        }
        return SessionService.instance;
    }

    public setSession(session: object): void {
        localStorage.setItem('authSession', JSON.stringify(session));
    }

    public getSession(sessionKey: string): Product[] {
        const session = localStorage.getItem(sessionKey);
        return session ? JSON.parse(session) as Product[] : [];
    }

    public clearSession(sessionKey: string): void {
        localStorage.removeItem(sessionKey);
    }

    public isAuthenticated(): boolean {
        return this.getSession('authSession') !== null;
    }
}

export const sessionService = SessionService.getInstance();
export const setSession = sessionService.setSession.bind(sessionService);
export const getSession = sessionService.getSession.bind(sessionService);
export const clearSession = sessionService.clearSession.bind(sessionService);
export const isAuthenticated = sessionService.isAuthenticated.bind(sessionService);