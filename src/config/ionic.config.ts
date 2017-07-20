import { CloudSettings } from '@ionic/cloud-angular';

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '44626303'
  },
  'push': {
    'sender_id': '1037819600790',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true,
        'alert': true
      },
      'android': {
        'iconColor': '#5e0e9d'
      }
    }
  }
};
