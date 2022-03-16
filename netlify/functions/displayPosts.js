require("dotenv").config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const { createClient } = require("@supabase/supabase-js");
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

exports.handler = async function (event, body) {
  const { data, error } = await _supabase.from("posts").select();

  console.log(JSON.parse(data));
  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: data,
  };
};

/*
async function loadData() {
  const { data, error } = await _supabase.from("posts").select();
  console.log(data);
  /*
  if (!error) {
    //loop display data here
    data.forEach(function (item) {
      contents += `<div> ${item.title} - ${item.tag}</div>`;
    });
  }
  */
