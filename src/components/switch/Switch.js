import {
  Container,
  Switcher,
  Label
} from './Switch.styles';

function Switch({ isChecked, onSwitch }) {
  return (
    <Container>
      <Switcher
        type="checkbox"
        id="income"
        checked={isChecked}
        onClick={onSwitch}
        readOnly
      />
      <Label htmlFor="income"></Label>
    </Container>
  );
};

export default Switch;

