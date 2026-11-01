import { ArticleView, articleMetadata } from "@/components/sections/article-view"

const SLUG = "sitio-web-vs-aplicacion-web"

export const generateMetadata = () => articleMetadata(SLUG)

export default function Page() {
  return <ArticleView slug={SLUG} serviceSlugs={["plataformas-digitales", "software-a-medida", "mvp"]} />
}
