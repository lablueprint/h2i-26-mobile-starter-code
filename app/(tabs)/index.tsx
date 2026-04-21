import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.logo}
        />

        <ThemedText type="title" style={styles.title}>
          Hackathon Starter Code
        </ThemedText>

        <ThemedText style={styles.paragraph}>
          Welcome to your Expo mobile starter app! This workspace includes a
          Home page, an About page, and a dummy backend example to help you
          build your project.
        </ThemedText>

        <ThemedView
          lightColor="rgba(255,255,255,0.96)"
          darkColor="rgba(255,255,255,0.08)"
          style={styles.card}
        >
          <ThemedText type="subtitle">Project Structure</ThemedText>
          <ThemedText style={styles.codeBlock}>
            {`app/
├── api/hello.ts        # Example backend route for web
├── (tabs)/
│   ├── _layout.tsx     # Tab navigator
│   ├── index.tsx       # Home page
│   └── about.tsx       # About page
└── modal.tsx           # Example modal screen`}
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 20,
    marginTop: 60
  },
  logo: {
    width: 120,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  codeBlock: {
    backgroundColor: "rgba(0,0,0,0.04)",
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "monospace",
    marginTop: 8,
  },
});
