# SOUL — موقع بورتفوليو

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت المكتبات
npm install

# 2. تشغيل السيرفر المحلي
npm run dev
```

ثم افتح المتصفح على: `http://localhost:5173`

## 📁 هيكل الملفات

```
soul-website/
├── index.html                        ← نقطة دخول HTML
├── vite.config.js                    ← إعدادات Vite
├── package.json                      ← المكتبات والأوامر
├── public/
│   └── favicon.svg                   ← أيقونة الموقع
└── src/
    ├── main.jsx                      ← نقطة دخول React
    ├── soul-portfolio.jsx            ← الملف الرئيسي (JSX)
    ├── styles/
    │   └── theme.js                  ← ألوان الموقع
    └── data/
        └── servicesData.js           ← الخدمات والمحتوى
```

## ✏️ تعديل المحتوى

| تريد تعديل | افتح |
|---|---|
| الألوان | `src/styles/theme.js` |
| الأسعار والخدمات | `src/data/servicesData.js` |
| التصميم والـ Layout | `src/soul-portfolio.jsx` |

## 📦 البناء للنشر

```bash
npm run build
```
