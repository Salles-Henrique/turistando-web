# 📚 Documentação: Fluxo de Dados do Turistando

## 1️⃣ Onde os Dados São Armazenados

### **Local: `src/data/destinations.ts`**

```typescript
// Arquivo centralizado com toda a informação dos destinos

export interface Destination {
  id: string;           // Identificador único
  title: string;        // Nome da viagem
  location: string;     // Cidade
  country: string;      // País
  description: string;  // Descrição detalhada
  image: string;        // URL da imagem (externo - Unsplash)
  price: number;        // Preço por pessoa
  originalPrice?: number; // Preço original (para desconto)
  rating: number;       // Avaliação (0-5)
  reviews: number;      // Número de avaliações
  duration: number;     // Duração em dias
  category: string;     // 'beach', 'mountain', 'city', 'adventure'
}

export const destinationsData: Destination[] = [
  { id: '1', title: 'Paraíso Tropical...', ... },
  { id: '2', title: 'Paris Romantic...', ... },
  // ... 12 destinos
];
```

---

## 2️⃣ Como os Dados Fluem Entre Telas

### **Fluxo Completo de Dados**

```
┌─────────────────────────────────────────────────────────────────┐
│                     HOMEPAGE (/)                                │
│  src/app/page.tsx                                               │
│  ├─ Importa: destinationsData                                   │
│  ├─ Renderiza: FeaturedDestinations (8 destinos)               │
│  └─ Passa: destinations={mockDestinations}                      │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────────┐
│          FEATURED DESTINATIONS COMPONENT                         │
│  src/components/sections/FeaturedDestinations.tsx               │
│  ├─ Recebe: destinations array                                  │
│  ├─ Map sobre cada destino: destino.map(dest => <Card>)        │
│  ├─ onClick: router.push(`/destinations/${dest.id}`)           │
│  └─ Renderiza: Cards com título, preço, imagem                │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ↓ Clique no Card
┌─────────────────────────────────────────────────────────────────┐
│           DESTINATIONS PAGE (/destinations)                      │
│  src/app/destinations/page.tsx                                  │
│  ├─ Importa: destinationsData                                   │
│  ├─ Filtra: baseado em país, categoria, preço                  │
│  ├─ Renderiza: DestinationCard (lista filtrada)               │
│  ├─ onclick em Card: handleViewDetails(id)                     │
│  └─ handleViewDetails: router.push(`/destinations/${id}`)      │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ↓ Clique em "Ver Detalhes"
┌─────────────────────────────────────────────────────────────────┐
│        DESTINATION DETAIL PAGE (/destinations/[id])             │
│  src/app/destinations/[id]/page.tsx                             │
│  ├─ Recebe: params.id (ex: "1", "2", "3")                      │
│  ├─ Busca: destinationsData.find(d => d.id === params.id)     │
│  ├─ Se encontrado: mostra detalhes completos                   │
│  └─ Se não encontrado: mostra "Destino não encontrado"        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3️⃣ Por Que Aparece "Destino Não Encontrado"

### **⚠️ Problema Identificado**

```typescript
// Em src/app/destinations/[id]/page.tsx, linha 21:
const destination = destinationsData.find((d) => d.id === params.id);

if (!destination) {
  return <div>Destino não encontrado</div>
}
```

### **Causas Possíveis**

| Causa | Por quê | Solução |
|-------|---------|--------|
| **Tipo de ID diferente** | `params.id` pode ser string ou number | Garantir que ID seja string |
| **ID não existe** | Navegando para `/destinations/999` | ID deve estar em `destinationsData` |
| **Espaços/Caracteres especiais** | `params.id` pode ter espaços | Validar e limpar ID |
| **Problema de SSR** | primeira renderização no servidor | Usar renderização do lado do cliente |

### **Como Debugar**

```typescript
export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  console.log('Params:', params);              //← Ver o que vem do URL
  console.log('Params ID:', params.id);        //← Ver o ID específico
  console.log('Tipo de ID:', typeof params.id); //← Verificar tipo
  
  const destination = destinationsData.find((d) => {
    console.log(`Comparando: '${d.id}' === '${params.id}' = ${d.id === params.id}`);
    return d.id === params.id;
  });
}
```

---

## 4️⃣ Por Que as Imagens Não Carregam

### **URLs de Imagens Usadas**

```typescript
// Arquivo: src/data/destinations.ts
// Usando Unsplash (URLs externas públicas)

image: 'https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop'
```

### **Possíveis Problemas**

| Problema | Sintoma | Solução |
|----------|---------|--------|
| **URL quebrada** | Imagem com X | Testar URL no navegador |
| **CORS (Cross-Origin)** | Erro de console | URLs Unsplash são públicas, não deve ter problema |
| **Conexão internet** | Nenhuma imagem carrega | WiFi/conexão ativa |
| **Timeout** | Imagem lenta/não carrega | URLs Unsplash podem ser lentas |

### **Como Verificar**

```typescript
// No console do navegador:
// 1. Clique direito em onde a imagem deveria estar
// 2. Inspecionar (F12)
// 3. Procurar pela tag <img>
// 4. Ver o atributo 'src'
// 5. Clicar na URL ou abrir em nova aba

