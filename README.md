# H2I 2026 Mobile Starter Code 📱

This is a starter template for building mobile applications using [Expo](https://expo.dev) and [React Native](https://reactnative.dev). 

## Features

- **Expo Router**: File-based routing for seamless navigation
- **Tab Navigation**: Bottom tab bar with haptic feedback
- **Custom Components**: Reusable themed text, views, and UI elements
- **Dummy Backend**: Example API integration for prototyping
- **TypeScript**: Full TypeScript support for type safety

## Project Structure

```
app/
├── _layout.tsx          # Root layout with theme provider
├── modal.tsx            # Example modal screen
├── (tabs)/
│   ├── _layout.tsx      # Tab navigator configuration
│   ├── index.tsx        # Home screen
│   └── about.tsx        # About screen
└── api/
    └── hello.ts         # Example API route (web only)

components/
├── ui/
│   ├── collapsible.tsx      # Collapsible content component
│   ├── icon-symbol.tsx      # Cross-platform icon component
│   └── icon-symbol.ios.tsx  # iOS-specific icon implementation
├── external-link.tsx        # External link handler
├── haptic-tab.tsx           # Tab button with haptic feedback
├── hello-wave.tsx           # Animated greeting component
├── parallax-scroll-view.tsx # Parallax scrolling container
├── themed-text.tsx          # Themed text component
└── themed-view.tsx          # Themed view component

constants/
└── theme.ts             # Color scheme definitions

hooks/
├── use-color-scheme.ts      # Color scheme detection
├── use-color-scheme.web.ts  # Web-specific color scheme
└── use-theme-color.ts       # Theme color resolver

lib/
└── dummy-backend.ts     # Mock API client

assets/
└── images/             # Static image assets

scripts/
└── reset-project.js    # Project reset utility
```

## Key Components

### Navigation & Layout

- **Root Layout** (`app/_layout.tsx`): Sets up theme provider and stack navigation
- **Tab Layout** (`app/(tabs)/_layout.tsx`): Configures bottom tab navigation with haptic feedback
- **Modal** (`app/modal.tsx`): Example modal screen for overlays

### UI Components

- **ThemedText**: Text component that adapts to light/dark themes
- **ThemedView**: View container with theme-aware backgrounds
- **HapticTab**: Tab button with touch feedback
- **ParallaxScrollView**: Smooth scrolling with parallax header effects
- **Collapsible**: Expandable/collapsible content sections
- **IconSymbol**: Cross-platform icon rendering

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npx expo start
   ```

3. **Run on your device**
   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go) (limited sandbox)


## Next Steps

### Adding New Screens

1. Create a new file in `app/(tabs)/` for tab screens or `app/` for stack screens
2. Use `expo-router` file-based routing - the filename becomes the route
3. Import and use themed components for consistent styling

### Modifying Themes

- Edit `constants/theme.ts` to change colors
- Components automatically adapt to theme changes
- Use `useColorScheme()` hook for theme-aware logic

### Adding Components

- Place reusable components in `components/`
- Use `ThemedText` and `ThemedView` for theme compatibility
- Follow the existing naming conventions

### API Integration

- Replace `lib/dummy-backend.ts` with your real API client. We recommend using Supabase for the Backend!
- Update `app/api/hello.ts` for server-side routes (web)
- Use standard fetch or libraries like Axios

### Navigation

- Add new tabs in `app/(tabs)/_layout.tsx`
- Use `Link` component from `expo-router` for navigation
- Modals are defined in the root layout

## Learn More

- [Expo Documentation](https://docs.expo.dev/): Fundamentals and advanced guides
- [Expo Router](https://docs.expo.dev/router/introduction/): File-based routing
- [React Native](https://reactnative.dev/docs/getting-started): Core framework docs
- [React Navigation](https://reactnavigation.org/): Navigation patterns


## Happy hacking! 
