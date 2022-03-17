require("dotenv").config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

exports.handler = async function (event, body) {
    const { data, error } = await _supabase.from("User_Accounts").select();

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
