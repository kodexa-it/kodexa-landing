import { LegalPage, legalMetadata } from "@/components/sections/legal-page"

export const generateMetadata = () => legalMetadata("cookies")
export default function CookiesPage() {
  return <LegalPage doc="cookies" />
}
