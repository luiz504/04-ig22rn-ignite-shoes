
# 💻 Project Ignite Shoes

This project stems from my participation in a React Native bootcamp hosted by RocketSet. Our primary focus was on harnessing the power of Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNS) via the OneSignal platform to enable push notification functionality within a mobile application.

## Features Explored

We delved deep into understanding and implementing push notifications, covering their behavior across various app states such as foreground, background, and when the app is quit. Additionally, we explored advanced capabilities provided by OneSignal, including Tags, Sessions, Segments, Deep-linking, and more, to enhance the app's user experience and engagement.

## Android FMC Setup Guide

To set up Firebase Cloud Messaging for Android, follow these instructions:

1. Navigate to the Firebase console and access your project settings.
2. Enable the Firebase Cloud Messaging (FCM) API under the *Cloud Messaging* section.
3. Generate a new private key in the *Service accounts* section and download the credentials JSON file.
4. Log in to OneSignal, create a project, and configure it for Expo.
5. Configure your Expo project by providing the credentials JSON obtained from step 3.
6. Upon successful configuration, you'll receive an App ID, which should be set as the environment variable `ANDROID_ONESIGNAL_APP_ID` in your project (just copy the `.env.example` to `.env` and fill with you id).

By following these steps, you'll be equipped to seamlessly integrate push notification functionality into your React Native app for Android, you can play with the OneSignal SDK and Dashboard.

## Android FMC instructions

coming soon... or not...

## Commands

To list the configured deep links available to the app, use the following command:

```bash
  npx uri-scheme list
```

For manual deep-link test (dev mode):

```bash
  npx uri-scheme open <scheme_base_url><localIp> --android
```

```bash
  npx uri-scheme open <scheme_base_url><localIp> --ios
```

examples: [
  igniteshoes://192.168.1.11:8081 --android,
  igniteshoes://details/7 --android
]
