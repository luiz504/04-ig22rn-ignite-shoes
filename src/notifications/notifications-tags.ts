import { OneSignal } from 'react-native-onesignal'

export function createTagUserInfo() {
  OneSignal.User.addTags({
    user_name: 'Luiz Bueno',
    user_email: 'luiz@email.com',
  })
}