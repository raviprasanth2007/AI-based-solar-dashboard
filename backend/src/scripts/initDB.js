"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function initDB() {
    const connectionString = 'postgresql://postgres:AI%20based%20solar%20dashboard@db.xyhsrewyedkwxpvenpta.supabase.co:5432/postgres';
    const client = new pg_1.Client({
        connectionString,
    });
    try {
        await client.connect();
        console.log('Connected to Supabase PostgreSQL!');
        const schemaPath = path_1.default.resolve(__dirname, '../../../database/schema.sql');
        const schemaSql = fs_1.default.readFileSync(schemaPath, 'utf8');
        console.log('Executing schema...');
        await client.query(schemaSql);
        console.log('Schema executed successfully!');
    }
    catch (err) {
        console.error('Database connection or execution failed:', err);
    }
    finally {
        await client.end();
    }
}
initDB();
//# sourceMappingURL=initDB.js.map