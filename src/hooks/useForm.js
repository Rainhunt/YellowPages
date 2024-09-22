import Joi from "joi";
import { useCallback, useState } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [token, setToken] = useState();
    const [errors, setErrors] = useState({});

    const validateField = useCallback((name, value) => {
        const joiSchema = Joi.object({ [name]: schema[name] });
        const { error } = joiSchema.validate({ [name]: value });
        return error ? error.details[0].message : null;
    }, []);

    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;

        const errorMessage = validateField(name, value);
        if (errorMessage) {
            setErrors((prev) => ({ ...prev, [name]: errorMessage }));
        } else {
            setErrors((prev) => {
                let errors = { ...prev };
                delete errors[name];
                return errors;
            });
        }

        setData((prev) => ({ ...prev, [name]: value }));
    }, [validateField]);

    const handleChangeCheckbox = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.checked;
        setData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        return error ? false : true;
    }, [schema, data]);

    const onReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    }, [initialForm]);

    const onSubmit = useCallback(() => {
        handleSubmit(data, token);
    }, [data, token]);

    return { data, errors, setToken, handleChange, handleChangeCheckbox, validateForm, onSubmit, onReset }
}