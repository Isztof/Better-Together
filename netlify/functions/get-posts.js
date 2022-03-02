require("dotenv").config();
const { DATABASE_URL, SUPABASE_SERVICE_API_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

exports.handler = async (event) => {
  const { data, error } = await supabase.from("post").select("*");

  if (error) {
    return {
      statuscode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
