export const stripNonDigits = (value: string) => value.replace(/\D/g, "");

export const formatPhone = (value: string) => {
  const digits = stripNonDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, "($1) $2-$3").trim();
  }
  return digits.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, "($1) $2-$3").trim();
};

export const formatCnpj = (value: string) => {
  const digits = stripNonDigits(value).slice(0, 14);
  return digits.replace(
    /(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
    "$1.$2.$3/$4-$5",
  );
};

export const isValidCnpj = (value: string) => {
  const digits = stripNonDigits(value);
  if (digits.length !== 14) {
    return false;
  }

  if (/^(\d)\1{13}$/.test(digits)) {
    return false;
  }

  const numbers = digits.split("").map(Number);
  const calcCheck = (length: number) => {
    let sum = 0;
    let weight = length - 7;
    for (let i = 0; i < length; i += 1) {
      sum += numbers[i] * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const check1 = calcCheck(12);
  const check2 = calcCheck(13);

  return check1 === numbers[12] && check2 === numbers[13];
};
