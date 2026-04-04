# 🚀 Guia: Como Conectar ao GitHub

Este documento descreve como conectar seu projeto local ao repositório GitHub.

## 📋 Pré-requisitos

- Git instalado e configurado
- Conta GitHub ativa
- SSH keys configuradas (recomendado) ou Personal Access Token

## ✅ Status do Repositório Local

```
✓ Git inicializado
✓ Estrutura MVP criada
✓ Commit inicial realizado (hash: 6ea6052)
✓ .gitignore otimizado para MVP
✓ 17 arquivos commitados
✓ 1.571 linhas de código adicionadas
```

## 🔧 Passos para Conectar ao GitHub

### 1. Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os campos:
   - **Repository name**: `turistando-web`
   - **Description**: `Travel booking platform built with Next.js 15, TypeScript & Tailwind CSS`
   - **Visibility**: Public (ou Private como preferir)
   - **Initialize with**: Deixe desmarcado (já temos commits locais)
3. Clique em "Create repository"

Você receberá uma URL como:
```
https://github.com/seu-usuario/turistando-web.git
```

### 2. Adicionar Repositório Remoto

No terminal, na pasta do projeto:

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/seu-usuario/turistando-web.git

# Verificar se foi adicionado corretamente
git remote -v
```

Saída esperada:
```
origin  https://github.com/seu-usuario/turistando-web.git (fetch)
origin  https://github.com/seu-usuario/turistando-web.git (push)
```

### 3. Push para GitHub (HTTPS)

```bash
# Fazer push da branch master
git push -u origin master
```

Você será solicitado a entrar com suas credenciais do GitHub.

### 3b. Push para GitHub (SSH - Alternativa)

Se usar SSH, configure a URL:

```bash
# Trocar HTTPS por SSH
git remote set-url origin git@github.com:seu-usuario/turistando-web.git

# Fazer push
git push -u origin master
```

## 🔐 Autenticação Segura

### Opção 1: Personal Access Token (Recomendado)

1. No GitHub: Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Gerar novo token com escopos: `repo`, `workflow`
3. Copiar o token
4. No terminal:
   ```bash
   git push -u origin master
   # Usar seu usuário como nome e token como senha
   ```

### Opção 2: SSH Keys

1. Gerar SSH key (se não tiver):
   ```bash
   ssh-keygen -t ed25519 -C "seu-email@example.com"
   ```

2. Adicionar chave pública ao GitHub:
   - Settings → SSH and GPG keys → New SSH key
   - Colar conteúdo de `~/.ssh/id_ed25519.pub`

3. Configurar Git:
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu-email@example.com"
   ```

## 📤 Verificar Push Bem-sucedido

```bash
# Listar branches remotas
git branch -a

# Verificar histórico
git log --oneline
```

Você deve ver `origin/master` apontando para o mesmo commit.

## 📝 Configurações Recomendadas no GitHub

### 1. Branch Protection (Recommended)

Settings → Branches → Add rule

- Branch name pattern: `master` ou `main`
- Require pull request reviews before merging
- Require status checks to pass

### 2. Secrets e Variables

Como este é MVP, ainda não há secrets para adicionar. Quando adicionar:

Settings → Secrets and variables → Actions

Exemplos para o futuro:
- `DATABASE_URL`
- `API_SECRET_KEY`
- `STRIPE_SECRET_KEY`

### 3. GitHub Actions (Opcional para futuro)

Criar workflow em `.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run build
```

## 🎯 Próximos Passos

1. ✅ Conectar ao GitHub (este documento)
2. Configurar colaboradores se necessário
3. Implementar features baseado na roadmap
4. Configurar CI/CD com GitHub Actions
5. Configurar staging/production branches

## 🐛 Troubleshooting

### Erro: "fatal: No configured push destination"

```bash
git push -u origin master
```

### Erro: "Permission denied (publickey)"

Verifique SSH:
```bash
ssh -T git@github.com
```

### Erro: "Authentication failed"

Use Personal Access Token ao invés de senha de conta.

## 📚 Referências

- [GitHub Docs - Adding locally hosted code to GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Status**: ✅ Repositório local pronto para GitHub  
**Commit Hash**: `6ea6052`  
**Data**: Abril 2026
