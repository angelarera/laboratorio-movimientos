import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";

const urlAccounts = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getAccountDetails = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccounts}/${accountId}`).then(
    (response) => response.data
  );

export const getMovementList = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
