export interface IList {
  id: string
  title: string
  itemsConfig?: {
    useTitle: boolean
    useTitleLeft: boolean
    useSubtitleLeft: boolean
    useDesc: boolean
  }
}