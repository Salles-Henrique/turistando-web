# 🛠️ Guia Prático: Adicionar, Editar e Remover Destinos

## 📍 Editar Dados - Passo a Passo com Exemplo Real

### **Arquivo a Editar:**
```
src/data/destinations.ts
```

---

## ✨ EXEMPLO 1: Adicionar Novo Destino

### **Objetivo:** Adicionar "Santorini Islands - Greece" ao catálogo

### **Passo 1:** Abrir o arquivo `src/data/destinations.ts`

### **Passo 2:** Ir até o final do array `destinationsData`

```typescript
// Procurar por esta seção:
export const destinationsData: Destination[] = [
  { id: '1', title: 'Paraíso Tropical...', ... },
  { id: '2', title: 'Paris Romantic...', ... },
  // ... mais destinos ...
  { id: '12', title: 'Greece Island Hopping...', ... },
  // ← ADICIONAR AQUI, APÓS A ÚLTIMA VÍRGULA
];
```

### **Passo 3:** Copiar e colar este novo destino

```typescript
  {
    id: '13',
    title: 'Santorini Sunset Experience',
    location: 'Santorini',
    country: 'Greece',
    description: 'Stunning sunsets, white-washed buildings, and Mediterranean charm',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
    price: 420,
    originalPrice: 580,
    rating: 4.9,
    reviews: 520,
    duration: 5,
    category: 'beach',
  },
```

### **Passo 4:** Salvar arquivo (Ctrl+S)

### **Passo 5:** Testar
- Homepage: Novo destino aparece se estava nos primeiros 8
- `/destinations`: Novo destino aparece na lista
- `/destinations/13`: Mostra detalhes completos

---

## ❌ EXEMPLO 2: Remover um Destino

### **Objetivo:** Remover "Maldivas" (id: '5')

### **Passo 1:** Encontrar o bloco em `src/data/destinations.ts`

```typescript
// Procurar por:
  {
    id: '5',
    title: 'Maldivas Crystal Waters',
    location: 'Maldives',
    // ... resto do objeto
  },
```

### **Passo 2:** Deletar TODO o bloco (incluindo chaves `{}` e virgula)

```typescript
// ANTES:
  { id: '4', ... },
  { id: '5', title: 'Maldivas...', ... },  // ← REMOVER TUDO ISSO
  { id: '6', ... },

// DEPOIS:
  { id: '4', ... },
  { id: '6', ... },
```

### **Passo 3:** Salvar

### **Resultado:**
- `/destinations/5` → Mostra "Destino não encontrado"
- Filtros não mostram Maldivas mais

---

## ✏️ EXEMPLO 3: Editar um Destino Existente

### **Objetivo:** Mudar preço de Bali de 280 → 350 e título

### **Passo 1:** Encontrar em `src/data/destinations.ts`

```typescript
  {
    id: '1',
    title: 'Paraíso Tropical - Bali Beach Resort',
    location: 'Bali',
    country: 'Indonesia',
    description: 'Relaxation and adventure in a tropical paradise',
    image: 'https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop',
    price: 280,           // ← MUDAR PARA 350
    originalPrice: 380,   // ← MUDAR PARA 500 (se quiser)
    rating: 4.8,
    reviews: 342,
    duration: 5,
    category: 'beach',
  },
```

### **Passo 2:** Fazer as mudanças

```typescript
  {
    id: '1',
    title: 'Paraíso Tropical - Bali Luxury Resort',  // ← NOVO TÍTULO
    location: 'Bali',
    country: 'Indonesia',
    description: 'Relaxation and adventure in a tropical paradise',
    image: 'https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop',
    price: 350,          // ← NOVO PREÇO
    originalPrice: 500,  // ← NOVO DESCONTO BASE
    rating: 4.8,
    reviews: 342,
    duration: 5,
    category: 'beach',
  },
```

### **Passo 3:** Salvar

### **Resultado:**
- Homepage: Novo preço e título em Bali
- `/destinations`: Lista atualizada
- `/destinations/1`: Detalhes atualizados

---

## 🖼️ EXEMPLO 4: Mudar Imagem

### **Objetivo:** Mudar imagem de Paris para uma melhor

### **Passo 1:** Encontrar destino Paris (id: '2')

### **Passo 2:** Mudar campo `image`

```typescript
// ANTES:
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',

// DEPOIS (exemplo de nova URL):
    image: 'https://images.unsplash.com/photo-1502584898657-3e91760cbb34?w=800&h=600&fit=crop',
```

### **Como Encontrar Novas Imagens:**

