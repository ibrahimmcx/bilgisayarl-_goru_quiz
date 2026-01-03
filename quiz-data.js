// Quiz Soruları ve Cevapları
// Her soru için doğru cevap pozisyonu rastgele karıştırılmıştır

const quizData = [
  // 🟢 TEMEL SORULAR (Görüntü Açma & Temel İşlemler)
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "Image.open() fonksiyonu ne işe yarar?",
    options: [
      "Görüntüyü ekranda gösterir",
      "Bir görüntü dosyasını açar ve PIL Image nesnesi olarak yükler",
      "Görüntüyü NumPy dizisine dönüştürür",
      "Görüntüyü kaydeder"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "PIL kütüphanesinde bir görüntü nesnesi hangi veri yapısında tutulur?",
    options: [
      "Liste olarak",
      "NumPy dizisi olarak",
      "PIL Image nesnesi olarak",
      "Dictionary olarak"
    ],
    correctAnswer: 2,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "im.show() metodu ne amaçla kullanılır?",
    options: [
      "Görüntüyü varsayılan görüntü görüntüleyicide açar",
      "Görüntüyü konsola yazdırır",
      "Görüntü boyutlarını gösterir",
      "Görüntüyü kaydeder"
    ],
    correctAnswer: 0,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "Bir görüntüyü gri tonlamaya çevirmek neden gerekebilir?",
    options: [
      "Sadece estetik amaçlar için",
      "Dosya boyutunu artırmak için",
      "İşlem hızını artırmak ve karmaşıklığı azaltmak için",
      "Görüntü kalitesini düşürmek için"
    ],
    correctAnswer: 2,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "convert(\"L\") ifadesindeki \"L\" neyi temsil eder?",
    options: [
      "Large (Büyük) boyut",
      "Grayscale (Gri tonlama) mod",
      "Low (Düşük) kalite",
      "Linear (Doğrusal) dönüşüm"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "Bir görüntüyü döndürme (rotate) işlemi ne işe yarar?",
    options: [
      "Görüntüyü belirtilen açı kadar döndürür",
      "Görüntüyü yatay olarak çevirir",
      "Görüntü boyutunu değiştirir",
      "Görüntü renklerini değiştirir"
    ],
    correctAnswer: 0,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "rotate(360) ile rotate(0) işlemleri arasında görsel olarak fark var mıdır?",
    options: [
      "Evet, 360 derece döndürme görüntüyü tersine çevirir",
      "Hayır, her ikisi de aynı sonucu verir",
      "Evet, 360 derece döndürme görüntüyü bulanıklaştırır",
      "Sadece quality parametresi kullanılırsa fark olur"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "Görüntü boyutlandırma (resize) işlemi hangi durumlarda kullanılır?",
    options: [
      "Sadece görüntü kalitesini artırmak için",
      "Makine öğrenmesi için standart giriş boyutu sağlamak veya depolama alanı tasarrufu için",
      "Görüntü renklerini değiştirmek için",
      "Sadece görüntüyü döndürmek için"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "resize((128,128)) ifadesi ne anlama gelir?",
    options: [
      "Görüntüyü 128 derece döndür",
      "Görüntü kalitesini 128'e ayarla",
      "Görüntüyü 128x128 piksel boyutuna yeniden boyutlandır",
      "Görüntüden 128x128 alan kes"
    ],
    correctAnswer: 2,
    difficulty: "easy"
  },
  {
    category: "Temel - PIL Görüntü İşlemleri",
    question: "Görüntü işlemede en-boy oranının bozulması ne gibi sorunlara yol açar?",
    options: [
      "Görüntü silinir",
      "Dosya boyutu artar",
      "Görüntü deforme olur ve nesneler gerçekçi görünmez",
      "İşlem hızı düşer"
    ],
    correctAnswer: 2,
    difficulty: "easy"
  },

  // 🟡 ORTA SEVİYE SORULAR (Crop, Paste, Transform)
  {
    category: "Orta - Crop ve Transform",
    question: "crop((x1, y1, x2, y2)) fonksiyonu ne yapar?",
    options: [
      "Görüntüyü döndürür",
      "Belirtilen koordinatlar arasındaki dikdörtgen bölgeyi keser",
      "Görüntüyü yeniden boyutlandırır",
      "Görüntü renklerini değiştirir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Crop işleminde kullanılan koordinatlar neyi temsil eder?",
    options: [
      "Görüntünün merkez noktasını",
      "Sol-üst (x1,y1) ve sağ-alt (x2,y2) köşe koordinatlarını",
      "Döndürme açısını",
      "Renk değerlerini"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Bir görüntünün sadece belirli bir bölgesini almak neden faydalıdır?",
    options: [
      "Sadece dosya boyutunu artırmak için",
      "İlgilenilen nesneye odaklanmak ve gereksiz alanları kaldırmak için (ROI - Region of Interest)",
      "Görüntüyü bulanıklaştırmak için",
      "Renkleri değiştirmek için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "transpose(Image.Transpose.ROTATE_180) işlemi ne yapar?",
    options: [
      "Görüntüyü 90 derece döndürür",
      "Görüntüyü yatay çevirir",
      "Görüntüyü 180 derece döndürür",
      "Görüntüyü dikey çevirir"
    ],
    correctAnswer: 2,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Görüntü döndürme işlemi rotate ile transpose arasında nasıl farklılık gösterir?",
    options: [
      "Hiçbir fark yoktur",
      "rotate herhangi bir açı kabul eder, transpose sadece sabit açılar için optimize edilmiştir",
      "transpose daha yavaştır",
      "rotate gri tonlamalı görüntüler için kullanılır"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Bir görüntü parçasını başka bir görüntüye yapıştırmak (paste) ne işe yarar?",
    options: [
      "İki görüntüyü toplar",
      "Görüntü kolajları oluşturmak veya watermark eklemek için kullanılır",
      "Görüntü renklerini karıştırır",
      "Görüntüyü küçültür"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "paste(region, box) işleminde box değişkeninin görevi nedir?",
    options: [
      "Yapıştırılacak bölgenin hedef görüntüdeki konumunu belirtir",
      "Görüntü kalitesini ayarlar",
      "Renk modunu belirler",
      "Dosya formatını değiştirir"
    ],
    correctAnswer: 0,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Aynı görüntü üzerine tekrar yapıştırma işlemi görselde nasıl bir etki oluşturur?",
    options: [
      "Görüntü silinir",
      "Çift görüntü veya overlay efekti oluşturur",
      "Görüntü döner",
      "Hiçbir değişiklik olmaz"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Görüntü bölme ve birleştirme işlemleri hangi uygulamalarda kullanılır?",
    options: [
      "Sadece oyun geliştirmede",
      "Panorama oluşturma, tıbbi görüntü analizi, nesne tespiti gibi uygulamalarda",
      "Sadece ses işlemede",
      "Sadece metin düzenlemede"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Orta - Crop ve Transform",
    question: "Bu işlemler bilgisayarlı görünün hangi alt alanlarında yaygındır?",
    options: [
      "Sadece video oynatmada",
      "Nesne tespiti, yüz tanıma, medikal görüntüleme, uydu görüntü işleme",
      "Sadece ses tanımada",
      "Sadece metin madenciliğinde"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },

  // 🔵 İLERİ SEVİYE SORULAR (Format & Renk Modları)
  {
    category: "İleri - Format ve Renk",
    question: "Bir görüntünün dosya formatı neden değiştirilmek istenir?",
    options: [
      "Sadece dosya adını değiştirmek için",
      "Uyumluluk, sıkıştırma, şeffaflık desteği gibi nedenlerle",
      "Görüntü renklerini değiştirmek için",
      "Sadece dosya boyutunu artırmak için"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "PNG ve JPEG formatları arasındaki temel farklar nelerdir?",
    options: [
      "Hiçbir fark yoktur",
      "PNG kayıpsız sıkıştırma ve şeffaflık destekler, JPEG kayıplı sıkıştırma kullanır ve şeffaflık desteklemez",
      "JPEG şeffaflık destekler, PNG desteklemez",
      "PNG sadece siyah beyaz görüntüler için kullanılır"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "Path.with_suffix() fonksiyonu ne işe yarar?",
    options: [
      "Dosya boyutunu değiştirir",
      "Dosya yolundaki uzantıyı değiştirir",
      "Görüntüyü döndürür",
      "Renk modunu değiştirir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "Bir görüntünün mode özelliği neyi ifade eder?",
    options: [
      "Dosya formatını",
      "Piksel verilerinin nasıl temsil edildiğini (RGB, RGBA, L vb.)",
      "Görüntü boyutunu",
      "Dosya konumunu"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "RGB, RGBA ve L modları arasındaki farklar nelerdir?",
    options: [
      "Hepsi aynıdır",
      "RGB: 3 kanal (Kırmızı, Yeşil, Mavi), RGBA: 4 kanal (RGB + Alpha/şeffaflık), L: Tek kanal (Gri tonlama)",
      "L renkli, RGB siyah beyazdır",
      "RGBA en düşük kaliteli moddur"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "Şeffaf arka plan (alpha channel) ne anlama gelir?",
    options: [
      "Görüntünün tamamen siyah olması",
      "Piksellerin saydamsızlık/opaklık seviyesini kontrol eden ekstra kanal",
      "Görüntünün renklerinin ters çevrilmesi",
      "Görüntünün bulanıklaştırılması"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "JPEG formatı neden şeffaflığı desteklemez?",
    options: [
      "Çünkü sadece 3 renk kanalını (RGB) destekler, alpha kanalı yoktur",
      "Çünkü çok eski bir formattır",
      "Çünkü sadece siyah beyaz içindir",
      "Aslında şeffaflığı destekler"
    ],
    correctAnswer: 0,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "Image.new(\"RGB\", im.size, (255,255,255)) satırı ne amaçla kullanılır?",
    options: [
      "Görüntüyü siler",
      "Beyaz arka planlı yeni bir RGB görüntü oluşturur",
      "Görüntüyü döndürür",
      "Görüntüyü gri tonlamaya çevirir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "Alpha kanalı olan bir görüntü JPEG'e dönüştürülürken neden arka plan eklenir?",
    options: [
      "Estetik görünüm için",
      "Çünkü JPEG alpha kanalını desteklemez, şeffaf alanlar görünür bir renge dönüştürülmelidir",
      "Dosya boyutunu artırmak için",
      "Zorunlu bir işlem değildir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "İleri - Format ve Renk",
    question: "getchannel(\"A\") fonksiyonu neyi döndürür?",
    options: [
      "Kırmızı kanalı",
      "Alpha (şeffaflık) kanalını gri tonlamalı görüntü olarak",
      "Tüm renk kanallarını",
      "Görüntü boyutunu"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },

  // 🔴 UYGULAMA & YORUM SORULARI
  {
    category: "Uygulama ve Analiz",
    question: "Bir görüntüyü JPEG formatına dönüştürmeden önce hangi kontroller yapılmalıdır?",
    options: [
      "Sadece dosya adı kontrolü",
      "Renk modu kontrolü (RGBA ise RGB'ye dönüştürme), boyut kontrolü",
      "Sadece tarih kontrolü",
      "Hiçbir kontrol gerekmez"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Uygulama ve Analiz",
    question: "optimize=True parametresi görüntü kaydetme sürecini nasıl etkiler?",
    options: [
      "Görüntü kalitesini düşürür",
      "Dosya boyutunu optimize ederek daha küçük dosya oluşturur (kalite kaybı olmadan)",
      "İşlem süresini artırır ama hiçbir fayda sağlamaz",
      "Görüntüyü siler"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Uygulama ve Analiz",
    question: "Görüntü kalitesi (quality) ile dosya boyutu arasındaki ilişki nasıldır?",
    options: [
      "Kalite arttıkça dosya boyutu küçülür",
      "Kalite arttıkça dosya boyutu büyür (ters orantılı)",
      "İlişki yoktur",
      "Her zaman aynı boyutta olur"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Uygulama ve Analiz",
    question: "Aynı görüntüyü farklı formatlarda kaydetmenin avantajları nelerdir?",
    options: [
      "Hiçbir avantajı yoktur",
      "Farklı platformlar için uyumluluk, dosya boyutu optimizasyonu, şeffaflık desteği",
      "Sadece dosya sayısını artırır",
      "Sadece disk alanı kullanımını artırır"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Uygulama ve Analiz",
    question: "Bu kodlar bir web uygulamasında hangi özellikler için kullanılabilir?",
    options: [
      "Sadece görüntü yükleme",
      "Görüntü editörü, thumbnail oluşturma, format dönüştürücü, kolaj yapıcı",
      "Sadece metin düzenleme",
      "Sadece veritabanı işlemleri"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },

  // NumPy ve Görüntü İşleme Soruları
  {
    category: "NumPy ve Görselleştirme",
    question: "Bir görüntüyü NumPy dizisine dönüştürmenin amacı nedir?",
    options: [
      "Sadece dosya boyutunu artırmak için",
      "Matematiksel işlemler ve piksel manipülasyonu yapmak için",
      "Görüntüyü silmek için",
      "Sadece renkleri değiştirmek için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "array(Image.open(...)) ifadesi ne tür bir veri yapısı üretir?",
    options: [
      "Liste",
      "Dictionary",
      "NumPy array (çok boyutlu dizi)",
      "Tuple"
    ],
    correctAnswer: 2,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "imshow(im) fonksiyonu ne işe yarar?",
    options: [
      "Görüntüyü matplotlib ile görselleştirir",
      "Görüntüyü kaydeder",
      "Görüntüyü siler",
      "Görüntü boyutunu değiştirir"
    ],
    correctAnswer: 0,
    difficulty: "easy"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "plot(x, y, 'ks:') ifadesindeki k, s ve : ne anlama gelir?",
    options: [
      "k: kırmızı, s: kare, :: noktalı çizgi",
      "k: siyah (black), s: kare marker, :: noktalı çizgi",
      "k: kalın, s: solid, :: düz çizgi",
      "k: küçük, s: star, :: kesik çizgi"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "Kontur (contour) çizimi nedir?",
    options: [
      "Görüntüyü döndürme işlemi",
      "Görüntüdeki eşit yoğunluk değerlerine sahip noktaları birleştiren eğriler",
      "Görüntü boyutunu değiştirme",
      "Renk dönüşümü"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "Histogram nedir ve görüntü hakkında hangi bilgileri verir?",
    options: [
      "Görüntünün boyutunu gösterir",
      "Piksel değerlerinin dağılımını gösterir (parlaklık, kontrast hakkında bilgi)",
      "Dosya formatını gösterir",
      "Renk modunu gösterir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "hist(im.flatten(), 128) ifadesindeki 128 değeri neyi temsil eder?",
    options: [
      "Görüntü boyutu",
      "Histogram bin (kutu) sayısı",
      "Piksel değeri",
      "Renk sayısı"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "im.shape çıktısı neyi ifade eder?",
    options: [
      "Dosya formatını",
      "Görüntünün boyutlarını (yükseklik, genişlik, kanal sayısı)",
      "Renk modunu",
      "Dosya boyutunu"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "im.dtype görüntü hakkında hangi bilgiyi verir?",
    options: [
      "Görüntü formatını",
      "Piksel değerlerinin veri tipini (uint8, float32 vb.)",
      "Görüntü boyutunu",
      "Renk sayısını"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "NumPy ve Görselleştirme",
    question: "im2 = 255 - im işlemi görüntü üzerinde ne yapar?",
    options: [
      "Görüntüyü döndürür",
      "Görüntüyü negatif/tersine çevirir (invert)",
      "Görüntü boyutunu değiştirir",
      "Görüntüyü bulanıklaştırır"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },

  // Histogram Eşitleme ve İleri Düzey İşlemler
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "Histogram eşitleme (histogram equalization) nedir?",
    options: [
      "Görüntü boyutunu eşitleme",
      "Piksel yoğunluk dağılımını yeniden düzenleyerek kontrast artırma tekniği",
      "Renkleri eşitleme",
      "Dosya boyutunu küçültme"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "Kümülatif dağılım fonksiyonu (CDF) nedir?",
    options: [
      "Renk dağılımı",
      "Histogram değerlerinin kümülatif toplamı",
      "Dosya formatı",
      "Görüntü boyutu"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "cumsum() fonksiyonu ne yapar?",
    options: [
      "Görüntüyü toplar",
      "Dizinin kümülatif toplamını hesaplar",
      "Görüntüyü siler",
      "Renkleri değiştirir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "np.interp() fonksiyonu histogram eşitlemede nasıl bir rol oynar?",
    options: [
      "Görüntüyü döndürür",
      "Piksel değerlerini CDF kullanarak yeniden eşler (interpolasyon yapar)",
      "Dosya formatını değiştirir",
      "Görüntü boyutunu ayarlar"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "Histogram eşitleme her görüntü için uygun mudur?",
    options: [
      "Evet, her zaman kullanılmalıdır",
      "Hayır, zaten iyi kontrasta sahip görüntülerde gürültüyü artırabilir",
      "Sadece renkli görüntülerde kullanılır",
      "Sadece küçük görüntülerde kullanılır"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "uint8 türüne dönüştürme neden gereklidir?",
    options: [
      "Sadece dosya boyutunu küçültmek için",
      "Çünkü görüntü formatları genellikle 0-255 aralığında tam sayı değerler bekler",
      "Görüntüyü silmek için",
      "Zorunlu değildir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "Ortalama görüntü (average image) nedir?",
    options: [
      "Tek bir görüntünün ortası",
      "Birden fazla görüntünün piksel bazında ortalaması alınarak elde edilen görüntü",
      "Görüntünün bulanık hali",
      "Görüntünün küçültülmüş hali"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "Histogram ve Gelişmiş İşlemler",
    question: "Birden fazla görüntünün ortalamasını almak ne amaçla yapılır?",
    options: [
      "Sadece dosya sayısını azaltmak için",
      "Gürültüyü azaltmak ve sabit yapıları öne çıkarmak için",
      "Görüntüleri silmek için",
      "Dosya boyutunu artırmak için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },

  // CNN Soruları
  {
    category: "CNN - Temel Kavramlar",
    question: "Convolutional Neural Network (CNN) hangi problem türlerinde özellikle etkilidir?",
    options: [
      "Sadece metin işleme",
      "Görüntü tanıma, nesne tespiti, video analizi gibi görsel veri problemleri",
      "Sadece ses işleme",
      "Sadece sayısal hesaplamalar"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "CNN - Temel Kavramlar",
    question: "CNN'lerin biyolojik ilham kaynağı nedir?",
    options: [
      "İnsan kulağı",
      "İnsan görsel korteksi ve nöronların hiyerarşik öğrenmesi",
      "İnsan elleri",
      "Bilgisayar işlemcileri"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "CNN - Temel Kavramlar",
    question: "CNN'lerin klasik yapay sinir ağlarından temel farkı nedir?",
    options: [
      "Daha yavaş çalışır",
      "Uzamsal (spatial) bilgiyi koruyan konvolüsyon katmanları kullanır",
      "Daha az parametre kullanır",
      "Sadece siyah beyaz görüntülerle çalışır"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Katmanlar",
    question: "Convolutional Layer'ın temel görevi nedir?",
    options: [
      "Görüntüyü küçültmek",
      "Filtreler kullanarak öznitelik (feature) çıkarımı yapmak",
      "Görüntüyü sınıflandırmak",
      "Görüntüyü döndürmek"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Katmanlar",
    question: "Non-Linearity (Activation) katmanı CNN'de neden gereklidir?",
    options: [
      "Sadece hız için",
      "Doğrusal olmayan (non-linear) ilişkileri öğrenebilmek için",
      "Görüntü boyutunu değiştirmek için",
      "Renkleri ayarlamak için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Katmanlar",
    question: "Pooling katmanının ağ üzerindeki temel etkisi nedir?",
    options: [
      "Parametre sayısını artırır",
      "Boyutları küçültür, hesaplama yükünü azaltır ve overfitting'i önler",
      "Görüntü kalitesini artırır",
      "Renk değerlerini değiştirir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Katmanlar",
    question: "Flattening katmanı neden kullanılır?",
    options: [
      "Görüntüyü düzleştirmek için",
      "Çok boyutlu feature map'i tek boyutlu vektöre dönüştürmek için (FC layer'a giriş olarak)",
      "Görüntüyü döndürmek için",
      "Renkleri değiştirmek için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Katmanlar",
    question: "Fully-Connected Layer CNN mimarisinde hangi amaçla kullanılır?",
    options: [
      "Öznitelik çıkarımı için",
      "Çıkarılan öznitelikleri kullanarak sınıflandırma/tahmin yapmak için",
      "Görüntü boyutunu değiştirmek için",
      "Pooling yapmak için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Konvolüsyon İşlemi",
    question: "5×5 boyutunda bir giriş matrisi ve 3×3 boyutunda bir filtre kullanıldığında, stride=1 ve padding yoksa çıktı boyutu neden 3×3 olur?",
    options: [
      "Rastgele belirlenir",
      "Formül: (5-3)/1 + 1 = 3, her iki boyut için",
      "Her zaman 3x3 olur",
      "Filtre boyutuna eşittir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "CNN - Konvolüsyon İşlemi",
    question: "Feature Map kavramı neyi ifade eder?",
    options: [
      "Orijinal görüntü",
      "Bir filtrenin görüntü üzerinde uygulanması sonucu elde edilen aktivasyon haritası",
      "Görüntünün histogramı",
      "Renk paleti"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Konvolüsyon İşlemi",
    question: "Birden fazla filtre kullanmanın CNN'e sağladığı avantaj nedir?",
    options: [
      "Sadece işlem süresini artırır",
      "Farklı öznitelikleri (kenar, köşe, doku vb.) aynı anda öğrenebilir",
      "Görüntü boyutunu artırır",
      "Renk sayısını artırır"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Stride ve Padding",
    question: "Stride değeri artırıldığında Feature Map boyutu nasıl etkilenir?",
    options: [
      "Büyür",
      "Küçülür",
      "Değişmez",
      "Sadece renk sayısı değişir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Stride ve Padding",
    question: "Padding neden kullanılır?",
    options: [
      "Görüntüyü döndürmek için",
      "Giriş boyutunu korumak ve kenar bilgisinin kaybolmasını önlemek için",
      "Renkleri değiştirmek için",
      "İşlem süresini artırmak için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Aktivasyon",
    question: "Tüm katmanlar doğrusal olursa sinir ağı neden etkisiz olur?",
    options: [
      "Daha yavaş çalışır",
      "Doğrusal fonksiyonların bileşimi yine doğrusaldır, karmaşık ilişkiler öğrenilemez",
      "Daha fazla bellek kullanır",
      "Etkisiz olmaz, her zaman iyidir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "CNN - Aktivasyon",
    question: "ReLU fonksiyonunun matematiksel tanımı nedir?",
    options: [
      "f(x) = x²",
      "f(x) = max(0, x)",
      "f(x) = 1 / (1 + e^-x)",
      "f(x) = x + 1"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Aktivasyon",
    question: "ReLU fonksiyonu Feature Map üzerinde ne tür bir etki oluşturur?",
    options: [
      "Tüm değerleri pozitif yapar",
      "Negatif değerleri sıfırlar, pozitif değerleri korur",
      "Tüm değerleri normalize eder",
      "Değerleri tersine çevirir"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Pooling",
    question: "Max Pooling işlemi nasıl çalışır?",
    options: [
      "Her bölgedeki minimum değeri alır",
      "Her bölgedeki maksimum değeri alır",
      "Her bölgenin ortalamasını alır",
      "Tüm değerleri toplar"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "CNN - Pooling",
    question: "Pooling katmanının aşırı öğrenme (overfitting) üzerindeki etkisi nedir?",
    options: [
      "Overfitting'i artırır",
      "Pooling boyutu azaltır ve genelleme yeteneğini artırarak overfitting'i azaltır",
      "Hiçbir etkisi yoktur",
      "Sadece hızı artırır"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "CNN - Pooling",
    question: "Average Pooling ile Max Pooling arasındaki temel fark nedir?",
    options: [
      "Hiçbir fark yoktur",
      "Max Pooling maksimum değeri, Average Pooling ortalama değeri alır",
      "Average Pooling daha yavaştır",
      "Max Pooling sadece gri görüntülerde çalışır"
    ],
    correctAnswer: 1,
    difficulty: "easy"
  },
  {
    category: "CNN - Mimari",
    question: "CNN mimarisinde katmanların genel sıralaması nasıl olmalıdır?",
    options: [
      "FC → Conv → Pool → Activation",
      "Giriş → [Conv → Activation → Pool]×N → Flatten → FC → Çıkış",
      "Pool → Conv → FC → Activation",
      "Rastgele sıralama"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Tarihsel Mimariler",
    question: "LeNet hangi amaçla geliştirilmiştir?",
    options: [
      "Yüz tanıma için",
      "El yazısı rakam tanıma için (MNIST)",
      "Ses tanıma için",
      "Nesne tespiti için"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Tarihsel Mimariler",
    question: "AlexNet'in CNN tarihinde dönüm noktası olmasının sebebi nedir?",
    options: [
      "En küçük model olması",
      "ImageNet yarışmasını kazanarak derin öğrenmenin gücünü kanıtlaması (2012)",
      "İlk CNN olması",
      "En hızlı model olması"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - Tarihsel Mimariler",
    question: "VGGNet hangi özelliğin CNN performansı üzerindeki etkisini kanıtlamıştır?",
    options: [
      "Filtre sayısının etkisi",
      "Ağ derinliğinin (depth) etkisi",
      "Renk sayısının etkisi",
      "Görüntü boyutunun etkisi"
    ],
    correctAnswer: 1,
    difficulty: "medium"
  },
  {
    category: "CNN - İleri Analiz",
    question: "CNN'lerde düşük seviyeli özellikler ile yüksek seviyeli özellikler arasındaki fark nedir?",
    options: [
      "Hiçbir fark yoktur",
      "Düşük seviye: kenarlar, renkler; Yüksek seviye: karmaşık nesneler, yüzler",
      "Düşük seviye daha karmaşıktır",
      "Yüksek seviye daha basittir"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  },
  {
    category: "CNN - İleri Analiz",
    question: "Bir CNN modelinde çok fazla parametre bulunması hangi probleme yol açabilir?",
    options: [
      "Model daha hızlı çalışır",
      "Overfitting (aşırı öğrenme) ve yüksek hesaplama maliyeti",
      "Model daha iyi performans gösterir",
      "Hiçbir problem olmaz"
    ],
    correctAnswer: 1,
    difficulty: "hard"
  }
];

// Kategorileri çıkar
const categories = [...new Set(quizData.map(q => q.category))];
