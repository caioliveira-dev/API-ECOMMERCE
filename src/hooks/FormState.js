import { useState } from 'react'

export const FormState = (initialState = {}) => {
    const [inputValues, setInputValues] = useState({initialState});

    const Default = () => {
        setInputValues({});
    }

    const onChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    }

    const setForm = (newValues) => {
        setInputValues(newValues);
    }

    return {
        inputValues,
        onChange,
        Default,
        setForm,
    }
}
