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
    .from("posts")
    .insert([
      {
        id: "2",
        title: "Hello",
        content: "This is a test",
        modified_at: "",
        user_id: "DZ",
      },
    ]);
  
   const offset = 1000 * 60 * 60 * 6; //6h days
        const myDate = new Date();
        myDate.setTime(myDate.getTime() - offset);

        const time_string = myDate.toISOString().toLocaleString("de-DE");

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
