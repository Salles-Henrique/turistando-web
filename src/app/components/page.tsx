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
 * COMPONENTS SHOWCASE PAGE
 * 
 * This file demonstrates all available TURISTANDO design system components
 * with practical examples following the brand guidelines.
 */

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="mb-20">
          <h1 className="text-7xl font-heading text-primary mb-4">
            Components Showcase
          </h1>
          <p className="text-xl text-gray-600">
            TURISTANDO design system in action
          </p>
        </section>

        {/* Button Variants */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Button Component
          </h2>

          {/* Primary Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Primary Variant (Main CTAs)
            </h3>
            <ButtonGroup>
              <Button variant="primary" size="sm">
                Small Button
              </Button>
              <Button variant="primary" size="md">
                Medium Button
              </Button>
              <Button variant="primary" size="lg">
                Large Button
              </Button>
              <Button variant="primary" size="xl">
                Extra Large
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

          {/* Outline Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Outline Variant (Alternative Primary)
            </h3>
            <ButtonGroup>
              <Button variant="outline" size="md">
                Outline Button
              </Button>
              <Button variant="outline" size="lg">
                Larger Outline
              </Button>
            </ButtonGroup>
          </div>

          {/* Ghost Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Ghost Variant (Minimal)
            </h3>
            <ButtonGroup>
              <Button variant="ghost" size="md">
                Ghost Button
              </Button>
            </ButtonGroup>
          </div>

          {/* States */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Button States
            </h3>
            <ButtonGroup>
              <Button variant="primary" size="lg">
                Normal State
              </Button>
              <Button variant="primary" size="lg" disabled>
                Disabled State
              </Button>
              <Button variant="primary" size="lg" isLoading>
                Loading State
              </Button>
            </ButtonGroup>
          </div>

          {/* Full Width */}
          <div>
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Full Width (Mobile)
            </h3>
            <Button
              variant="primary"
              size="lg"
              fullWidth
            >
              Full Width Button
            </Button>
          </div>
        </section>

        {/* Card Variants */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading text-primary mb-8">
            Card Component
          </h2>

          {/* Default Card */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Default Variant
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardSubtitle>With border and subtle shadow</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  This is the basic card variant, perfect for general content
                  display with a professional appearance.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Elevated Card */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Elevated Variant (Floating)
            </h3>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardSubtitle>With strong shadow for emphasis</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Use this variant for featured content that needs to stand out
                  with a floating appearance.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Outlined Card */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Outlined Variant (Emphasis)
            </h3>
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardSubtitle>Primary color border for focus</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Perfect for highlighting important cards or featured sections
                  with the primary brand color.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Accent Card */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Accent Variant (Special)
            </h3>
            <Card variant="accent">
              <CardHeader>
                <CardTitle>Accent Card</CardTitle>
                <CardSubtitle>Light background with accent color</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  Use this for special promotions, announcements, or featured
                  content.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Card with Image */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Card with Image
            </h3>
            <Card>
              <CardImage
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop"
                alt="Destination"
                height="h-56"
              />
              <CardHeader>
                <CardTitle>Paris, France</CardTitle>
                <CardSubtitle>City of Light & Romance</CardSubtitle>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Discover the beauty, culture, and cuisine of Paris.
                </p>
                <div className="flex gap-6">
                  <CardStat label="Rating" value="4.8" icon="⭐" />
                  <CardStat label="Reviews" value="2,341" icon="💬" />
                  <CardStat label="Price" value="$1,299" icon="💰" />
                </div>
              </CardBody>
              <CardFooter>
                <ButtonGroup orientation="horizontal">
                  <Button variant="outline" fullWidth>
                    View Details
                  </Button>
                  <Button variant="primary" fullWidth>
                    Book Now
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>

          {/* Interactive Card */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading text-gray-900 mb-6">
              Interactive Card (Hoverable)
            </h3>
            <Card hoverable clickable>
              <CardBody>
                <p className="text-gray-600">
                  Hover over this card to see the interactive state with shadow
                  and color changes.
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
