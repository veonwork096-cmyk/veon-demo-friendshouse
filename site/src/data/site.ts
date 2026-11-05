// Facts for the homepage. Every value comes from veon/client.json (fact id in comments) or the approved design/concept.md.
import type { ImageMetadata } from "astro";
import desna290 from "../assets/homes/desna-290.jpg";
import diamantova210 from "../assets/homes/diamantova-210.jpg";
import abrykosova from "../assets/homes/abrykosova-pool.jpg";
import druziv198 from "../assets/homes/druziv-198.jpg";
import zrub from "../assets/homes/zrub.jpg";
import granatova160 from "../assets/homes/granatova-160.jpg";
import sunychnyi105 from "../assets/homes/sunychnyi-105.jpg";

export const FUTURE = "Розділ у розробці";

// company.contacts, W-F004
export const contacts = {
  phoneMain: { label: "(098) 507 57 57", href: "tel:+380985075757" },
  phoneSecond: { label: "+380 95 455 66 71", href: "tel:+380954556671" },
  telegram: "https://t.me/sviatoslav1702",
  whatsapp: "https://wa.me/380954556671",
  hours: "щодня 08:00–20:00",
  address: "Київська обл., с. Осещина, КМ Міжріччя",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("КМ Міжріччя, Осещина, Київська область"),
} as const;

// socials[] — only status "confirmed"
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/friends.town.mr/" },
  { name: "TikTok", href: "https://www.tiktok.com/@friends.town.mr" },
  { name: "YouTube", href: "https://www.youtube.com/@friendstown3046" },
] as const;

export const nav = [
  { id: "location", label: "Де ми" },
  { id: "homes", label: "Будинки" },
  { id: "plots", label: "Ділянки" },
  { id: "infrastructure", label: "Берег" },
  { id: "safety", label: "Безпека" },
  { id: "visit", label: "Візит" },
] as const;

// W-F014 «Поруч з нами» (confirmed by the lead 2026-11-05) + W-F107
export const nearby: { km: string; places: string[] }[] = [
  { km: "0 км", places: ["Eco Friends School", "садочки", "BOX маркет", "кафе, піцерія, аптека", "будмаркет", "Нова пошта"] },
  { km: "0,3 км", places: ["комплекс «Яхта»"] },
  { km: "1 км", places: ["Sport Villa Grays"] },
  { km: "1,8 км", places: ["Фора"] },
  { km: "4 км", places: ["Сільпо", "WOG"] },
  { km: "15 км", places: ["ТРЦ Dream Town"] },
  { km: "23 км", places: ["центр Києва"] },
  { km: "28 км", places: ["аеропорт «Київ»"] },
  { km: "57 км", places: ["аеропорт Бориспіль"] },
];

export type Group = "desna" | "lake" | "park" | "town";
export const groups: { id: Group | "all"; label: string }[] = [
  { id: "all", label: "Усі" },
  { id: "desna", label: "На Десні" },
  { id: "lake", label: "На озері" },
  { id: "park", label: "Біля парку" },
  { id: "town", label: "У містечку" },
];

export interface Lot {
  group: Group;
  title: string;
  where: string;
  feature: string;
  price: string;
  image: ImageMetadata;
  alt: string;
}

// Catalogue lots (concept.md §8 «Будинки — кандидаты карточек», W-F010); prices as listed in the client catalogue on 2026-11-05.
export const lots: Lot[] = [
  { group: "desna", title: "Будинок 290 м² і гостьовий 160 м² з сауною", where: "1-а лінія до Десни", feature: "Два будинки на одній ділянці біля річки", price: "$820 000", image: desna290, alt: "Двоповерховий світлий будинок з аркою та навісом для авто, бруківка перед входом" },
  { group: "lake", title: "Будинок 210 м²", where: "вул. Діамантова", feature: "Власний вихід на озеро", price: "$400 000", image: diamantova210, alt: "Візуалізація двоповерхового будинку з терасою та газоном" },
  { group: "lake", title: "Мебльований будинок з басейном", where: "вул. Абрикосова", feature: "Вихід на озеро, басейн на ділянці", price: "$320 000", image: abrykosova, alt: "Одноповерховий білий будинок із басейном на газоні" },
  { group: "park", title: "Будинок 198 м²", where: "вул. Друзів, біля парку", feature: "Сонячні панелі та акумулятор", price: "$340 000", image: druziv198, alt: "Двоповерховий світлий будинок з навісом над входом" },
  { group: "town", title: "Екологічний будинок з дикого зрубу і баня", where: "у містечку", feature: "Дикий зруб", price: "$400 000", image: zrub, alt: "Будинок із білого дикого зрубу з балконом" },
  { group: "town", title: "Будинок 160 м² за проєктом «Архона»", where: "вул. Гранатова", feature: "Проєкт «Архона»", price: "$160 000", image: granatova160, alt: "Одноповерховий білий будинок з темним дахом і великими вікнами" },
  { group: "town", title: "Будинок 105 м²", where: "пров. Суничний", feature: "Компактний одноповерховий", price: "$97 000", image: sunychnyi105, alt: "Сучасний будинок з панорамними вікнами та бетонною терасою" },
];

// W-F101–W-F107 (kindergarten count not shown: K-002)
export const infrastructure: { num?: string; text: string; id: string }[] = [
  { num: "4 га", text: "парку на березі Десни: прогулянки, купання, риболовля", id: "W-F101" },
  { num: "8", text: "озер з пляжами для мешканців", id: "W-F102" },
  { num: "4", text: "дитячі майданчики і спортивний майданчик для футболу, баскетболу, волейболу", id: "W-F103" },
  { num: "1–9", text: "класи в Eco Friends School; на території також є дитячі садочки", id: "W-F105, W-F106" },
  { num: "07:00–23:00", text: "працює BOX маркет на території", id: "W-F104" },
  { num: "20 хв", text: "маршруткою до метро «Героїв Дніпра»", id: "W-F107" },
];

// W-F006, W-F108–W-F110
export const safety = [
  { num: "3", text: "в'їзди на територію тільки за перепустками" },
  { num: "152", text: "камери відеоспостереження" },
  { num: "734", text: "вуличні ліхтарі, світло на всій території вночі" },
  { num: "24/7", text: "зв'язок з управляючою компанією" },
];
export const safetyMore = [
  "КПП на в'їзді цілодобово",
  "асфальтовані дороги",
  "оптоволоконний інтернет до 1 Гбіт",
  "вивіз сміття, прибирання доріг від снігу і бруду",
];

// W-F012 — events shown on the client's «Фото і відео» page
export const events: { name: string; years?: string }[] = [
  { name: "Водохреще", years: "2022, 2024, 2026" },
  { name: "Масниця" },
  { name: "Пасха" },
  { name: "Івана Купала" },
  { name: "Дитяча Формула-1 «Кубок Міжріччя»", years: "2021, 2022" },
  { name: "Алея першокласників" },
  { name: "Святий Миколай", years: "2022–2025" },
];
