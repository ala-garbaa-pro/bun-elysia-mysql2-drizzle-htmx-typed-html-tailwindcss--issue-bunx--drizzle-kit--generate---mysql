import mysql from 'mysql2/promise';


async function checkConnection() {
    try {
        const connection = await mysql.createConnection(process.env.DATABASE_URL!);
        await connection.connect();
        console.log('Connected to the database successfully!');
        await connection.end(); // Close the connection after successful testing
    } catch (err: any) {
        console.error('Error connecting to the database:', err.message);
    }
}

checkConnection();