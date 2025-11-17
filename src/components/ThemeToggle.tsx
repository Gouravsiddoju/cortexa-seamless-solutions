import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// No internal state needed

// 1. Define the props
interface ThemeToggleProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

// 2. Use the props
const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  
  return (
    <nav className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50">
      <Button
        onClick={toggleTheme} // 3. Call prop function
        variant="outline"
        size="icon"
        className="glass-effect hover:bg-primary/10 transition-all duration-300"
      >
        {/* 4. Read theme from prop */}
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </Button>
    </nav>
  );
};

export default ThemeToggle;