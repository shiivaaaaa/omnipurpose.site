const supabase = window.supabase.createClient(
"https://bhbdkarfpmvdbtdbsvmv.supabase.co",
"sb_publishable_yhjFWE2LvzK3n4omhwzFuA_N2blhp38"
);

async function checkAuth() {

const {
data: { session }
} = await supabase.auth.getSession();

if (!session) {

window.location.href = "/login.html";

}

}

checkAuth();
