import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {

    }

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
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
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
