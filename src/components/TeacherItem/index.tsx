import React from "react";
import whatsIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/40345050?s=460&u=6d7402ca55b9a28edbcf6dc3ac9e96d5ca87823c&v=4"
          alt="Marianne"
        />
        <div>
          <strong>Marianne</strong>
          <span>Lorem</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsam nihil modi.
        <br />
        <br />
        Fugit voluptatem sit eveniet tenetur hic eaque, dolorum nisi reiciendis
        voluptates. Minima atque aliquam accusantium fugit debitis dolor!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;