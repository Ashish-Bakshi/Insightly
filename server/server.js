import express from 'express';
import prisma from './utils/prisma.js';

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test DB connection
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL database');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1); // Stop app if DB is unreachable
  }
}

export { startServer , app };

