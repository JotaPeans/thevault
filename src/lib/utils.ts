import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDateToHex(dateIso: string): string {
  dateIso = dateIso.replace(/[T:Z]/g, "-");
  const splittedValue = dateIso.split("-").filter((item) => item !== "");

  const hexValues = splittedValue.map((value) => {
    return parseInt(value).toString(16);
  });

  return hexValues.join("");
}