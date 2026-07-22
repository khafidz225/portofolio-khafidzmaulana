"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-11 rounded-full px-2 text-muted-foreground hover:bg-muted hover:text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden" aria-hidden="true" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" aria-hidden="true" />
    </Button>
  );
}
