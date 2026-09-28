import { Expense } from "@/types/expenses.types";

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const getExpensesFromPastDays = (expenses: Expense[], days: number) => {
  if (!Number.isFinite(days) || days < 0) {
    return [];
  }

  const now = Date.now();
  const cutoff = now - days * DAY_IN_MILLISECONDS;

  return expenses.filter(({ date }) => {
    const timestamp = Date.parse(date);
    return (
      Number.isFinite(timestamp) && timestamp >= cutoff && timestamp <= now
    );
  });
};
