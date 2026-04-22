// useReveal.js
// Composable that wires up IntersectionObserver for .reveal elements.
// Usage: const { revealRef } = useReveal()
//        then bind :ref="revealRef" on any element with class="reveal"
import { onUnmounted } from 'vue'

export function useReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  onUnmounted(() => {
    observer.disconnect()
  })

  function revealRef(el) {
    if (el) observer.observe(el)
  }

  return { revealRef }
}