export interface WindowState {
  id: string
  title: string
  app: string
  x: number
  y: number
  width: number
  height: number
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  content?: React.ReactNode
}

export interface App {
  id: string
  name: string
  icon: string
  component: React.ComponentType<any>
  defaultSize?: { width: number; height: number }
  defaultPosition?: { x: number; y: number }
}

