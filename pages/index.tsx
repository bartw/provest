import { useSession } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { Header } from "../components/organisms/header";
import { LoginForm } from "../components/organisms/login-form";
import { Practices } from "../components/organisms/practices";

const Home = () => {
  const session = useSession();

  return (
    <div>
      <Head>
        <title>Provest</title>
        <meta name="description" content="Provest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{session ? <Practices /> : <LoginForm />}</main>
    </div>
  );
};

export default Home;
