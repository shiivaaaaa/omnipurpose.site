const supabaseClient = supabase.createClient(
"https://bhbdkarfpmvdbtdbsvmv.supabase.co",
"sb_publishable_yhjFWE2LvzK3n4omhwzFuA_N2blhp38"
);

async function protect(){

const { data } =
await supabaseClient.auth.getSession();

if(!data.session){
window.location.replace("/login.html");
}

}

document.addEventListener("DOMContentLoaded", protect);

window.addEventListener("pageshow", protect);
