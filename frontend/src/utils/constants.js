export const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? "https://your-backend-url.vercel.app"
    : "http://localhost:4000";