
import express from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// custom middlewares
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
})

// routes import
import authRoutes  from './routes/authUser.routes.js';
import opportunityRoutes from './routes/opportunity.routes.js';
import healthRoutes from './routes/health.routes.js';

// routes usage
app.use("/api/auth", authRoutes );
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/health-programs", healthRoutes);

// exporting
export { app };
