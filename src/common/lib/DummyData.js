import React from 'react';
import {
  FaUsers as ProgrammerIcon,
  FaCode as CodeIcon,
  FaLaptopCode as DesktopIcon,
  FaHandsHelping as SupportIcon,
} from 'react-icons/fa';
import { RiCodeAiLine as AIIcon } from 'react-icons/ri';
import { LuAlarmClock as ClockIcon } from 'react-icons/lu';
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';

const sizeIcon = 24;

// ================= Data Introduction ================= //

export const dataIntroduction = [
  {
    blockcodeone: `
const layananKami = [
  {
    Cepat: "Deadline mepet? Santai, kami gercep!",
    Kece: "Web rapi, modern, dan sesuai kebutuhan.",
    Terjangkau: "Murah tapi tetap berkualitas!",
    Aman: "Data aman, privasi terjaga.",
  },
];

console.log(layananKami);`,
    blockcodetwo: `
print("Hello World")

console.log("Hello World")

<?php echo "Hello World"; ?>`,
  },
];

export const dataIntroductionV1 = [
  {
    id: 1,
    language: 'javascript',
    code: `
const layananKami = [
  {
    Cepat: "Deadline mepet? Santai, kami gercep!",
    Kece: "Web rapi, modern, dan sesuai kebutuhan.",
    Terjangkau: "Murah tapi tetap berkualitas!",
    Aman: "Data aman, privasi terjaga.",
  },
];

console.log(layananKami);`,
  },
  {
    id: 2,
    language: 'javascript',
    code: `
print("Hello World")

console.log("Hello World")

<?php echo "Hello World"; ?>`,
  },
];

// ================= Data Why Choose Us ================= //

export const dataWhyChooseUs = [
  {
    id: 1,
    icon: <ProgrammerIcon size={sizeIcon} />,
    title: 'Programmer Berpengalaman',
    desc: 'Bukan cuma bisa ngoding, tapi udah biasa handle proyek beneran dan sesuai standar industri.',
  },
  {
    id: 2,
    icon: <CodeIcon size={sizeIcon} />,
    title: 'Teknologi Modern & Terbaru',
    desc: 'Next.js, Flask, Laravel, MySQL? Kami pakai teknologi terbaik sesuai kebutuhanmu.',
  },
  {
    id: 3,
    icon: <DesktopIcon size={sizeIcon} />,
    title: 'Bisa Custom Sesuai Maumu',
    desc: 'Mau sistem informasi, e-commerce, atau dashboard? Tinggal request, kita bikin sesuai kebutuhan.',
  },
  {
    id: 4,
    icon: <AIIcon size={sizeIcon} />,
    title: 'Kode Bersih & Mudah Dipahami',
    desc: 'Bukan cuma jalan, tapi juga rapi dan gampang dimengerti buat lanjut pengembangan.',
  },
  {
    id: 5,
    icon: <SupportIcon size={sizeIcon} />,
    title: 'Dibantu Sampai Paham',
    desc: 'Takut nggak bisa ngejelasin? Tenang, kita siap bimbing sampai kamu pede buat presentasi.',
  },
  {
    id: 6,
    icon: <ClockIcon size={sizeIcon} />,
    title: 'Cepet & Tepat Waktu',
    desc: 'Deadline mepet? Santai, kita tetap on time tanpa nurunin kualitas.',
  },
];

// ================= Data Pricing Plans ================= //

export const dataPricingPlans = [
  {
    id: 1,
    title: 'Paket Dasar',
    desc: 'Web simpel dengan fitur utama.',
    isPopular: false,
    price: '250.000',
  },
  {
    id: 2,
    title: 'Paket Standar',
    desc: 'Web lebih kompleks dengan fitur tambahan.',
    isPopular: true,
    price: '500.000',
  },
  {
    id: 3,
    title: 'Paket Premium',
    desc: 'Web lengkap + bimbingan intensif sampai paham.',
    isPopular: false,
    price: '750.000',
  },
];

// ================= Data App Types ================= //

export const dataAppTypes = [
  { id: 1, title: 'E-Commerce', desc: 'Web jualan & marketplace mini.' },
  // { id: 2, title: 'Sistem Informasi', desc: 'Buat ngatur data & akademik.' },
  { id: 2, title: 'Web Profil', desc: 'Buat UMKM, startup, dsb.' },
  // { id: 4, title: 'Sistem Booking', desc: 'Pesan hotel, resto, layanan.' },
  { id: 3, title: 'Dashboard', desc: 'CRUD data & laporan.' },
  { id: 4, title: 'Landing Page', desc: 'Buat promo produk/jasa.' },
];

// ================= Data Asked Questions ================= //

export const dataAskedQuestions = [
  {
    id: 1,
    question: 'Apakah ini aman dan legal?',
    answer:
      'Jasa kami murni membantu pengembangan sistem. Kami nggak bikin skripsi atau laporan, jadi tetap sesuai etika akademik!',
  },
  {
    id: 2,
    question: 'Berapa lama pengerjaannya?',
    answer:
      'Tergantung kompleksitas proyek. Biasanya sekitar 7–14 hari, tapi bisa lebih cepat kalau urgent!',
  },
  {
    id: 3,
    question: 'Apakah saya bisa request fitur tambahan?',
    answer:
      'Bisa banget! Tinggal diskusiin sama kami dulu biar kita bisa hitung waktu dan biayanya.',
  },
  {
    id: 4,
    question: 'Gimana kalau saya butuh revisi?',
    answer:
      'Kami siap bantu revisi selama masih dalam lingkup kesepakatan awal.',
  },
  {
    id: 5,
    question: 'Apakah saya bakal dapat source code nya?',
    answer:
      'Pasti! Semua paket sudah termasuk source code lengkap yang bisa kamu pelajari.',
  },
  {
    id: 6,
    question: 'Apakah saya bisa konsultasi dulu sebelum order?',
    answer:
      'Tentu! Konsultasi 100% gratis, jadi kamu bisa tanya-tanya dulu sebelum deal.',
  },
  {
    id: 7,
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'Pembayaran bisa via transfer bank atau e-wallet. Bisa DP dulu, sisanya setelah proyek selesai!',
  },
  {
    id: 8,
    question: 'Apakah ada garansi kalau ada bug?',
    answer:
      'Ada! Kami kasih garansi perbaikan bug selama 7 hari setelah proyek selesai.',
  },
];

// ================= Data Information Contact ================= //
export const dataInformationContact = [
  {
    blockcodeone: `
const kontakKami = [
  {
    WhatsApp: "+62 813-2597-0587",
    Email: "aimdev.code@gmail.com",
    Alamat: "Daerah Istimewa Yogyakarta, Indonesia",
  },
];

console.log(kontakKami);`,
  },
];

// ================= Data Information Contact ================= //

export const dataSosmed = [
  {
    id: 1,
    name: 'WhatsApp',
    icon: <IoLogoWhatsapp size={24} />,
    link: '',
  },
  {
    id: 1,
    name: 'Email',
    icon: <IoMailOutline size={24} />,
    link: '',
  },
  {
    id: 1,
    name: 'Portfolio',
    icon: <CgWebsite size={24} />,
    link: '',
  },
];
