import request from "supertest";
import path from "path";
import app from "../src/app"

/**
 * Testes de rotas
 */
describe("Testando rotas http://0.0.0.0:0000/ia", () => {
    it("GET '/' - deve retornar 200", async () => {
        const res = await request(app).get("/ia")
        expect(res.status).toBe(200)
    })

    it("POST '/predict' - deve retornar 200", async () => {
        const res = await request(app).post("/ia/predict").attach("image", path.resolve(__dirname, "./imgs/numero.png"))
        expect(res.status).toBe(200)
    })
})