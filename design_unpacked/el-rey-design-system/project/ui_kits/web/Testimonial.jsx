/* global React */
function Testimonial() {
  return (
    <section className="er-testimonial">
      <div className="er-container">
        <img src="../../assets/pieces/caballo-crema.svg" alt="" className="er-testimonial__piece" />
        <p className="er-testimonial__quote">
          "Lucas llegó tímido. Hoy explica sus jugadas a sus compañeros y a su
          abuelo. El cambio no es de ajedrez: es de fondo."
        </p>
        <div className="er-testimonial__attr">
          <b>María C.</b> &nbsp;·&nbsp; madre de Lucas, 8 años
        </div>
      </div>
    </section>
  );
}

window.Testimonial = Testimonial;
