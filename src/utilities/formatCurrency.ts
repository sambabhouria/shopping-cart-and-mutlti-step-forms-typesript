const CURRERCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'EUR',
    style: 'currency',
    maximumFractionDigits: 0,
  })
  export function formatCurrency(number: number) {
    return CURRERCY_FORMATTER.format(number)
  }
