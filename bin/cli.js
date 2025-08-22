#!/usr/bin/env node
import { Command } from "commander";
import execa from "execa";
import chalk from "chalk";
import fs from "fs-extra";

const program = new Command();

program
  .name("shadnext")
  .description("Create a new Next.js app with shadcn/ui pre-configured")
  .argument("[project-name]", "project name", "my-nextjs-app")
  .action(async (projectName) => {
    try {
      console.log(chalk.blue(`🚀 Creating ${projectName}...`));

      // 1. Bootstrap Next.js with all flags (no questions)
      await execa(
        "npx",
        [
          "create-next-app@latest",
          projectName,
          "--typescript",
          "--tailwind",
          "--eslint",
          "--app",
          "--src-dir",
          "--import-alias",
          "@/*",
          "--yes",
        ],
        { stdio: "inherit" }
      );

      process.chdir(projectName);

      

      // 3. Initialize shadcn/ui config
      await execa("npx", ["shadcn@latest", "init", "--yes"], { stdio: "inherit" });

      // 4. Add a few starter components
      console.log(chalk.blue("✨ Adding base UI components..."));
      await execa("npx", ["shadcn@latest", "add", "button", "card", "badge"], {
        stdio: "inherit",
      });

      // 5. Replace default homepage with demo
      const demo = `import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-12">
          {/* Hero Section */}
          <div className="text-center max-w-4xl space-y-8">
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              Next.js + shadcn/ui Starter
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Build Faster with Confidence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A production-ready Next.js setup with shadcn/ui components. Minimal, modern, and designed for scaling
              without the clutter.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
            <Card className="border-border hover:shadow-md transition-shadow duration-200">
              <CardHeader className="text-center space-y-3 p-6">
                <div className="text-2xl">🚀</div>
                <CardTitle className="text-xl font-semibold">Fast Setup</CardTitle>
                <CardDescription className="text-base">
                  TypeScript, Tailwind, and shadcn/ui configured out of the box.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow duration-200">
              <CardHeader className="text-center space-y-3 p-6">
                <div className="text-2xl">🎨</div>
                <CardTitle className="text-xl font-semibold">Clean UI</CardTitle>
                <CardDescription className="text-base">
                  Accessible, modern design system with dark mode support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow duration-200">
              <CardHeader className="text-center space-y-3 p-6">
                <div className="text-2xl">⚡</div>
                <CardTitle className="text-xl font-semibold">Dev-Ready</CardTitle>
                <CardDescription className="text-base">
                  Pre-configured with ESLint, TypeScript, and best practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="px-8 py-3 text-base font-medium" asChild>
              <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                Study Next.js 
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-medium bg-transparent" asChild>
              <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                Study Shadcn/ui
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <footer className="pt-16 text-center space-y-3 border-t border-border mt-16 w-full max-w-4xl">
            <p className="text-sm text-muted-foreground">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/rehanali67"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline transition-colors"
              >
                Rehan Ali
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">Powered by Next.js · shadcn/ui · Tailwind CSS</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
`;
      await fs.writeFile("src/app/page.tsx", demo);

      console.log(chalk.green("✅ Done!"));
      console.log(chalk.yellow("\nNext steps:"));
      console.log(`  cd ${projectName}`);
      console.log("  npm run dev");
    } catch (err) {
      console.error(chalk.red("❌ Error:"), err);
      process.exit(1);
    }
  });

program.parse();
