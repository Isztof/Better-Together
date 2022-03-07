// Grab our credentials from a .env file or environment variables
require("dotenv").config();
const { DATABASE_URL, SUPABASE_SERVICE_API_KEY } = process.env;

// Connect to our database
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
// Insert a row
exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { data, error } = await supabase.from("profile").insert(body);

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
