const supabaseClient = supabase.createClient(
"https://bhbdkarfpmvdbtdbsvmv.supabase.co",
"sb_publishable_yhjFWE2LvzK3n4omhwzFuA_N2blhp38"
);

async function protect(){

const { data:{ session } } = await supabaseClient.auth.getSession();

if(!session){
window.location.href="/login.html";
}

}

protect();
