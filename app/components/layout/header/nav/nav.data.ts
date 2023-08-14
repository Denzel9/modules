export interface Menu {
  title: string
  link: string
  styles?: string | undefined
}

export const navData = [
  { title: 'Модульная продукция', link: '/modules' },
  { title: 'Услуги', link: '/Properties' },
  { title: 'О компании', link: '/Buy' },
  { title: 'Клиентам', link: '/Sell' },
  { title: 'Контакты', link: '/Rent' },
]
export const subNavData = [
  { title: 'Заказать звонок', link: '/Login' },
  { title: 'Пригласить на тендер', link: '/Get started', styles: 'bg-green text-white' },
]
