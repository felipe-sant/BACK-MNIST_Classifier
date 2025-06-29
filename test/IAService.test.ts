import { IAService } from '../src/services/IA.service'
import FormData from 'form-data'
import fs from 'fs'

/**
 * Testes de funções
 */
describe('IAService', () => {
    const iaService = new IAService()

    it('Testando conexão com a IA', async () => {
        const result = await iaService.testConnection();
        expect(result).toBe('IAService is working!');
    });

    it("Testando predict da imagem", async () => {
        const form = new FormData()
        form.append('file', fs.createReadStream('./test/imgs/numero.png'))
        const result = await iaService.predict(form)
        expect(result.predict).toBe(7)
    })
});