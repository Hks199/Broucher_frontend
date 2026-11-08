export const ecommercePlans = [
  {
    name: 'Starter', desc: 'The essentials for your first online store.', price: '14,999', meta: 'Estimated delivery · 7–12 days',
    features: ['Mobile-responsive storefront', 'Shopping cart, guest checkout & COD', 'Basic search, inventory & sales reports', 'Flat-rate shipping', '1 admin training session', '15 days of bug-fix support'],
    addonNote: 'Online payment gateway: separately quoted add-on.',
  },
  {
    name: 'Business', desc: 'More ways to sell and connect with customers.', price: '29,999', meta: 'Estimated delivery · 15–25 days',
    features: ['Advanced search, filters & product variants', 'Online payments, accounts & coupons', 'Zone-based shipping', 'Google Analytics & Meta Pixel', '2 admin training sessions', '30 days of bug-fix support'],
    addonNote: 'Shipping provider integration and automated WhatsApp notifications: separately quoted add-ons.',
  },
  {
    name: 'Premium', desc: 'Advanced tools for an ambitious online business.', price: '59,999', meta: 'Estimated delivery · 25–45 days',
    features: ['Bulk product import & return/refund workflow', 'Rule-based shipping & 1 shipping provider', 'Abandoned cart recovery', 'Role-based staff accounts & blog', '3 admin training sessions', '60 days of bug-fix support'],
    addonNote: 'Automated WhatsApp notifications: separately quoted add-on.',
  },
];

// Values follow the supplied comparison: true = included, false = not included.
export const ecommerceSections = [
  { title: 'Design and storefront', rows: [
    ['Mobile responsive design', true, true, true],
    ['Home, About, Contact pages', true, true, true],
    ['Product listing and detail pages', true, true, true],
    ['Product categories', true, true, true],
    ['Product search', 'Basic', 'Advanced', 'Advanced'],
    ['Product filters', false, true, true],
    ['Wishlist', false, true, true],
    ['Product reviews and ratings', false, true, true],
    ['Custom homepage sections', false, true, true],
  ] },
  { title: 'Product management', rows: [
    ['Product upload by our team', 'Add-on', 'Add-on', 'Add-on'],
    ['Client-managed product entry*', true, true, true],
    ['Product variants (size/color)', false, true, true],
    ['Inventory management', 'Basic', true, true],
    ['Low-stock alerts', false, true, true],
    ['Bulk product import', false, false, true],
  ] },
  { title: 'Orders and payments', rows: [
    ['Shopping cart', true, true, true],
    ['Guest checkout', true, true, true],
    ['Cash on delivery', true, true, true],
    ['Online payment gateway', 'Add-on', true, true],
    ['Order management dashboard', true, true, true],
    ['Customer order history', false, true, true],
    ['Coupons and discount codes', false, true, true],
    ['Shipping rate configuration', 'Flat rate', 'Zone-based', 'Rule-based'],
    ['Shipping provider integration', false, 'Add-on', '1 provider'],
    ['Return/refund request workflow', false, false, true],
  ] },
  { title: 'Customer features', rows: [
    ['Customer registration/login', false, true, true],
    ['Customer profile and addresses', false, true, true],
    ['Email order notifications', 'Basic', true, true],
    ['WhatsApp chat button', true, true, true],
    ['Automated WhatsApp notifications', false, 'Add-on', 'Add-on'],
  ] },
  { title: 'Admin and marketing', rows: [
    ['Admin dashboard', true, true, true],
    ['Sales reports', 'Basic', 'Standard', 'Advanced'],
    ['SEO-friendly URLs/meta tags', true, true, true],
    ['Google Analytics integration', false, true, true],
    ['Meta Pixel integration', false, true, true],
    ['Abandoned cart recovery', false, false, true],
    ['Role-based staff accounts', false, false, true],
    ['Blog/content management', false, false, true],
  ] },
  { title: 'Delivery and support', rows: [
    ['SSL/HTTPS configuration', true, true, true],
    ['Basic security setup', true, true, true],
    ['Deployment assistance', true, true, true],
    ['Admin training', '1 session', '2 sessions', '3 sessions'],
    ['Bug-fix support', '15 days', '30 days', '60 days'],
  ] },
];

export const ecommerceCapacityNote = 'Clients can add products themselves through the admin panel, subject to hosting and system capacity. Product uploads by our team are not included in any package and are charged separately.';
