import { Client } from 'pg';
import fs from 'fs';
import path from 'path';

async function initDB() {
  const connectionString = 'postgresql://postgres:AI%20based%20solar%20dashboard@db.xyhsrewyedkwxpvenpta.supabase.co:5432/postgres';
  
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL!');

    const schemaPath = path.resolve(__dirname, '../../../database/schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    console.log('Executing schema...');
    await client.query(schemaSql);
    console.log('Schema executed successfully!');
    
  } catch (err) {
    console.error('Database connection or execution failed:', err);
  } finally {
    await client.end();
  }
}

initDB();
