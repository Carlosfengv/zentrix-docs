import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsSidebarSeparator } from "@/components/docs-sidebar-separator";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      sidebar={{
        className: "border-none",
        collapsible: false,
        components: { Separator: DocsSidebarSeparator },
        tabs: false,
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
