import { ArticleView, articleMetadata } from "@/components/sections/article-view"

const SLUG = "cuanto-cuesta-una-pagina-web-en-argentina"

export const generateMetadata = () => articleMetadata(SLUG)

export default function Page() {
  return <ArticleView slug={SLUG} serviceSlugs={["desarrollo-web", "landing-pages", "institucional"]} />
}
