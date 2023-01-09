import "./header-styles.css";

export default function Header() {
  return (
    <>
      <header>
        <img
          src="https://www.oniz.com.br/Assets/img/logo-n.png"
          width="100px"
        />
        <nav>
          <a href="#">Vendedor</a>
          <a href="#">Produtos</a>
          <a href="#">Promoções</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      <div className="fashion"></div>
    </>
  );
}
