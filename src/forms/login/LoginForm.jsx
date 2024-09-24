import Form from '../../components/Forms/Form'
import useForm from '../../hooks/useForm'
import Field from '../../components/Forms/Field'
import initialLogin from './initialLogin'
import loginSchema from './loginSchema'
import useSignin from '../../hooks/useSignin'
import Centered from '../../components/Centered'
import Spinner from '../../components/Spinner'
import { Grid } from '@mui/material'
import FormButton from '../../components/Forms/FormButton'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/routerModel'

export default function LoginForm() {
    const { isLoading, error: loginError, handleLogin } = useSignin()
    const { data, errors: validationErrors, handleChange, validateForm, onSubmit, onReset } = useForm(initialLogin, loginSchema, handleLogin);

    const navigate = useNavigate();

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
            <Grid item xs={12} sm={6}>
                <FormButton onClick={() => navigate(ROUTES.SIGNUP)}> Signup </FormButton>
            </Grid>
        </Form>
    )
}
