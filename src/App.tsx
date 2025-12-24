import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { ThemeToggle } from "./components/ThemeToggle";
// atau gunakan SimpleThemeToggle untuk versi sederhana
// import { SimpleThemeToggle } from "./components/simple-theme-toggle";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header dengan Toggle */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold text-foreground">My Portfolio</h1>
          <ThemeToggle />
          {/* atau <SimpleThemeToggle /> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Testing TweakCN Theme
            </h2>
            <p className="text-muted-foreground">
              Try switching between light and dark mode using the toggle button
              above!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a card with proper theming applied
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is card content with proper theming. The colors will change
                based on your selected theme.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-background border"></div>
                <p className="text-xs text-center">Background</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-foreground"></div>
                <p className="text-xs text-center">Foreground</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary"></div>
                <p className="text-xs text-center">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary"></div>
                <p className="text-xs text-center">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-muted"></div>
                <p className="text-xs text-center">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent"></div>
                <p className="text-xs text-center">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-destructive"></div>
                <p className="text-xs text-center">Destructive</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-card border"></div>
                <p className="text-xs text-center">Card</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
