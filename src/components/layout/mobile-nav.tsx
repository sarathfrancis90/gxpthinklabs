"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNav } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="md:hidden h-10 w-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-surface-container-lowest dark:bg-surface-container border-l border-outline-variant/20 dark:border-outline-variant/30 shadow-2xl"
              >
                <VisuallyHidden.Root>
                  <Dialog.Title>Navigation menu</Dialog.Title>
                  <Dialog.Description>Main navigation links for GXPThinklabs</Dialog.Description>
                </VisuallyHidden.Root>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
                  <span className="text-lg font-bold tracking-tighter text-on-surface">
                    GXPThinklabs
                  </span>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Dialog.Close asChild>
                      <button
                        className="h-9 w-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col p-6 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
                  {mainNav.map((item, index) => {
                    if (item.children) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            className={cn(
                              "flex items-center justify-between w-full py-4 text-left text-base font-medium transition-colors",
                              isActive("/services")
                                ? "text-primary"
                                : "text-on-surface-variant hover:text-on-surface"
                            )}
                            onClick={() => setServicesExpanded(!servicesExpanded)}
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                servicesExpanded && "rotate-180"
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {servicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pb-2 space-y-1 border-l-2 border-outline-variant/30 ml-2">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={cn(
                                        "block py-3 px-3 rounded-lg text-sm transition-colors",
                                        isActive(child.href)
                                          ? "bg-primary/10 text-primary font-medium"
                                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50"
                                      )}
                                      onClick={() => setOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-4 text-base font-medium transition-colors",
                            isActive(item.href)
                              ? "text-primary"
                              : "text-on-surface-variant hover:text-on-surface"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-outline-variant/20 dark:border-outline-variant/30 bg-surface-container-lowest dark:bg-surface-container">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
