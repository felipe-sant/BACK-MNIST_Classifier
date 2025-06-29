import express from 'express';
import cors from 'cors';
import iaRoutes from "./routes/IA.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/ia', iaRoutes)

export default app