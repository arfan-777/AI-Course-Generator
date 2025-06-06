/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://sara-db_owner:myVU0MYnNiW6@ep-red-base-a5a4xuie.us-east-2.aws.neon.tech/sara-db?sslmode=require',
    
  }
};