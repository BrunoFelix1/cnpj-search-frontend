import { z } from "zod";
import { isValidCnpj, stripNonDigits } from "../../utils/text.utils";

export const schema = z.object({
  name: z.string().min(1, "Nome obrigatorio"),
  email: z.string().min(1, "E-mail obrigatorio").email("E-mail invalido"),
  phone: z
    .string()
    .min(1, "Telefone obrigatorio")
    .refine((value) => {
      const digits = stripNonDigits(value);
      return digits.length === 10 || digits.length === 11;
    }, "Telefone invalido"),
  cnpj: z
    .string()
    .min(1, "CNPJ obrigatorio")
    .refine((value) => stripNonDigits(value).length === 14, "CNPJ invalido")
    .refine((value) => isValidCnpj(value), "CNPJ invalido"),
});
