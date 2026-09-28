import { Expense } from "@/types/expenses.types";

const expenseNames = ["Book", "Food", "Transport", "Coffee", "Groceries"];
const MAX_DATE_AGE = 30 * 24 * 60 * 60 * 1000;

const generateMockExpenses = (count: number): Expense[] => {
  const expenseCount = Math.max(0, Math.floor(count));

  return Array.from({ length: expenseCount }, (_, index) => ({
    id: String(index + 1),
    name: expenseNames[index % expenseNames.length],
    amount: Number((Math.random() * 200 + 5).toFixed(2)),
    date: new Date(Date.now() - Math.random() * MAX_DATE_AGE).toISOString(),
  }));
};

export const mockExpenses = generateMockExpenses(20);
