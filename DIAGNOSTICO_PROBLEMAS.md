# 🔧 Diagnóstico e Corrigências: "Destino Não Encontrado"

## 🔍 Identificando o Problema

### **Problema Principal**

Quando você clica em um destino e é redirecionado para `/destinations/[id]`, aparece "Destino não encontrado" em vez de mostrar os detalhes.

### **Causa Raiz**

```typescript
// Em src/app/destinations/[id]/page.tsx

export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const destination = destinationsData.find((d) => d.id === params.id);
  //                                                    ^^^^^^ params.id é uma string
  //                                                ^^^^^ d.id é uma string
  // Deveria funcionar, mas...
  
  if (!destination) {
    return <div>Destino não encontrado</div> // ← APARECE AQUI
  }
}
```

### **Problema Real: Como Next.js Trata `[id]`**

Em Next.js 13+, `params` é uma Promise que precisa ser resolvida:

```typescript
// ❌ CÓDIGO ATUAL (PODE NÃO FUNCIONAR):
export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const destination = destinationsData.find((d) => d.id === params.id);
  // params.id pode não estar devidamente tipado
}

// ✅ CÓDIGO CORRETO:
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;  // ← Params é uma Promise
}

export default async function DestinationDetailPage({ params }: Props) {
  const { id } = await params;  // ← Resolver a Promise
  const destination = destinationsData.find((d) => d.id === id);
  
  if (!destination) {
    return <NotFound />;  // ← Usar NotFound() do Next.js
  }
}
```

---

## ✅ Solução: Corrigir a Página de Detalhes

### **Passo 1:** Abrir `src/app/destinations/[id]/page.tsx`

### **Passo 2:** Atualizar o tipo de params

**De:**
```typescript
interface DestinationDetailProps {
  params: {
    id: string;
  };
}
```

**Para:**
```typescript
interface DestinationDetailProps {
  params: Promise<{
    id: string;
  }>;
}
```

### **Passo 3:** Atualizar a função principal

**De:**
```typescript
export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const destination = destinationsData.find((d) => d.id === params.id);
  const [travelers, setTravelers] = useState(1);
```

**Para:**
```typescript
import { notFound } from 'next/navigation';

export default async function DestinationDetailPage({ params }: DestinationDetailProps) {
  const { id } = await params;
  const destination = destinationsData.find((d) => d.id === id);
  const [travelers, setTravelers] = useState(1);  // ← Move para abaixo
```

### **Passo 4:** Atualizar a verificação "não encontrado"

**De:**
```typescript
if (!destination) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="text-6xl mb-4">🌍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Destino não encontrado</h1>
        // ... resto
      </div>
    </div>
  );
}
```

**Para:**
```typescript
if (!destination) {
  notFound();  // ← Usar Next.js notFound()
}
```

---

## 📋 Checklist de Verificação

```
□ Arquivo: src/app/destinations/[id]/page.tsx existe?
□ Tem 'use client' no topo? (Remover!)
□ Import { notFound } existe?
□ Params é Promise<{id: string}>?
□ Código faz await params?
□ find() usa const { id } = await params?
```

---

## 🖼️ Imagens Não Carregam - Diagnóstico

### **Checklist para Imagens:**

```
1. URL começa com https://images.unsplash.com?
   □ Sim
   □ Não

2. URL tem parâmetros ?w=800&h=600?
   □ Sim
   □ Não (teste adicionar)

3. Abrir URL em new tab:
   □ Funciona → Problema pode ser em outro lugar
   □ Não funciona → URL inválida/quebrada

4. Verificar network tab (F12):
   □ 200 OK → Imagem carrega mas não renderiza
   □ 404/403 → URL quebrada ou bloqueada
   □ Timeout → Unsplash muito lento
```

### **Possível Solução: Usar Image Component Next.js**

```typescript
// ATUAL (pode não otimizar):
<img
  src={destination.image}
  alt={destination.title}
  className="w-full h-full object-cover"
/>

// MELHORADO (otimizado):
import Image from 'next/image';

<Image
  src={destination.image}
  alt={destination.title}
  width={800}
  height={600}
  className="w-full h-full object-cover"
  priority
  onError={(e) => {
    console.log('Image failed to load:', destination.image);
    e.currentTarget.style.display = 'none';
  }}
/>
```

---

## 🧪 Como Testar Localmente

### **Teste 1: Verificar se dados existem**

```typescript
// Adicionar ao console em src/app/destinations/[id]/page.tsx:

export default async function DestinationDetailPage({ params }: DestinationDetailProps) {
  const { id } = await params;
  
  console.log('=== DEBUG ===');
  console.log('ID from URL:', id);
  console.log('Type of ID:', typeof id);
  console.log('All available IDs:', destinationsData.map(d => d.id));
  console.log('Looking for:', id);
  
  const destination = destinationsData.find((d) => d.id === id);
  console.log('Found destination:', destination);
  console.log('=== END DEBUG ===');
  
  if (!destination) {
    notFound();
  }
}
```

### **Teste 2: Testar cada URL**

```
Abrir no navegador:
- http://localhost:3000/destinations/1   → Deve mostrar Bali
- http://localhost:3000/destinations/2   → Deve mostrar Paris
- http://localhost:3000/destinations/5   → Deve mostrar Maldivas
- http://localhost:3000/destinations/999 → Deve mostrar "Not Found"
```

### **Teste 3: Verificar dados no array**

No console do navegador (F12):

```javascript
// Colar no console:
const destinationsData = [
  { id: '1', ... },
  // etc
];

destinationsData.map((d, i) => console.log(`${i}: ${d.id}`));
```

---

## 🚀 Implementar Corrigências Agora

### **Arquivo a Editar:**
```
src/app/destinations/[id]/page.tsx
```

### **Mudanças Necessárias:**

1. Adicionar import:
```typescript
import { notFound } from 'next/navigation';
```

2. Mudar interface de params

3. Tornar função `async`

4. `await params`

5. Usar `notFound()` em vez de renderizar erro

---

## 📊 Tabela de Referência Rápida

| Issue | Arquivo | Solução |
|-------|---------|--------|
| "Destino não encontrado" | `[id]/page.tsx` | Usar `async` + `await params` |
| Imagem não carrega | `destinations.ts` | Verificar URL Unsplash |
| Build error ao salvar | `destinations.ts` | Checar sintaxe (vírgulas, chaves) |
| Dados não aparecem | `destinations.ts` | Verificar IDs únicos |
| Filtro não funciona | `destinations/page.tsx` | Verifique lógica de filtro |

