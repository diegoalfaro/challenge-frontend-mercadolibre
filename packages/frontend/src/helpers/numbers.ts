export const currencyFormatter = (
  currency: string = "ARS",
  digits: number = 2
) => {
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency,
      maximumFractionDigits: digits,
    });
  } catch {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 2,
    });
  }
};