// Se a imagem não carregar em nova aba:
// A URL está quebrada ou o Unsplash está bloqueando
```

---

## 5️⃣ Como Adicionar um Novo Destino

### **Passo a Passo**

```typescript
// Arquivo: src/data/destinations.ts

export const destinationsData: Destination[] = [
  // ... destinos existentes ...
  
  // ADICIONAR AQUI:
  {
    id: '13',  // ← ID único (incrementar!)
    title: 'Machu Picchu Expedition',
    location: 'Cusco',
    country: 'Peru',
    description: 'Ancient Incan ruins and mountain adventure',
    image: 'https://images.unsplash.com/photo-1587595431973-160f5d1d2b0d?w=800&h=600&fit=crop',
    price: 450,
    originalPrice: 600,
    rating: 4.9,
    reviews: 287,
    duration: 4,
    category: 'adventure',
  },
];
```

### **⚠️ Regras Importantes**

```
✓ ID DEVE SER ÚNICA (não repetir)
✓ ID DEVE SER STRING ('13', não 13)
✓ Todos os campos são OBRIGATÓRIOS
✓ rating: 0-5 (decimal)
✓ price: número positivo
✓ duration: dias (número)
✓ category: 'beach', 'mountain', 'city', 'adventure'
✓ image: URL válida e acessível
```

---

## 6️⃣ Como Remover um Destino

### **Encontrar e Deletar**

```typescript
// ANTES:
export const destinationsData: Destination[] = [
  { id: '1', title: 'Bali...', ... },
  { id: '2', title: 'Paris...', ... },    // ← REMOVER ESTA
  { id: '3', title: 'Swiss Alps...', ... },
];

// DEPOIS:
export const destinationsData: Destination[] = [
  { id: '1', title: 'Bali...', ... },
  { id: '3', title: 'Swiss Alps...', ... },
];
```

⚠️ **Cuidado:** Se alguém abrir a página `/destinations/2`, verá "Destino não encontrado"

---

## 7️⃣ Como Editar um Destino Existente

```typescript
// Encontrar em destinations.ts
{
  id: '1',
  title: 'Paraíso Tropical - Bali Beach Resort',  // ← EDITAR
  location: 'Bali',                                // ← EDITAR
  price: 280,                                      // ← EDITAR
  image: 'https://...',                           // ← EDITAR
  // ... outros campos
}
```

---

## 8️⃣ Importação de Dados em Diferentes Componentes

### **Homepage (`src/app/page.tsx`)**
```typescript
import { destinationsData } from '@/data/destinations';

export default function HomePage() {
  return (
    <FeaturedDestinations
      destinations={destinationsData.slice(0, 8)}  // Primeiros 8
    />
  );
}
```

### **Página de Destinos (`src/app/destinations/page.tsx`)**
```typescript
import { destinationsData } from '@/data/destinations';

export default function DestinationsPage() {
  // Filtra baseado em: país, categoria, preço, busca
  const filtered = destinationsData.filter((d) => {
    // lógica de filtro...
  });
}
```

### **Detalhes (`src/app/destinations/[id]/page.tsx`)**
```typescript
import { destinationsData } from '@/data/destinations';

export default function DestinationDetailPage({ params }) {
  const destination = destinationsData.find((d) => d.id === params.id);
}
```

---

## 9️⃣ Estrutura de Arquivos

```
src/
├── data/
│   └── destinations.ts          ← TODOS OS DADOS (array + interface)
│
├── app/
│   ├── page.tsx                 ← Homepage (importa destinos)
│   ├── destinations/
│   │   ├── page.tsx            ← Lista filtrada (importa dados)
│   │   └── [id]/
│   │       └── page.tsx        ← Detalhe único (busca por ID)
│   └── ...
│
├── components/
│   ├── sections/
│   │   ├── FeaturedDestinations.tsx  ← Componente que renderiza lista
│   │   └── DestinationCard.tsx       ← Componente do card individual
│   └── forms/
│       └── ReservationForm.tsx
└── ...
```

---

## 🔟 Fluxo de Tipos

```typescript
// ARQUIVO: src/data/destinations.ts
export interface Destination { ... }
export const destinationsData: Destination[] = [...]

// ARQUIVO: src/app/page.tsx
import { destinationsData, type Destination } from '@/data/destinations';

// ARQUIVO: src/components/sections/FeaturedDestinations.tsx
interface FeaturedDestinationsProps {
  destinations: Destination[];  // ← Recebe array do tipo Destination
}

// ARQUIVO: src/app/destinations/[id]/page.tsx
const destination: Destination | undefined = destinationsData.find(...);
```

---

## 🎯 Resumo Rápido

| Ação | Onde Fazer | Como |
|------|-----------|------|
| **Adicionar Destino** | `src/data/destinations.ts` | Adicionar novo objeto ao array |
| **Remover Destino** | `src/data/destinations.ts` | Deletar objeto do array |
| **Editar Destino** | `src/data/destinations.ts` | Modificar campos do objeto |
| **Ver todos os destinos** | `/destinations` | Página filtrável |
| **Ver um destino** | `/destinations/[id]` | Ex: `/destinations/1` |
| **Mudar imagem** | `src/data/destinations.ts` | Campo `image` |
| **Debugar** | Browser Console (F12) | `console.log()` nos componentes |

