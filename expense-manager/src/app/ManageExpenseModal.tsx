import { useLocalSearchParams, useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "@/constants/theme";
import { expensesAtom } from "@/state/expenses.atom";
import { Expense } from "@/types/expenses.types";

const ManageExpenseModal = () => {
  const router = useRouter();
  const [expenses, setExpenses] = useAtom(expensesAtom);

  const { expenseId } = useLocalSearchParams<{
    expenseId?: string | string[];
  }>();

  const expense = expenses.find((item) => item.id === expenseId);
  const [name, setName] = useState(expense?.name ?? "");
  const [amount, setAmount] = useState(expense ? String(expense.amount) : "");
  const [error, setError] = useState("");
  const scheme = useColorScheme();
  const colors = Colors[scheme === "dark" ? "dark" : "light"];

  useEffect(() => {
    setName(expense?.name ?? "");
    setAmount(expense ? String(expense.amount) : "");
    setError("");
  }, [expense?.id, expense?.name, expense?.amount]);

  const handleSave = () => {
    const trimmedName = name.trim();
    const parsedAmount = Number(amount.replace(",", "."));

    if (!trimmedName || !Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError("Enter a name and a valid amount.");
      return;
    }

    const updatedExpense: Expense = {
      id: expense?.id ?? String(Date.now()),
      name: trimmedName,
      amount: parsedAmount,
      date: expense?.date ?? new Date().toISOString(),
    };

    setExpenses((currentExpenses) =>
      expense
        ? currentExpenses.map((item) =>
            item.id === expense.id ? updatedExpense : item,
          )
        : [updatedExpense, ...currentExpenses],
    );
    router.back();
  };

  const handleDelete = () => {
    if (!expense) {
      return;
    }

    Alert.alert(
      "Delete expense?",
      `Delete ${expense.name}? This can't be undone.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setExpenses((currentExpenses) =>
              currentExpenses.filter((item) => item.id !== expense.id),
            );
            router.back();
          },
        },
      ],
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {expense ? "Edit expense" : "Add expense"}
        </Text>
        <Pressable accessibilityRole="button" onPress={() => router.back()}>
          <Text style={[styles.close, { color: colors.textSecondary }]}>
            Close
          </Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Name</Text>
          <TextInput
            accessibilityLabel="Expense name"
            onChangeText={setName}
            placeholder="e.g. Groceries"
            placeholderTextColor={colors.textSecondary}
            style={[
              styles.input,
              { backgroundColor: colors.backgroundElement, color: colors.text },
            ]}
            value={name}
            multiline
          />
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Amount</Text>
          <TextInput
            accessibilityLabel="Expense amount"
            keyboardType="decimal-pad"
            onChangeText={setAmount}
            placeholder="$0.00"
            placeholderTextColor={colors.textSecondary}
            style={[
              styles.input,
              { backgroundColor: colors.backgroundElement, color: colors.text },
            ]}
            value={amount}
          />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {expense ? (
          <Pressable
            accessibilityRole="button"
            onPress={handleDelete}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Delete expense</Text>
          </Pressable>
        ) : null}
        <Pressable
          accessibilityRole="button"
          onPress={handleSave}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>
            {expense ? "Save changes" : "Add expense"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form: {
    gap: 20,
    marginTop: 32,
  },
  field: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    minHeight: 48,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  error: {
    color: "#c62828",
  },
  saveButton: {
    minHeight: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#208AEF",
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  deleteButton: {
    minHeight: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c62828",
  },
  deleteButtonText: {
    color: "#c62828",
    fontSize: 16,
    fontWeight: "700",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  close: {
    fontSize: 16,
  },
});

export default ManageExpenseModal;
