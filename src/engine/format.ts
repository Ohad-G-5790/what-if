const SYMBOL: Record<string, string> = { EUR: "€", USD: "$", GBP: "£", CHF: "CHF " };

let currency = "EUR";

/** The engine formats money in one currency per analysis. */
export function setCurrency(code: string): void {
  currency = SYMBOL[code] ? code : "EUR";
}

export function sym(): string {
  return SYMBOL[currency] ?? "€";
}

/** Money for totals: no cents above 100, a minus sign before the symbol. */
export function money(n: number, cents = Math.abs(n) < 100): string {
  const abs = Math.abs(n);
  const body = cents ? abs.toFixed(2) : Math.round(abs).toLocaleString("en-GB");
  return `${n < 0 ? "−" : ""}${sym()}${body}`;
}

/** Money per item: always with cents. */
export function price(n: number): string {
  return money(n, true);
}

export function pct(share: number, digits = 0): string {
  return `${(share * 100).toFixed(digits)}%`;
}

export function num(n: number, digits = 1): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(digits);
}

export function round(n: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

export function signed(n: number): string {
  return n > 0 ? `+${money(n)}` : money(n);
}

export function plural(n: number, one: string, many = `${one}s`): string {
  return `${num(n)} ${Math.abs(n) === 1 ? one : many}`;
}
