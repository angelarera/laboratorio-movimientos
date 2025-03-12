import React from "react";
import { AccountVm } from "../movement-list.vm";
import classes from "./movement-list-account-info.component.module.css";

interface Props {
  accountDetails: AccountVm;
}

export const MovementListAccountInfo: React.FC<Props> = (props) => {
  const { accountDetails } = props;

  return (
    <div className={classes.accountDetails}>
      <h3>Alias: {accountDetails.name}</h3>
      <h3>Iban: {accountDetails.iban}</h3>
    </div>
  );
};