1. Ir para [Unsplash.com](https://unsplash.com)
2. Buscar "Paris landmarks"
3. Copiar URL de imagem
4. Adicionar parâmetros: `?w=800&h=600&fit=crop`

**Exemplo de URL Unsplash válida:**
```
https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop
```

---

## 🆔 EXEMPLO 5: Adicionar com Nova Categoria

### **Objetivo:** Adicionar Safari na África (nova categoria?)

```typescript
  {
    id: '14',
    title: 'Safari Adventure Kenya',
    location: 'Kenya',
    country: 'Kenya',
    description: 'Experience the Great Migration and Big Five',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    price: 650,
    originalPrice: 900,
    rating: 4.8,
    reviews: 156,
    duration: 7,
    category: 'adventure',  // ← Reutiliza categoria existente
  },
```

---

## 📋 CHECKLIST ao Adicionar/Editar

```
□ ID é único (não repetido)?
□ ID é string ('5', não 5)?
□ Todos os 12 campos estão preenchidos?
□ rating está entre 0-5?
□ price é número positivo?
□ duration é número em dias?
□ category é: 'beach', 'mountain', 'city', ou 'adventure'?
□ image URL começa com https://images.unsplash.com?
□ image URL tem parâmetros ?w=800&h=600&fit=crop?
□ Arquivo foi salvo com Ctrl+S?
□ Não tem vírgula a mais ou a menos?
□ Syntax está correto (chaves {}, colchetes [])?
```

---

## ⚠️ Erros Comuns e Soluções

### **Erro 1: Build Failed - Erro de Sintaxe**

**Sintoma:**
```
Error: Expected ':' or ',' in JSON
```

**Solução:**
```typescript
// ❌ ERRADO (falta vírgula):
  { id: '1', ... }
  { id: '2', ... }  // ← Precisa de vírgula antes

// ✅ CORRETO:
  { id: '1', ... },
  { id: '2', ... },
```

---

### **Erro 2: "Destino não encontrado" ao abrir**

**Sintoma:** Clica em card, vai para `/destinations/[id]` mas mostra "Destino não encontrado"

**Possível Causa:** ID do array não existe

**Solução:**
```typescript
// Verificar IDs no array
{ id: '1', ... },  // ✅ ID '1' existe
{ id: '2', ... },  // ✅ ID '2' existe
{ id: '3', ... },  // ✅ ID '3' existe

// Se criou id: '13', funciona
// Se criou id: 'paris' (string diferente), também funciona
// MAS precisa ser consistente
```

---

### **Erro 3: Imagem não carrega**

**Sintoma:** Imagem aparece com X no lugar

**Possível Causa:** URL Unsplash inválida ou quebrada

**Solução:**
```typescript
// Testar URL:
// 1. Copiar URL completa:
https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop

// 2. Abrir em nova aba no navegador
// 3. Se não carregar, encontrar outra imagem em unsplash.com
```

---

### **Erro 4: Tipo errado para ID**

**Sintoma:** TypeScript mostra erro vermelho

**Possível Causa:** ID é number em vez de string

**Solução:**
```typescript
// ❌ ERRADO:
{ id: 1, ... }  // number

// ✅ CORRETO:
{ id: '1', ... }  // string
```

---

## 🔍 Como Verificar Dados Atuais

### **Contar quantos destinos existem:**

No arquivo `src/data/destinations.ts`:
```typescript
export const destinationsData: Destination[] = [
  // Contar cada bloco { ... },
  // Deve ter 12 blocos atualmente
];

console.log(destinationsData.length); // Mostra: 12
```

---

### **Listar todos os IDs:**

```typescript
// Colocar no console do navegador (F12):
Object.keys(destinationsData).forEach(i => {
  console.log(`${i}: '${destinationsData[i].id}' - ${destinationsData[i].title}`);
});

// Mostra:
// 0: '1' - Paraíso Tropical
// 1: '2' - Paris Romantic
// ...
```

---

## 🚀 Workflow Recomendado

### **Para Adicionar Novo Destino:**

```
1. Abrir: src/data/destinations.ts
2. Ir até o final do array
3. Copiar o último bloco { ... },
4. Colar após a última vírgula
5. Mudar: id (incrementar), todos os dados
6. Salvar (Ctrl+S)
7. Testar: npm run build
8. Verificar em /destinations e /destinations/[novo-id]
```

### **Para Remover:**

```
1. Encontrar o bloco com o id
2. Deletar TODO (incluindo chaves e vírgula)
3. Salvar
4. Testar
```

### **Para Editar:**

```
1. Encontrar o bloco
2. Editar campos específicos
3. Não mudar o id (senão quebra links existentes)
4. Salvar
5. Testar
```

