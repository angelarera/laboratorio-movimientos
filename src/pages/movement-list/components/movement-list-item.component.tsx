import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVm;
}

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {formatDate(movementItem.transaction)}
      </span>
      <span className={classes.dataCell}>
        {formatDate(movementItem.realTransaction)}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          Number(movementItem.amount) < 0 ? classes.negativeAmount : ""
        }`}
      >
        {movementItem.amount} €
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance} €
      </span>
    </div>
  );
};
