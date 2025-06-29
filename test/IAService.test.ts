import { IAService } from '../src/services/IA.service'

describe('IAService', () => {
    const iaService = new IAService()

    it('Testando conexão com a IA', async () => {
        const result = await iaService.testConnection();
        expect(result).toBe('IAService is working!');
    });
});