import { atom } from "jotai";

import { mockExpenses } from "../../mocks/expenses.mock";
import { Expense } from "@/types/expenses.types";

export const expensesAtom = atom<Expense[]>(mockExpenses);
