import Home from "../page";
import { SECTION_PATHS } from "@/lib/constants";

export function generateStaticParams() {
  return SECTION_PATHS.map((path) => ({ section: path }));
}

export default function SectionPage() {
  return <Home />;
}
