import { Container, Switcher, Label } from './Switch.styles';

function Switch({ isChecked, onSwitch }) {
    return (
        <Container>
            <Label htmlFor="income">
                <Switcher type="checkbox" id="income" checked={isChecked} onClick={onSwitch} readOnly />
            </Label>
        </Container>
    );
}

export default Switch;
