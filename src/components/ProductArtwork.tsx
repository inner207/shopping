import type { Product } from '../data/products';
import styles from './ProductArtwork.module.css';

export function ProductArtwork({ product, className = '' }: { product: Product; className?: string }) {
  const common = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  let object;
  switch (product.art) {
    case 'lamp':
      object = <>
        <ellipse cx="210" cy="344" rx="106" ry="15" fill="#506252" opacity=".14" />
        <path d="M156 135h108l26 92H130z" fill="#f1eee3" stroke="#334b42" strokeWidth="7" {...common} />
        <path d="M166 134c2-30 19-45 44-45s42 15 44 45" fill="none" stroke="#334b42" strokeWidth="7" />
        <path d="M210 227v100M168 330h84" stroke="#334b42" strokeWidth="10" {...common} />
        <path d="M138 230h144" stroke="#c6a66d" strokeWidth="7" {...common} />
        <circle cx="210" cy="179" r="7" fill="#d6b273" opacity=".8" />
      </>;
      break;
    case 'throw':
      object = <>
        <ellipse cx="208" cy="340" rx="125" ry="16" fill="#8c795e" opacity=".15" />
        <path d="M102 139c36-18 85-11 129 4l101 42-38 155c-64-2-127-25-183-47z" fill="#d2b79a" />
        <path d="M100 140c60-2 119 25 169 47l-35 124c-54-5-95-29-123-50z" fill="#ead9c1" />
        <path d="M122 148c44 9 88 25 126 44M113 184c43 8 88 25 125 43M106 222c42 9 84 25 122 43" stroke="#c7ae8f" strokeWidth="5" opacity=".75" />
        <path d="M112 292l-6 23m19-17-5 25m19-20-3 25m18-20-2 25m18-19-1 25m18-19 1 25m16-18 3 24" stroke="#d2b79a" strokeWidth="4" {...common} />
      </>;
      break;
    case 'vase':
      object = <>
        <ellipse cx="212" cy="344" rx="103" ry="14" fill="#a9634e" opacity=".17" />
        <path d="M173 113c3 33-8 47-24 68-12 16-25 33-23 67 3 61 36 94 85 94s84-33 85-94c1-34-11-51-23-67-17-21-27-35-24-68z" fill="#ca805e" />
        <path d="M174 113h75" stroke="#9d5e45" strokeWidth="12" {...common} />
        <path d="M166 155c27 12 62 12 90 0M142 220c45 16 96 16 137 0M142 289c46 16 92 16 138 0" stroke="#dfaa8c" strokeWidth="4" opacity=".65" fill="none" />
        <path d="M205 115c-17-48-14-77 13-99m0 96c6-39 25-59 56-76" stroke="#5d6f53" strokeWidth="5" fill="none" {...common} />
        <path d="M212 53c-25-8-33-26-29-46 26 4 37 21 29 46Zm33 10c27-18 39-37 37-58-31 5-46 26-37 58Z" fill="#7f9470" />
      </>;
      break;
    case 'glasses':
      object = <>
        <ellipse cx="210" cy="341" rx="128" ry="15" fill="#52717e" opacity=".13" />
        {[0, 1, 2].map((i) => <g key={i} transform={`translate(${91 + i * 79} ${i === 1 ? 102 : 121})`}>
          <path d="M0 0h69l-9 168c-2 28-14 39-26 39S10 196 8 168z" fill="#d7e7e6" fillOpacity=".63" stroke="#7296a0" strokeWidth="5" />
          <path d="M4 58h61M8 103h54M11 148h48" stroke="#9abdc1" strokeWidth="3" opacity=".7" />
          <ellipse cx="35" cy="1" rx="35" ry="7" fill="none" stroke="#7296a0" strokeWidth="5" />
        </g>)}
      </>;
      break;
    case 'tray':
      object = <>
        <ellipse cx="209" cy="338" rx="146" ry="18" fill="#87614b" opacity=".17" />
        <path d="M66 231c0-21 23-36 51-36h184c28 0 51 15 51 36v53c0 26-23 45-51 45H117c-28 0-51-19-51-45z" fill="#9d6e50" />
        <path d="M66 229c0-21 23-36 51-36h184c28 0 51 15 51 36s-23 37-51 37H117c-28 0-51-16-51-37Z" fill="#bb8b65" stroke="#815b45" strokeWidth="5" />
        <path d="M105 233c39-15 101-18 160-8M153 250c57-14 128-8 167-18" stroke="#d2a985" strokeWidth="4" opacity=".7" fill="none" />
        <circle cx="161" cy="204" r="28" fill="#d9d1bd" stroke="#736e61" strokeWidth="5" />
        <path d="M238 198c0-26 43-35 57-11l-2 37h-53z" fill="#536452" />
        <path d="M250 198h33" stroke="#82967d" strokeWidth="5" />
      </>;
      break;
    case 'clock':
      object = <>
        <ellipse cx="210" cy="345" rx="116" ry="13" fill="#77746a" opacity=".12" />
        <circle cx="210" cy="207" r="127" fill="#d8d3c4" stroke="#77766b" strokeWidth="8" />
        <circle cx="210" cy="207" r="109" fill="#f5f1e7" />
        <path d="M210 117v14m90 76h-14m-76 90v-14m-90-76h14" stroke="#8b887d" strokeWidth="6" {...common} />
        <path d="M210 207v-58m0 58 44 27" stroke="#46534b" strokeWidth="8" {...common} />
        <circle cx="210" cy="207" r="8" fill="#46534b" />
      </>;
      break;
    case 'cushion':
      object = <>
        <ellipse cx="211" cy="340" rx="125" ry="17" fill="#66745c" opacity=".16" />
        <path d="M111 125c50-16 154-16 202 0 23 57 23 144 0 199-51 18-151 18-202 0-23-55-23-142 0-199Z" fill="#7b8a6d" stroke="#5e6d56" strokeWidth="5" />
        <path d="M127 142c41-13 124-13 170 0 17 46 17 119 0 166-49 14-122 14-170 0-17-47-17-120 0-166Z" fill="#9aaa87" />
        <path d="M134 150c43 17 106 22 156 0M130 304c49-21 112-21 161 0" stroke="#bac7a9" strokeWidth="4" fill="none" />
        <path d="M170 150v157m83-157v157" stroke="#8b9c7b" strokeWidth="3" opacity=".65" />
      </>;
      break;
    case 'basket':
      object = <>
        <ellipse cx="208" cy="343" rx="128" ry="16" fill="#92744d" opacity=".17" />
        <path d="M117 172c-2-58 28-83 55-69 19 11 22 40 19 69m39 0c-3-29 0-58 19-69 27-14 57 11 55 69" fill="none" stroke="#92744f" strokeWidth="15" {...common} />
        <path d="M90 177h240l-26 149H116z" fill="#c5a074" stroke="#8f704d" strokeWidth="6" {...common} />
        <path d="M112 221h195m-186 40h177m-165 39h152" stroke="#a67e56" strokeWidth="8" opacity=".8" />
        <path d="m122 179 27 145m15-145 12 146m35-146v146m35-146-12 146m63-146-27 145" stroke="#e0bc8e" strokeWidth="9" opacity=".7" />
        <path d="M91 176h238" stroke="#8f704d" strokeWidth="13" {...common} />
      </>;
      break;
  }

  return <div className={`${styles.artwork} ${styles[product.color]} ${className}`}>
    <svg viewBox="0 0 420 420" role="img" aria-label={`${product.name}的插画`}>
      <circle cx="346" cy="71" r="43" fill="#fff" opacity=".18" />
      <path d="M0 356c102-26 219-22 420 17v47H0z" fill="#fff" opacity=".17" />
      {object}
    </svg>
  </div>;
}
