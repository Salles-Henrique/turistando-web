# 🎯 Guia Rápido: Como Adicionar Pacotes de Viagem/Hotelaria

## 📍 Localização do Arquivo de Dados

```
turistando-web/
└── src/
    └── data/
        └── destinations.ts  ← AQUI VOCÊ ADICIONA NOVOS PACOTES
```

---

## ⚡ 3 Passos Simples

### Passo 1️⃣ - Abra o arquivo
Arquivo: `src/data/destinations.ts`

### Passo 2️⃣ - Procure pela última linha do array (veja exemplo abaixo)
```typescript
// Encontre esta seção (final do array):
{
  id: '12',
  title: 'Greece Island Hopping',
  location: 'Santorini & Mykonos',
  country: 'Greece',
  description: 'Whitewashed villages and Aegean Sea beauty',
  // ... outros campos ...
},  ← FINAL DO ARRAY (note a vírgula)
];  ← FECHA O ARRAY
```

### Passo 3️⃣ - Adicione seu novo pacote ANTES do fechamento `];`
```typescript
  // NOVO PACOTE
  {
    id: '13',  // ⚠️ SEMPRE incremente o ID (13 depois de 12)
    title: 'Rio de Janeiro - Pacote Completo',
    location: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Praias incríveis, montanhas e vida noturna agitada',
    image: 'https://images.unsplash.com/photo-1563537348885-7be370b634b6?w=800&h=600&fit=crop',
    price: 1200,           // R$ 1200 por pessoa
    originalPrice: 1600,   // Desconto de 25%
    rating: 4.9,
    reviews: 456,
    duration: 5,           // 5 dias
    category: 'beach',
  },
];  ← FECHA AQUI
```

---

## 📋 Template Preenchido (Copie e Cole)

```typescript
{
  id: '13',                              // ID ÚNICO (incremente do último)
  title: 'NOME DO PACOTE',               // Máximo 70 caracteres
  location: 'CIDADE',                    // Ex: "Rio de Janeiro", "Bali"
  country: 'PAÍS',                       // Ex: "Brazil", "Indonesia"
  description: 'DESCRIÇÃO BREVE',        // 60-120 caracteres
  image: 'https://...',                  // URL de imagem (Unsplash)
  price: 1200,                           // Preço em R$ (número inteiro)
  originalPrice: 1600,                   // OPCIONAL: para mostrar desconto
  rating: 4.8,                           // Entre 4.0 e 5.0
  reviews: 200,                          // Número de reviews
  duration: 5,                           // Número de dias
  category: 'beach',                     // beach | mountain | city | adventure
},
```

---

## 🎨 Categorias Disponíveis

| Categoria | Ícone | Exemplos |
|-----------|-------|----------|
| `beach` | 🏖️ | Bali, Maldivas, Rio, Bahia |
| `mountain` | ⛰️ | Swiss Alps, Iceland, Patagônia |
| `city` | 🏙️ | Paris, Tokyo, São Paulo, Barcelona |
| `adventure` | 🎯 | New Zealand, Lençóis Maranhenses |

---

## 💰 Exemplo com Desconto

```typescript
{
  id: '13',
  title: 'Salvador - Carnaval & Coco',
  location: 'Salvador',
  country: 'Brazil',
  description: 'Diversão do carnaval baiano com hospedagem frente ao ...mar',
  image: 'https://images.unsplash.com/photo-1568876694729-6286a3fb0da0?w=800&h=600&fit=crop',
  price: 950,                   // R$ 950 por pessoa
  originalPrice: 1350,          // Era R$ 1350, agora 30% de desconto!
  rating: 4.7,
  reviews: 234,
  duration: 5,
  category: 'beach',
},
```

**Cálculo do Desconto Automático:**
- `((1350 - 950) / 1350) × 100 = 29.6%`
- O site mostra: `-30%` (arredondado)

---

## 🏨 Exemplo com Hotel (Opcional)

Se quiser adicionar informações detalhadas de hospedagem:

```typescript
{
  id: '14',
  title: 'Fernando de Noronha - Mergulho Premium',
  location: 'Fernando de Noronha',
  country: 'Brazil',
  description: 'Mergulhos em águas cristalinas e fauna marinha única',
  image: 'https://images.unsplash.com/photo-1583212192454-1fe6229603b7?w=800&h=600&fit=crop',
  price: 2200,
  originalPrice: 3000,
  rating: 4.9,
  reviews: 89,
  duration: 5,
  category: 'adventure',

  // NOVO: Informações do Hotel
  hotel: {
    name: 'Pousada Moqueca Eco Resort',
    stars: 4,
    amenities: [
      'WiFi Grátis',
      'Piscina Aquecida',
      'Restaurante com Culinária Local',
      'Passeios de Mergulho Diários',
    ],
    checkIn: '15:00',
    checkOut: '11:00',
    meals: 'full-board',  // breakfast | half-board | full-board | none
  },

  // NOVO: Atividades
  activities: [
    {
      name: 'Mergulho com Tubarão de Ponta Branca',
      duration: '4h',
      price: 350,
    },
    {
      name: 'Passeio de Barco Pôr do Sol',
      duration: '2h',
      price: 150,
    },
  ],

  // NOVO: O que está incluído
  included: [
    '5 noites em Pousada 4 Estrelas',
    'Todas as refeições',
    'Mergulho diário com Instrutor',
    'Transfer Aeroporto',
  ],

  // NOVO: O que está excluído
  notIncluded: [
    'Voos Aéreos',
    'Atividades Extras não listadas',
    'Bebidas Alcoólicas',
  ],
},
```

