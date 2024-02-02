export interface ArticlesProps {
  id: string,
  url: string,
  lang: string,
  title: {
    short: string,
  },
  description: {
    intro: string,
  },
  banner: string,
}