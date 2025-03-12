import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";
import { AccountListItemComponent } from "./account-list-item.component";

interface Props {
  accountList: AccountVm[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>Iban</span>
          <span className={classes.headerCell}>Alias</span>
          <span className={classes.headerCell}>Saldo disponible</span>
          <span className={classes.headerCell}>Última operación</span>
          <span className={classes.headerCell}>Operación</span>
        </div>
      </div>
      {accountList.map((account) => (
        <AccountListItemComponent key={account.id} accountItem={account} />
      ))}
    </div>
  );
};
