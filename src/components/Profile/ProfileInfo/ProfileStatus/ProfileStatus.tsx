import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => {}
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const DeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={DeactivateEditMode}
                       value={status}/>
            </div>}
        </div>
    )
}
