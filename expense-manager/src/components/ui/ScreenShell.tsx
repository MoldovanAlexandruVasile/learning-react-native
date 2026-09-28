import { BlurTargetView, BlurView } from "expo-blur";
import { PropsWithChildren, ReactNode, useRef } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/theme";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Add01Icon } from "@hugeicons/core-free-icons";

const HEADER_HEIGHT = 48;

type Props = PropsWithChildren<{
  title: string;
  action?: ReactNode;
  onActionPress?: () => void;
}>;

const ScreenShell = ({ title, action, onActionPress, children }: Props) => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = Colors[scheme === "dark" ? "dark" : "light"];
  const blurTarget = useRef<View | null>(null);

  const scrollContent = (
    <ScrollView
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + HEADER_HEIGHT + 12 },
      ]}
      contentInsetAdjustmentBehavior="never"
      style={styles.scrollView}
    >
      {children}
    </ScrollView>
  );

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {Platform.OS === "android" ? (
        <BlurTargetView ref={blurTarget} style={styles.scrollArea}>
          {scrollContent}
        </BlurTargetView>
      ) : (
        scrollContent
      )}
      <BlurView
        blurMethod="dimezisBlurViewSdk31Plus"
        blurTarget={Platform.OS === "android" ? blurTarget : undefined}
        intensity={75}
        pointerEvents="box-none"
        style={[styles.header, { height: insets.top + HEADER_HEIGHT }]}
        tint={scheme === "dark" ? "dark" : "light"}
      >
        <View style={{ height: insets.top }} />
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

          <Pressable onPress={onActionPress}>
            {action || (
              <HugeiconsIcon icon={Add01Icon} color={colors.textSecondary} />
            )}
          </Pressable>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerContent: {
    height: HEADER_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
  },
});

export default ScreenShell;
