const supabase = window.supabase.createClient(
  "https://bhbdkarfpmvdbtdbsvmv.supabase.co",
  "sb_publishable_yhjFWE2LvzK3n4omhwzFuA_N2blhp38"
);

async function checkAuth() {

  const { data, error } = await supabase.auth.getUser();

  if (!data.user) {
    window.location.href = "/login.html";
  }

}

checkAuth();
