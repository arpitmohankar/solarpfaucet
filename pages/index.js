import Head from 'next/head';
import AirdropForm from '../components/AirdropForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana Airdrop</title>
        <meta name="description" content="Solana Airdrop Website by ArpitM" />
        <link rel="icon" href="https://img.icons8.com/?size=100&id=NgbFFSOCkrnB&format=png&color=000000" />
      </Head>
      <Header />
      <main>
        <AirdropForm />
      </main>
      <Footer />
    </div>
  );
}
