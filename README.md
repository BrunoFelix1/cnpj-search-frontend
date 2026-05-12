# CNPJ Search Frontend

Frontend para consulta de informacoes de empresas via CNPJ, com dashboard e mapa.

## Instalacao

```bash
npm install
```

## Variaveis de ambiente

Crie um arquivo `.env` na raiz com as variaveis abaixo:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Observacao: ajuste o host/porta conforme o backend.

## Como rodar localmente

```bash
npm run dev
```

Abrir no navegador: http://localhost:5173

## Como a IA ajudou

- Desenvolvimento auxiliado com IA.
- Prototipagem de telas e definição de temas.

## Decisoes de projeto e justificativas

- Vite + React para desenvolvimento rapido e build simples.
- Tailwind CSS para velocidade na composicao visual e consistencia (tenho mais prática com Tailwind).
- Zod para validacao declarativa e mensagens de erro claras.
- Leaflet para mapa por ser leve e ter boa integracao com React.

## Tempo gasto

- 6h00 (preencher com o tempo real)

## Se eu tivesse mais tempo

- Abranger responsividade mobile e telas ultra-wide.
- Adicionar estados de loading/empty/failure/skeleton mais completos.
- Extrair temas e tokens visuais para maior consistencia (melhorar o uso das diretivas do Tailwind).
