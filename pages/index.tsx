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
      <header className="m-2">
        <h1 className="text-3xl font-bold">Provest</h1>
      </header>
      <main className="max-w-3xl mx-auto">
        {session ? (
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                supabase.auth.signOut();
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        )}
      </main>
    </div>
  );
};

export default Home;
