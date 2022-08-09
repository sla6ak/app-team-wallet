import { InputWrapper, Input, Slider } from './Switch.styles';

const Switch = ({ checked, onChange }) => {
    return (
        <InputWrapper>
            <Input type="checkbox" checked={checked} onChange={onChange} />
            <Slider checkbt={checked} />
        </InputWrapper>
    );
};

export default Switch;
