export function formatPrice(price: number, currency: string = "TRY") {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
  }).format(price);
}
