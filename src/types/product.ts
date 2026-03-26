export interface Product {
  id: string
  title: string
  subtitle: string
  image: string
  buttonText: string
  category: 'tentaciones' | 'postres' | 'tortas'
}

export interface ProductData {
  featured: Product[]
  catalog: Product[]
}
