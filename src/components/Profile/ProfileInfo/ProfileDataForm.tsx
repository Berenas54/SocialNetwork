import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../commons/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {UserProfileType} from "../../../redux/profilePage-reducer";

type PropsType = {
    profile: UserProfileType,

}


const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = ({
                                                                                                  handleSubmit,
                                                                                                  profile,
                                                                                                  error
                                                                                              }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div>
            {error}
        </div>}
        <div>
            <Field component={Input} name={"fullName"} placeholder={"Full name"} validate={[required]}/>
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {

            return <div key={key}>
                <b>{key}:<Field component={Input} name={"contacts." + key} placeholder={key}/></b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm<UserProfileType, PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormRedux