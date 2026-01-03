# 🧠 Görüntü İşleme & CNN Quiz Uygulaması

Modern ve interaktif bir quiz uygulaması ile Görüntü İşleme, PIL, NumPy, Matplotlib ve Convolutional Neural Networks (CNN) bilginizi test edin!

[![GitHub](https://img.shields.io/badge/GitHub-ibrahimmcx-blue?style=flat&logo=github)](https://github.com/ibrahimmcx/bilgisayarl-_goru_quiz)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=flat)](https://ibrahimmcx.github.io/bilgisayarl-_goru_quiz/)

## 🎯 Özellikler

- **Kapsamlı Soru Bankası**: 100+ soru ile PIL, NumPy, Matplotlib, CNN ve görüntü işleme konularında detaylı test
- **Kategori Bazlı Filtreleme**: İstediğiniz konuya odaklanarak çalışın
- **Gerçek Zamanlı İlerleme Takibi**: Anlık skor ve ilerleme göstergesi
- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Anında Geri Bildirim**: Her sorudan sonra doğru/yanlış cevap açıklaması
- **Performans Analizi**: Quiz sonunda detaylı sonuç ekranı

## 📚 Kapsanan Konular

### Görüntü İşleme
- **Temel PIL İşlemleri**: Görüntü açma, kaydetme, format dönüştürme
- **Crop ve Transform**: Görüntü kesme, döndürme, yapıştırma
- **Format ve Renk Modları**: RGB, RGBA, Grayscale, Alpha channel
- **NumPy Entegrasyonu**: Array dönüşümleri, piksel manipülasyonu

### Görselleştirme
- **Matplotlib**: imshow, plot, contour, histogram
- **Histogram İşlemleri**: Histogram eşitleme, CDF, interpolasyon
- **Görüntü Analizi**: Ortalama görüntü, gürültü azaltma

### CNN (Convolutional Neural Networks)
- **Temel Kavramlar**: Konvolüsyon, feature map, stride, padding
- **Katman Tipleri**: Convolutional, Pooling, Activation, Fully-Connected
- **Aktivasyon Fonksiyonları**: ReLU, Sigmoid, Tanh
- **Tarihsel Mimariler**: LeNet, AlexNet, VGGNet, GoogLeNet

## 🚀 Kurulum ve Kullanım

### Hızlı Başlangıç

1. **Projeyi klonlayın**
```bash
git clone https://github.com/ibrahimmcx/bilgisayarl-_goru_quiz.git
cd bilgisayarl-_goru_quiz
```

2. **Tarayıcıda açın**
```bash
# Basitçe index.html dosyasını tarayıcınızda açın
# Veya bir local server kullanın:
python -m http.server 8000
# Ardından http://localhost:8000 adresine gidin
```

### Dosya Yapısı

```
📦 bilgisayarl-_goru_quiz
├── 📄 index.html              # Ana HTML dosyası
├── 📄 quiz.js                 # Quiz mantığı ve uygulama kodu
├── 📄 quiz-data.js            # Soru bankası (100+ soru)
├── 📄 style.css               # Modern ve responsive tasarım
├── 📄 görüçalışmasoruları.txt # Soru kaynağı (metin formatı)
└── 📄 README.md               # Bu dosya
```

## 🎮 Nasıl Kullanılır?

1. **Kategori Seçin**: Dropdown menüden çalışmak istediğiniz konuyu seçin veya "Tüm Kategoriler" ile karışık çalışın
2. **Soruları Cevaplayın**: Her soru için A, B, C veya D seçeneklerinden birini seçin
3. **Anında Geri Bildirim**: Doğru/yanlış cevap hemen gösterilir
4. **İlerleyin**: "Sonraki Soru" butonu ile devam edin
5. **Sonuçları Görün**: Quiz sonunda performans analizinizi inceleyin

## 📊 Soru Kategorileri

| Kategori | Soru Sayısı | Zorluk |
|----------|-------------|--------|
| Temel - PIL Görüntü İşlemleri | 10 | Kolay |
| Orta - Crop ve Transform | 10 | Orta |
| İleri - Format ve Renk | 10 | Zor |
| Uygulama ve Analiz | 5 | Zor |
| NumPy ve Görselleştirme | 10 | Orta |
| Histogram ve Gelişmiş İşlemler | 8 | Zor |
| CNN - Temel Kavramlar | 3 | Kolay |
| CNN - Katmanlar | 5 | Orta |
| CNN - Konvolüsyon İşlemi | 3 | Zor |
| CNN - Stride ve Padding | 3 | Orta |
| CNN - Aktivasyon | 3 | Orta |
| CNN - Pooling | 3 | Kolay-Orta |
| CNN - Mimari | 1 | Orta |
| CNN - Tarihsel Mimariler | 3 | Orta |
| CNN - İleri Analiz | 2 | Zor |

## 🛠️ Teknolojiler

- **HTML5**: Semantik ve erişilebilir yapı
- **CSS3**: Modern gradient'ler, animasyonlar, responsive tasarım
- **Vanilla JavaScript**: Sınıf tabanlı, modüler kod yapısı
- **ES6+**: Modern JavaScript özellikleri

## 🎨 Tasarım Özellikleri

- **Dark Mode**: Göz yormayan koyu tema
- **Gradient Efektler**: Modern ve premium görünüm
- **Smooth Animasyonlar**: Fade-in, slide-in, scale efektleri
- **Responsive**: Mobil, tablet ve desktop uyumlu
- **Accessibility**: Klavye navigasyonu ve screen reader desteği

## 📱 Tarayıcı Desteği

- ✅ Chrome (önerilen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

### Katkı Fikirleri

- 🆕 Yeni sorular ekleyin
- 🌍 Çoklu dil desteği
- 📊 Detaylı istatistikler ve grafik
- 💾 LocalStorage ile ilerleme kaydetme
- 🏆 Başarı rozetleri sistemi
- ⏱️ Zamanlayıcı modu
- 🎯 Zorluk seviyesi seçimi

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

- Vercel: [Quiz Uygulaması](https://bilgisayarl-goru-quiz.vercel.app/)
- GitHub: [@ibrahimmcx](https://github.com/ibrahimmcx)
- Repository: [bilgisayarl-_goru_quiz](https://github.com/ibrahimmcx/bilgisayarl-_goru_quiz)

## 🙏 Teşekkürler

Bu quiz uygulaması, görüntü işleme ve derin öğrenme konularında öğrencilere yardımcı olmak amacıyla geliştirilmiştir.

---

⭐ Beğendiyseniz yıldız vermeyi unutmayın!

**Happy Learning! 🚀**
