import type { Directive } from 'vue'

const cepMask: Directive = {
  mounted(el) {
    el.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement
      let value = target.value.replace(/\D/g, '')
      if (value.length > 8) {
        value = value.slice(0, 8)
      }
      value = value.replace(/(\d{5})(\d{1,3})/, '$1-$2')
      target.value = value
    })
  }
}

export default cepMask
