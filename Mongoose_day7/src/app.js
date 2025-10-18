import express from 'express';
import userRoutes from "./routers/user.router.js";
import ProductRouter from './routers/product.router.js'

const app=express();
app.use(express.json());

// Routes
app.use("/user",userRoutes);
app.use("/product",ProductRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error("--->",err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

export default app;
