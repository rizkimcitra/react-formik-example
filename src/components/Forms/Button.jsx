import { buttonStyle as buttonClass } from '@/utils/Styling'

export default function Button({ children, type, classes }) {
  return (
    <button type={type} className={`${buttonClass} ${classes}`}>
      {children}
    </button>
  )
}
