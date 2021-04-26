import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', { locale: ptBR }).capitalize()}</time>
  )
}