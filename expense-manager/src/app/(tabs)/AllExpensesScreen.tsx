import { router } from "expo-router";
import { useAtomValue } from "jotai";
import { StyleSheet, View } from "react-native";

import ExpenseCard from "@/components/shared/ExpenseCard";
import ExpenseSummary from "@/components/shared/ExpenseSummary";
import ScreenShell from "@/components/ui/ScreenShell";
import { expensesAtom } from "@/state/expenses.atom";

const AllExpensesScreen = () => {
  const expenses = useAtomValue(expensesAtom);

  return (
    <ScreenShell
      title="All Expenses"
      onActionPress={() => router.navigate("/ManageExpenseModal")}
    >
      <View style={styles.root}>
        <ExpenseSummary
          title="Past 7 days"
          amount={expenses.reduce(
            (totalSum, expense) => totalSum + expense.amount,
            0,
          )}
        />
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            onPress={() =>
              router.navigate({
                pathname: "/ManageExpenseModal",
                params: { expenseId: expense.id },
              })
            }
          />
        ))}
      </View>
    </ScreenShell>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
  },
});

export default AllExpensesScreen;
