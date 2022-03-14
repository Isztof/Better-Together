// Grab our credentials from a .env file or environment variables
require("dotenv").config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;

// Connect to our database
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Our standard serverless handler function
exports.handler = async (event) => {
  // Insert a row
  const { data, error } = await supabase
    .from('posts')
    .insert([
      {title: 'Hello', id:'3'},
      {content: 'This is a test', id:'3'},
      {user_id: 'DZ'},
      ])

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
