export const currencyFormatter = (currency: string, digits: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    maximumSignificantDigits: digits,
  });
