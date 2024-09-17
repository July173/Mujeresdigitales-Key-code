export const SelectList = ({ title }) => {
  const Key = `select-${title}`
  const label =title.toUpperCase(); /**el toUpperCase lo pone todo en mayusculas */
  const option = [];
  return (
    < section className="seccion1">
      <label className="labels" htmlFor={Key}>{label}</label>
      <select className="selects" name={Key} id={Key}>
        <option value="">Seleccione un(a) {label}</option>
      </select>
    </section>
  );
};
