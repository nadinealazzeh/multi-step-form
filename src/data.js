import arcadeIcon from './assets/images/icon-arcade.svg'
import advancedIcon from './assets/images/icon-advanced.svg'
import proIcon from './assets/images/icon-pro.svg'

export const PLANS = [
  { id: 'arcade', name: 'Arcade', icon: arcadeIcon, monthly: 9, yearly: 90 },
  { id: 'advanced', name: 'Advanced', icon: advancedIcon, monthly: 12, yearly: 120 },
  { id: 'pro', name: 'Pro', icon: proIcon, monthly: 15, yearly: 150 },
]

export const ADDONS = [
  {
    id: 'online',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 'storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 'profile',
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20,
  },
]

export const STEPS = [
  { number: 1, label: 'Your info' },
  { number: 2, label: 'Select plan' },
  { number: 3, label: 'Add-ons' },
  { number: 4, label: 'Summary' },
]

export const priceOf = (item, yearly) => (yearly ? item.yearly : item.monthly)

export const formatPrice = (amount, yearly, { plus = false } = {}) =>
  `${plus ? '+' : ''}$${amount}/${yearly ? 'yr' : 'mo'}`
