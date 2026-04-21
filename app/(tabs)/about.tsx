import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { fetchHelloMessage } from "@/lib/dummy-backend";

export default function AboutScreen() {
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetchBackend() {
    setIsLoading(true);
    setApiMessage(null);

    try {
      const response = await fetchHelloMessage();
      setApiMessage(response.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/icon.png")}
          style={{ width: 400, height: 400, resizeMode: "contain" }}
        />
      }
    >
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            About This App
          </ThemedText>

          <ThemedText style={styles.paragraph}>
            This mobile starter app is built with Expo and Expo Router, and it
            includes a simple frontend layout plus a dummy backend fetch flow.
            Hopefully it helps as you start building your Hack2Impact Project!
            Good luck hacking :D
          </ThemedText>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle">Frontend</ThemedText>
            <ThemedText style={styles.bullet}>
              • Create new pages in{" "}
              <ThemedText type="defaultSemiBold">app/(tabs)/</ThemedText>
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Build reusable UI in{" "}
              <ThemedText type="defaultSemiBold">components/</ThemedText>
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Style screens with React Native style objects and theme-aware
              components
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Fetch data from API routes or a dummy backend helper
            </ThemedText>
          </ThemedView>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle">Features</ThemedText>
            <ThemedText style={styles.bullet}>
              • Expo Router with tab navigation
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Home and About pages
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Theme-aware UI components
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Dummy backend fetch example
            </ThemedText>
          </ThemedView>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle">Backend</ThemedText>
            <ThemedText style={styles.bullet}>
              • Example API route at{" "}
              <ThemedText type="defaultSemiBold">/api/hello</ThemedText>
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Dummy fetch helper in{" "}
              <ThemedText type="defaultSemiBold">
                lib/dummy-backend.ts
              </ThemedText>
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • Extend with more endpoints, databases, or external services
            </ThemedText>
          </ThemedView>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle">Backend Demo</ThemedText>
            <Pressable
              onPress={handleFetchBackend}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                {isLoading ? "Fetching..." : "Fetch dummy backend"}
              </ThemedText>
            </Pressable>
            {apiMessage ? (
              <ThemedText style={styles.apiResult}>{apiMessage}</ThemedText>
            ) : null}
          </ThemedView>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle">To Run the App</ThemedText>
            <ThemedText style={styles.bullet}>
              • <ThemedText type="defaultSemiBold">npm i</ThemedText> to install dependencies
            </ThemedText>
            <ThemedText style={styles.bullet}>
              • <ThemedText type="defaultSemiBold">npx expo start</ThemedText> to start the development server
            </ThemedText>
          </ThemedView>

          <ThemedView
            lightColor="rgba(255,255,255,0.96)"
            darkColor="rgba(255,255,255,0.08)"
            style={styles.card}
          >
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Next Steps
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Add your own screens inside{" "}
              <ThemedText type="defaultSemiBold">app/(tabs)/</ThemedText>, build
              reusable components in{" "}
              <ThemedText type="defaultSemiBold">components/</ThemedText>, and
              connect to a real backend or API.
            </ThemedText>
          </ThemedView>

          <Link href="/" style={styles.link}>
            <ThemedText type="link">Back to Home</ThemedText>
          </Link>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 18,
  },
  title: {
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  sectionTitle: {
    marginTop: 8,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    marginTop: 6,
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
  button: {
    backgroundColor: "#0a7ea4",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: "#ffffff",
  },
  apiResult: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    marginTop: 16,
  },
});
