import Form from '../../components/Forms/Form'
import useForm from '../../hooks/useForm'
import Field from '../../components/Forms/Field'
import Centered from '../../components/Centered'
import Spinner from '../../components/Spinner'
import useCards from '../../hooks/useCards'
import initialCard from './initialCard'
import cardSchema from './cardSchema'
import { useEffect } from 'react'
import { getToken } from '../../services/jwtLocal'

export default function NewCardForm() {
    const { isLoading, error: networkError, handleCreateCard } = useCards()
    const { data, errors: validationErrors, setToken, handleChange, validateForm, onSubmit, onReset } = useForm(initialCard, cardSchema, handleCreateCard);

    useEffect(() => {
        setToken(getToken());
    }, []);

    if (isLoading) return (
        <Centered sx={{ flexGrow: 1 }}>
            <Spinner />
        </Centered>
    );

    return (
        <Form
            validateForm={validateForm}
            onSubmit={onSubmit}
            onReset={onReset}
        >
            <Field
                label="title"
                defaultValue={data.title ? data.title : ""}
                onChange={handleChange}
                error={validationErrors.title}
                required={true}
            />
            <Field
                label="subtitle"
                defaultValue={data.subtitle ? data.subtitle : ""}
                onChange={handleChange}
                error={validationErrors.subtitle}
                required={true}
            />
            <Field
                label="description"
                defaultValue={data.description ? data.description : ""}
                onChange={handleChange}
                error={validationErrors.description}
                required={true}
            />
            <Field
                type="tel"
                label="phone"
                defaultValue={data.phone ? data.phone : ""}
                onChange={handleChange}
                error={validationErrors.phone}
                required={true}
            />
            <Field
                type="email"
                label="email"
                defaultValue={data.email ? data.email : ""}
                onChange={handleChange}
                error={validationErrors.email}
                required={true}
            />
            <Field
                type="url"
                label="web"
                defaultValue={data.web ? data.web : ""}
                onChange={handleChange}
                error={validationErrors.web}
            />
            <Field
                type="url"
                label="url"
                defaultValue={data.url ? data.url : ""}
                onChange={handleChange}
                error={validationErrors.url}
                required={true}
            />
            <Field
                label="alt"
                defaultValue={data.alt ? data.alt : ""}
                onChange={handleChange}
                error={validationErrors.alt}
            />
            <Field
                label="state"
                defaultValue={data.state ? data.state : ""}
                onChange={handleChange}
                error={validationErrors.state}
            />
            <Field
                label="country"
                defaultValue={data.country ? data.country : ""}
                onChange={handleChange}
                error={validationErrors.country}
                required={true}
            />
            <Field
                label="city"
                defaultValue={data.city ? data.city : ""}
                onChange={handleChange}
                error={validationErrors.city}
                required={true}
            />
            <Field
                label="street"
                defaultValue={data.street ? data.street : ""}
                onChange={handleChange}
                error={validationErrors.street}
                required={true}
            />
            <Field
                type="number"
                label="houseNumber"
                defaultValue={data.houseNumber ? data.houseNumber : ""}
                onChange={handleChange}
                error={validationErrors.houseNumber}
                required={true}
            />
            <Field
                type="number"
                label="zip"
                defaultValue={data.zip ? data.zip : ""}
                onChange={handleChange}
                error={validationErrors.zip}
            />
        </Form>
    )
}
