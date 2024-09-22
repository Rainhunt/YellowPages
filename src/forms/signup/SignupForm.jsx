import Form from '../../components/Forms/Form'
import useForm from '../../hooks/useForm'
import Field from '../../components/Forms/Field'
import useSignin from '../../hooks/useSignin'
import Centered from '../../components/Centered'
import Spinner from '../../components/Spinner'
import initialSignup from './initialSignup'
import signupSchema from './signupSchema'
import CheckboxToggle from '../../components/Forms/CheckboxToggle'
import { Divider } from '@mui/material'

export default function SignupForm() {
    const { isLoading, error: loginError, handleSignup } = useSignin()
    const { data, errors: validationErrors, handleChange, handleChangeCheckbox, validateForm, onSubmit, onReset } = useForm(initialSignup, signupSchema, handleSignup);

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
                label="first"
                defaultValue={data.first ? data.first : ""}
                onChange={handleChange}
                error={validationErrors.first}
                required={true}
            />
            <Field
                label="middle"
                defaultValue={data.middle ? data.middle : ""}
                onChange={handleChange}
                error={validationErrors.middle}
            />
            <Field
                label="last"
                defaultValue={data.last ? data.last : ""}
                onChange={handleChange}
                error={validationErrors.last}
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
                type="password"
                label="password"
                defaultValue={data.password ? data.password : ""}
                onChange={handleChange}
                error={validationErrors.password}
                required={true}
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
            <Divider sx={{ color: "0f0000", my: 4, height: "5px" }} />
            <CheckboxToggle
                label="Signup as Business?"
                name="isBusiness"
                value={data.isBusiness ? data.isBusiness : false}
                onChange={handleChangeCheckbox}
            />
        </Form>
    )
}
