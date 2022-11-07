import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      <Head>
        <title>Provest</title>
        <meta name="description" content="Provest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-3xl font-bold underline">Provest</h1>
      </header>
      <main>
        {session ? (
          <div>
            <button
              onClick={() => {
                supabase.auth.signOut();
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        )}
      </main>
    </div>
  );
};

export default Home;
