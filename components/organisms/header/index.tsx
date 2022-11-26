import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "../../atoms/button";

export const Header = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <header className="bg-zinc-800 px-4 py-2 flex flex-row">
      <h1 className="text-3xl font-bold">Provest</h1>
      <div className="flex-1" />
      {!!session && (
        <Button
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          Sign out
        </Button>
      )}
    </header>
  );
};
