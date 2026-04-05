'use client';

import { Button, ButtonGroup } from '@/components/common/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardImage,
  CardStat,
  CardGrid,
} from '@/components/common/Card';

/**
 * PÁGINA DE DEMONSTRAÇÃO DE COMPONENTES
 * 
 * Este arquivo demonstra todos os componentes disponíveis do sistema de design TURISTANDO
 * com exemplos práticos seguindo as diretrizes da marca.
 */

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <section className="mb-20">
          <h1 className="text-7xl font-heading text-primary mb-4">
            Demonstração de Componentes
          </h1>
          <p className="text-xl text-gray-600">
            Sistema de design TURISTANDO em ação
          </p>
        </section>

        {/* Variantes de Botão */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Componente Botão
          </h2>

          {/* Botões Primários */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Primária (CTAs Principais)
            </h3>
            <ButtonGroup>
              <Button variant="primary" size="sm">
                Botão Pequeno
              </Button>
              <Button variant="primary" size="md">
                Botão Médio
              </Button>
              <Button variant="primary" size="lg">
                Botão Grande
              </Button>
              <Button variant="primary" size="xl">
                Extra Grande
              </Button>
            </ButtonGroup>
          </div>

          {/* Secondary Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Secondary Variant (Secondary Actions)
            </h3>
            <ButtonGroup>
              <Button variant="secondary" size="md">
                Secondary Button
              </Button>
              <Button variant="secondary" size="lg">
                Secondary Larger
              </Button>
            </ButtonGroup>
          </div>

          {/* Accent Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Accent Variant (Informational)
            </h3>
            <ButtonGroup>
              <Button variant="accent" size="md">
                Accent Button
              </Button>
            </ButtonGroup>
          </div>

          {/* Support Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Support Variant (Tertiary Actions)
            </h3>
            <ButtonGroup>
              <Button variant="support" size="md">
                Support Button
              </Button>
            </ButtonGroup>
          </div>

          {/* Botões com Contorno */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Contorno (Primário Alternativo)
            </h3>
            <ButtonGroup>
              <Button variant="outline" size="md">
                Botão com Contorno
              </Button>
              <Button variant="outline" size="lg">
                Contorno Maior
              </Button>
            </ButtonGroup>
          </div>

          {/* Botões Fantasma */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Fantasma (Minimalista)
            </h3>
            <ButtonGroup>
              <Button variant="ghost" size="md">
                Botão Fantasma
              </Button>
            </ButtonGroup>
          </div>

          {/* Estados */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Estados do Botão
            </h3>
            <ButtonGroup>
              <Button variant="primary" size="lg">
                Estado Normal
              </Button>
              <Button variant="primary" size="lg" disabled>
                Estado Desabilitado
              </Button>
              <Button variant="primary" size="lg" isLoading>
                Estado de Carregamento
              </Button>
            </ButtonGroup>
          </div>

          {/* Largura Total */}
          <div>
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Largura Total (Móvel)
            </h3>
            <Button
              variant="primary"
              size="lg"
              fullWidth
            >
              Botão Largura Total
            </Button>
          </div>
        </section>

        {/* Card Variants */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Componente Card
          </h2>

          {/* Card Padrão */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Padrão
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Card Padrão</CardTitle>
                <CardSubtitle>Com borda e sombra sutil</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Esta é a variante básica do card, perfeita para exibir
                  conteúdo geral com uma aparência profissional.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Card Elevado */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Elevada (Flutuante)
            </h3>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Card Elevado</CardTitle>
                <CardSubtitle>Com sombra forte para destaque</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Use esta variante para conteúdo em destaque que precisa se
                  destacar com uma aparência flutuante.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Card com Contorno */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante com Contorno (Énfase)
            </h3>
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Card com Contorno</CardTitle>
                <CardSubtitle>Borda com cor primária para foco</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Perfeito para destacar cards importantes ou seções
                  em destaque com a cor de marca primária.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Card de Énfase */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Variante Énfase (Especial)
            </h3>
            <Card variant="accent">
              <CardHeader>
                <CardTitle>Card de Énfase</CardTitle>
                <CardSubtitle>Fundo claro com cor de destaque</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Use esta opção para promoções especiais, anúncios ou
                  conteúdo em destaque.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Card com Imagem */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Card com Imagem
            </h3>
            <Card>
              <CardImage
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop"
                alt="Destino"
                height="h-56"
              />
              <CardHeader>
                <CardTitle>Paris, França</CardTitle>
                <CardSubtitle>Cidade da Luz e Romance</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Descubra a beleza, cultura e culinária de Paris.
                </p>
                <div className="flex gap-6">
                  <CardStat label="Classificação" value="4.8" icon="⭐" />
                  <CardStat label="Avaliações" value="2.341" icon="💬" />
                  <CardStat label="Preço" value="R$ 1.299" icon="💰" />
                </div>
              </CardBody>
              <CardFooter>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline" fullWidth>
                    Ver Detalhes
                  </Button>
                  <Button variant="primary" fullWidth>
                    Reservar Agora
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>

          {/* Card Interativo */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Card Interativo (Hover)
            </h3>
            <Card hoverable clickable>
              <CardBody>
                <p className="text-gray-600">
                  Passe o mouse sobre este card para ver o estado interativo
                  com mudanças de sombra e cor.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Card Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Card Grid Layout
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Responsive 3-column grid on desktop, 2 on tablet, 1 on mobile
          </p>

          <CardGrid columns={3} gap={6}>
            {[1, 2, 3, 4, 5, 6].map(index => (
              <Card key={index}>
                <CardImage
                  src={`https://images.unsplash.com/photo-${
                    1488646953014 + index
                  }?w=400&h=200&fit=crop`}
                  alt={`Card ${index}`}
                  height="h-48"
                />
                <CardBody>
                  <h4 className="text-lg font-bold mb-2">
                    Destination {index}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore amazing places and create unforgettable memories
                  </p>
                  <Button variant="outline" fullWidth size="sm">
                    Explore
                  </Button>
                </CardBody>
              </Card>
            ))}
          </CardGrid>
        </section>

        {/* Color Palette Display */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Primary */}
            <div>
              <div className="h-32 bg-primary rounded-lg mb-2 shadow-md" />
              <p className="font-bold text-gray-900">Primary</p>
              <p className="text-sm text-gray-600">#116973</p>
            </div>

            {/* Secondary */}
            <div>
              <div className="h-32 bg-secondary rounded-lg mb-2 shadow-md" />
              <p className="font-bold text-gray-900">Secondary</p>
              <p className="text-sm text-gray-600">#F1BB19</p>
            </div>

            {/* Accent */}
            <div>
              <div className="h-32 bg-accent rounded-lg mb-2 shadow-md" />
              <p className="font-bold text-gray-900">Accent</p>
              <p className="text-sm text-gray-600">#8CCDF2</p>
            </div>

            {/* Support */}
            <div>
              <div className="h-32 bg-support rounded-lg mb-2 shadow-md" />
              <p className="font-bold text-gray-900">Support</p>
              <p className="text-sm text-gray-600">#976A26</p>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-4xl font-heading text-primary mb-8">
            Gradient Backgrounds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Gradient */}
            <div className="h-40 bg-gradient-primary rounded-xl shadow-lg flex items-center justify-center">
              <p className="text-white text-2xl font-heading">
                Primary Gradient
              </p>
            </div>

            {/* Ocean Gradient */}
            <div className="h-40 bg-gradient-ocean rounded-xl shadow-lg flex items-center justify-center">
              <p className="text-white text-2xl font-heading">
                Ocean Gradient
              </p>
            </div>

            {/* Warm Gradient */}
            <div className="h-40 bg-gradient-warm rounded-xl shadow-lg flex items-center justify-center">
              <p className="text-white text-2xl font-heading">
                Warm Gradient
              </p>
            </div>

            {/* Secondary Gradient */}
            <div className="h-40 bg-gradient-secondary rounded-xl shadow-lg flex items-center justify-center text-gray-900">
              <p className="text-2xl font-heading">
                Secondary Gradient
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
