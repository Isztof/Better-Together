require("dotenv").config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

exports.handler = async function (event, body) {
    const user = JSON.parse(event.body);
    const { data, error } = await _supabase.from("User_Accounts").select('display_name,password')
        .eq('display_name', user.display_name);

    let display_name = document.querySelector("#exampleInputEmail1");


    console.log(data)

    if (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
    if (user.display_name !== display_name,
        password !== data.password) {
        return {
            statuscode: 401,
            body: JSON.stringify({ message: 'User not authorized' }),
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
