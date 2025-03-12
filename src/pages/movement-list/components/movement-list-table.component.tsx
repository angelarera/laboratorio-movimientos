import React from "react";
import { AccountVm, MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";
import { MovementListAccountInfo } from "./movement-list-account-info.component";

interface Props {
  accountDetails: AccountVm | null;
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { accountDetails, movementList } = props;

  return (
    <>
      {accountDetails && (
        <MovementListAccountInfo accountDetails={accountDetails} />
      )}

      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>Fecha</span>
            <span className={classes.headerCell}>Fecha valor</span>
            <span className={classes.headerCell}>Descripción</span>
            <span className={classes.headerCell}>Importe</span>
            <span className={classes.headerCell}>Saldo disponible</span>
          </div>
        </div>
        {movementList.map((movement) => (
          <MovementListItemComponent
            key={movement.id}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
