import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export default function MenuPopupState() {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <FiPlus />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {userLocal && userLocal.type === "Admin" ? (
              <Link to="/form-projeto">
                <MenuItem onClick={popupState.close}>Projeto</MenuItem>
              </Link>
            ) : (
              <></>
            )}
            <Link to="/form-solicitacao">
              <MenuItem onClick={popupState.close}>Solicitação</MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
