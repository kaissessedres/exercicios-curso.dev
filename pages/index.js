import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <h1>💖 Eu te amo Mariana 💖</h1>
      <div className="gif">
        <img
          src="https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif"
          alt="Coração brilhando"
          width="200"
        />
      </div>
      <a
        href="https://pt.clubpenguin.com/"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique aqui para um segredo ✨
      </a>
    </div>
  );
};

export default Home; // Aqui exportamos o componente