---

## ✅ Checklist Antes de Salvar

- [ ] **ID único** - Não repetido com outro pacote
- [ ] **Título** - Atrativo, até 70 caracteres
- [ ] **Location** - Cidade/região específica
- [ ] **Country** - País correto
- [ ] **Description** - 60-120 caracteres, em português
- [ ] **Image** - URL válida (teste no navegador)
- [ ] **Price** - Número inteiro em R$
- [ ] **OriginalPrice** - Se houver desconto, deve ser > price
- [ ] **Rating** - Entre 4.0 e 5.0 (4.7+ é melhor)
- [ ] **Reviews** - Número realista (100+)
- [ ] **Duration** - Dias corretos
- [ ] **Category** - beach | mountain | city | adventure
- [ ] **Vírgula após `}` ** - Deixe vírgula se não for o último

---

## 🖼️ Onde Encontrar Imagens Legais

### Unsplash (Grátis, Alta Qualidade)
```
https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop
```

### Sites Recomendados
- **Unsplash**: unsplash.com
- **Pexels**: pexels.com
- **Pixabay**: pixabay.com
- **Freepik**: freepik.com

### Formato Esperado
```
https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop
                                                          ↑   ↑
                                              largura x altura mínima
```

---

## 🔄 Fluxo da Aplicação com Seus Dados

```
1. Você adiciona dados em → src/data/destinations.ts
                           ↓
2. Código carrega dados → destinationsData.find(d => d.id === '13')
                           ↓
3. Renderiza na página → app/destinations/ ou [id]/page.tsx
                           ↓
4. Usuário vê pacote → Card com imagem, preço, avaliação
                           ↓
5. Clica para detalhe → Página completa com ReservationForm
                           ↓
6. Faz Reserva → Coleta dados + calcula preço (price × pessoas)
```

---

## 💡 Dicas Pro

### ✅ Faça Assim
```typescript
title: 'Bali - Retiro Espiritual & Praias',
description: 'Templos antigos, praias paradisíacas e retiros de ioga em bungalows',
category: 'beach',
price: 850,
originalPrice: 1200,  // Desconto atraente
rating: 4.8,
reviews: 312,
duration: 7,
```

### ❌ Evite Assim
```typescript
title: 'Viagem',              // Muito genérico
description: 'Legal',         // Muito vago
category: 'outras',           // Categoria inválida!
price: '1200',               // String, não number!
originalPrice: 1150,         // Menor que price (confuso)
rating: 5.0,                 // Pouco credível
reviews: 5,                  // Muito pequeno
```

---

## 🧪 Testando Seus Dados

### 1. Abra o navegador
```
http://localhost:3000/destinations
```

### 2. Procure pelo seu novo pacote na listagem

### 3. Clique para ver detalhes completos

### 4. Teste o formulário de reserva

---

## 📞 Exemplo Completo: Adicionar 3 Pacotes Brasileiros

Abra `src/data/destinations.ts` e adicione antes do `];` final:

```typescript
// NOVO PACOTE 1
{
  id: '13',
  title: 'Pantanal - Safari Aquático',
  location: 'Cuiabá',
  country: 'Brazil',
  description: 'Maior biodiversidade do mundo, onças, caimões e pássaros',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
  price: 1100,
  originalPrice: 1550,
  rating: 4.9,
  reviews: 178,
  duration: 4,
  category: 'adventure',
},

// NOVO PACOTE 2
{
  id: '14',
  title: 'Beberibe - Mergulho em Recifes',
  location: 'Porto de Galinhas',
  country: 'Brazil',
  description: 'Piscinas naturais, recifes de coral vivos e peixes tropicais',
  image: 'https://images.unsplash.com/photo-1583212192454-1fe6229603b7?w=800&h=600&fit=crop',
  price: 680,
  originalPrice: 950,
  rating: 4.7,
  reviews: 245,
  duration: 3,
  category: 'beach',
},

// NOVO PACOTE 3
{
  id: '15',
  title: 'Chapada Diamantina - Trilhas & Cachoeiras',
  location: 'Lençóis',
  country: 'Brazil',
  description: 'Cachoeiras gigantes, piscinas naturais e montanhas cobertas de mata',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  price: 890,
  originalPrice: 1200,
  rating: 4.8,
  reviews: 289,
  duration: 4,
  category: 'mountain',
},
];  ← Fechamanto do array
```

---

## 🎬 Próximas Melhorias Futuras

### Curto Prazo (1-2 semanas)
- [ ] Traduzir titles/descriptions para português
- [ ] Adicionar mais pacotes brasileiros
- [ ] Validar imagens

### Médio Prazo (1-2 meses)
- [ ] Criar admin panel para adicionar pacotes sem código
- [ ] Conectar com banco de dados real
- [ ] Sistema de cupons de desconto

### Longo Prazo (3-6 meses)
- [ ] Integrar pagamento (Stripe, PagSeguro)
- [ ] Gerenciamento de disponibilidade
- [ ] Sistema de avaliações autênticas
- [ ] API para sincronizar com fornecedores

