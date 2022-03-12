// Grab our credentials from a .env file or environment variables
require("dotenv").config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// Connect to our database

// Insert a row
exports.handler = async (event) => {
  const body = event.body;
  const { data, error } = await supabase.from("profile").insert(body);
  // Did it work?
  console.log(data, error);

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
