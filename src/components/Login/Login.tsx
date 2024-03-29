import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../commons/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxRootStateType} from "../../redux/redux-store";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

//fix login error
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (<div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                                handleSubmit,
                                                                                                                captchaUrl
                                                                                                            }) => {
    return (
        <form onSubmit={handleSubmit}>
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
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && <Field name={"captcha"} placeholder={"Captcha"} component={Input} validate={[required]}/>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({
    form: 'Login'
})(LoginForm)

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)