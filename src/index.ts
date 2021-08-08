import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc";
import { isAuthenticated } from "./middleware/auth.middleware";
import * as dotenv from "dotenv";

import { userRouter } from "./routers/user.router";

dotenv.config()
const { DB_HOST, DB_PORT, DB_NAME, API_URL, SWAGGER_VERSION } = process.env;
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: `${SWAGGER_VERSION}`,
            title: "User hobbies API",
            description: "User hobbies API Information",
            contact: {
                name: "Arrive Developer"
            },
            servers: [`${API_URL}:${PORT}`]
        }
    },
    apis: ["src/index.ts", "src/routers/*.ts"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// routers
app.use('/api/users', isAuthenticated, userRouter);

app.get('/', (req, res) => {
    res.send('API service is running');
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
        console.log("The database is Connected.");
    });
})