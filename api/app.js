import express from 'express';
import postRoutes from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

const app = express();

app.use(express.json());


app.listen(8800, () => {
    console.log("Server is running successfully");
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoute);   