"use client";

import type { ReactNode } from "react";

type SeparatorItem = {
  name?: ReactNode;
};

export function DocsSidebarSeparator({ item }: { item: SeparatorItem }) {
  return (
    <p className="mt-6 mb-1 inline-flex items-center px-2 text-fd-muted-foreground first:mt-0">
      <span>{item.name}</span>
    </p>
  );
}
