# Asteygo - Collaborative Group Travel Engine

A real-time mobile application for group travel coordination, expense splitting, and itinerary management.

Asteygo relies on Firebase/Firestore to handle high-concurrency, real-time state synchronization between multiple users planning a trip simultaneously. A NoSQL document structure was chosen over a relational database to prioritize low-latency reads for collaborative features like group chat and live itinerary editing.

## Focuses:
Strict TypeScript: End-to-end type safety for all Firestore data models.

Custom Firebase Security Rules: Implemented Role-Based Access Control (RBAC) so only Group Admins can delete itineraries.

Optimized UI: Utilized Virtualization (FlatList) to render hundreds of chat messages without dropping frames.

Offline Resilience: Configured Firestore offline persistence so users can view itineraries in airplane mode.

## Tech Stack:
Frontend: React Native, Expo Router, TypeScript

Backend/BaaS: Firebase Auth, Cloud Firestore, Firebase Storage

State Management: Context API

## Get started


Add Firebase config to .env

npx expo start
1. Clone Project

   ```bash
   git clone ...
   ```
2. Install dependencies

   ```bash
   npm install

3. Edit .env to include correct API info

   ```bash
   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID= Enter IOS Client ID here
   ```

4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
