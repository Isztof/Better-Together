require("dotenv").config();
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
