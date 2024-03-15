type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
