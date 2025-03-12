import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getAccountDetails, getMovementList } from "./api";
import {
  mapAccountFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const [accountDetails, setAccountDetails] = React.useState<AccountVm>({
    iban: "",
    name: "",
    balance: "",
  });
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  React.useEffect(() => {
    if (id) {
      getAccountDetails(id).then((account) =>
        setAccountDetails(mapAccountFromApiToVm(account))
      );

      getMovementList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y últimos movimientos</h1>
          <div className={classes.headerBalance}>
            <h2>Saldo disponible</h2>
            <p>1490€</p>
          </div>
        </div>
        <MovementListTableComponent
          movementList={movementList}
          accountDetails={accountDetails}
        />
      </div>
    </AppLayout>
  );
};
