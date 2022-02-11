const Filter = ({ title, value, onChange }) => {
  return (
    <label>
      {title}
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
