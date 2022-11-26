import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const LoginForm = () => {
  const supabase = useSupabaseClient();
  return (
    <div className="mx-4 md:max-w-2xl md:mx-auto">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        theme="dark"
      />
    </div>
  );
};
