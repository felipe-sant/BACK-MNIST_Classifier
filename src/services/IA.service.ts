import axios from "axios";
import FormData from 'form-data'

export class IAService {
    private readonly baseUrl: string = "https://ai-mnistclassifier.up.railway.app/";

    /**
     * Conexão com a IA, analisa uma imagem e retorna o possivel número desenhado nela.
     * @param form Imagem a ser analizada.
     * @returns O número mais provavel a ser da imagem.
     */
    async predict(form: FormData): Promise<{ predict: number }> {
        const response = await axios.post<{ predict: number }>(this.baseUrl + "predict", form, {
            headers: form.getHeaders()
        })
        return response.data
    }

    /**
     * @returns Teste de conexão com a IA
     */
    async testConnection(): Promise<{ message: string }> {
        const response = await axios.get<{ message: string}>(this.baseUrl)
        return response.data
    }
}