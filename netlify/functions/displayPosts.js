//require("dotenv").config();
//const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const SUPABASE_URL = "https://kebgtqeqyjbmfuyrzfzp.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODE3MzAyLCJleHAiOjE5NTkzOTMzMDJ9.Y2TDmG3yP93bfnczwaixjGjQO6wCAeXWU46lpS_MQEQ";
const { createClient } = require("@supabase/supabase-js");
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadData() {
  const { data, error } = await _supabase.from("posts").select();

  console.log(data);
  if (error) {
    console.log(error);
  }
}
loadData();

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
