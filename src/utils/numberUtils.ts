export function formatCurrency(value: string) {
  const price = typeof value === 'string' ? +value.slice(1) : value;
  const formattedValue = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formattedValue;
}
