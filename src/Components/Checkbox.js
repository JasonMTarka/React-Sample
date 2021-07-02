const Checkbox = ({ label, isSelected, onCheckboxChange }) => {
  const checkboxPressed = (boxName) => {
    onCheckboxChange(boxName);
  };

  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={() => checkboxPressed(label)}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
