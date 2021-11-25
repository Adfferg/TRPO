import React,{useContext} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";


function UserProfile() {
  const { store } = useContext(Context);

    return(
      <div>Profile of user with id:{store.id}</div>
    )
}


export default observer(UserProfile);