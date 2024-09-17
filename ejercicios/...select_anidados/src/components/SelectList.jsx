export const SelectList = ({ title }) => {
  const Key = `select-${title}`
  const label =title.toUpperCase(); /**el toUpperCase lo pone todo en mayusculas */
  const options = [];
  return (
    <>
      <label htmlFor={Key}>{label}</label>
      <select name={Key} id={Key}>
        <option value="">Seleccione un {label}</option>
      </select>
    </>
  );
};
