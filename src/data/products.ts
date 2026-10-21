export type Product = {
  id: string;
  name: string;
  category: '灯具' | '织物' | '装饰' | '餐具' | '收纳';
  priceCents: number;
  description: string;
  details: string[];
  art: 'lamp' | 'throw' | 'vase' | 'glasses' | 'tray' | 'clock' | 'cushion' | 'basket';
  featured: number;
  color: string;
};

export const products: Product[] = [
  {
    id: 'arc-table-lamp', name: '弧光台灯', category: '灯具', priceCents: 8900,
    description: '柔和暖光，陪你度过安静的居家时刻。',
    details: ['粉末涂层金属灯体', '附暖白光 LED 灯泡', '约 30 × 18 厘米'],
    art: 'lamp', featured: 1, color: 'sage',
  },
  {
    id: 'soft-weave-throw', name: '柔织盖毯', category: '织物', priceCents: 6400,
    description: '轻松披上身的柔软触感，适合每天使用。',
    details: ['100% 纯棉', '可机洗', '约 127 × 152 厘米'],
    art: 'throw', featured: 2, color: 'sand',
  },
  {
    id: 'terra-ceramic-vase', name: '陶土花瓶', category: '装饰', priceCents: 4800,
    description: '有雕塑感的陶器，插花或单独摆放都很好看。',
    details: ['手工修饰的炻器', '内壁防渗水', '高约 23 厘米'],
    art: 'vase', featured: 3, color: 'peach',
  },
  {
    id: 'ripple-glass-set', name: '涟漪玻璃杯套装', category: '餐具', priceCents: 3800,
    description: '带一点纹理巧思，让日常饮水也有仪式感。',
    details: ['四只装', '可用洗碗机清洗', '每只约 355 毫升'],
    art: 'glasses', featured: 4, color: 'blue',
  },
  {
    id: 'form-desk-tray', name: '原木桌面托盘', category: '收纳', priceCents: 3200,
    description: '给钥匙、耳机和每天随手拿的小物件一个位置。',
    details: ['实心白蜡木', '天然木油饰面', '约 25 × 15 厘米'],
    art: 'tray', featured: 5, color: 'clay',
  },
  {
    id: 'still-wall-clock', name: '静时挂钟', category: '装饰', priceCents: 7200,
    description: '简洁的轮廓，让房间多一分从容。',
    details: ['静音扫秒机芯', '电池供电', '直径约 28 厘米'],
    art: 'clock', featured: 6, color: 'cream',
  },
  {
    id: 'cloud-cotton-cushion', name: '云感棉靠垫', category: '织物', priceCents: 4400,
    description: '柔软的纹理和耐看的颜色，留给你最喜欢的角落。',
    details: ['棉质外套', '含可取出的枕芯', '约 46 × 46 厘米'],
    art: 'cushion', featured: 7, color: 'olive',
  },
  {
    id: 'woven-market-basket', name: '手编收纳篮', category: '收纳', priceCents: 5900,
    description: '自然的编织质感，让随手收纳也成为房间的一部分。',
    details: ['天然纤维手工编织', '加固提手', '约 38 × 28 厘米'],
    art: 'basket', featured: 8, color: 'honey',
  },
];

export const productsById = new Map(products.map((product) => [product.id, product]));
export const categories = ['全部', ...new Set(products.map((product) => product.category))];
