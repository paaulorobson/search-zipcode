import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiDelete, mdiClose, mdiAlertCircle } from '@mdi/js'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      delete: mdiDelete,
      close: mdiClose,
      alert: mdiAlertCircle
    },
    sets: {
      mdi
    }
  }
})
