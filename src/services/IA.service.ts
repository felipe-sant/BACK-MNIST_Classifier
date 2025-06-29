import axios from "axios";

export class IAService {
    private readonly baseUrl: string = "http://localhost:8000/"; // Ajustar conforme necessário

    async testConnection(): Promise<string> {
        const response = await axios.get<string>(this.baseUrl)
        return response.data
    }
}