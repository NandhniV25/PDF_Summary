const { db } = require('@vercel/postgres');

async function seedPdf(client){
  try{
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    create table if not exists case_docs(
      id uuid default uuid_generate_v4() primary key,
      file_name varchar(225) not null, 
      file_content BYTEA not null
    )`
  }
  catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedPdf(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
