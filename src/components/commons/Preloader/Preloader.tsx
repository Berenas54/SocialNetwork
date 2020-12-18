import React from "react";
import loader from "../../../assets/image/loader.svg";

export let Preloader = () => {
    return <div>
        <img alt={"Loading..."} src={loader}/>
    </div>
}
