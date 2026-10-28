import { LegalPage, legalMetadata } from "@/components/sections/legal-page"

export const generateMetadata = () => legalMetadata("privacy")
export default function PrivacyPage() {
  return <LegalPage doc="privacy" />
}
