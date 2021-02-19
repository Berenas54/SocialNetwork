import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Input} from "../commons/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {AuthType, login} from "../../redux/auth-reducer";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

//fix
const Login:React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth)
        return (<div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'Login'
})(LoginForm)

const mapStateToProps = (state: AuthType):MapStatePropsType => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps, {login})(Login)