import { ArticleView, articleMetadata } from "@/components/sections/article-view"

const SLUG = "landing-page-vs-sitio-institucional"

export const generateMetadata = () => articleMetadata(SLUG)

export default function Page() {
  return <ArticleView slug={SLUG} serviceSlugs={["landing-pages", "institucional", "institucional-pro"]} />
}
