// pages/_app.js
import "../index.css"; // Agora você pode importar o CSS global aqui

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
