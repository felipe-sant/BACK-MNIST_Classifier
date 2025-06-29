import axios from "axios";
import FormData from 'form-data'

export class IAService {
    private readonly baseUrl: string = "http://localhost:8000/"; // Ajustar conforme necessário

    async predict(form: FormData): Promise<{ predict: number }> {
        const response = await axios.post<{ predict: number }>(this.baseUrl + "predict", form, {
            headers: form.getHeaders()
        })
        return response.data
    }

    async testConnection(): Promise<string> {
        const response = await axios.get<string>(this.baseUrl)
        return response.data
    }
}