# KelimeTahmini (React Native CLI)

Bu proje, React Native CLI kullanılarak geliştirilmiş bir sayı tahmin oyunudur. Kullanıcı bir sayı belirler, uygulama ise bu sayıyı tahmin etmeye çalışır. Oyun boyunca tahminler, tur sayısı ve oyun sonu ekranı gibi özellikler sunulmaktadır.

## Özellikler

- **Sayı Tahmini:** Kullanıcıdan 1-99 arası bir sayı alınır, uygulama bu sayıyı tahmin etmeye çalışır.
- **Responsive Tasarım:** Farklı ekran boyutlarına uygun dinamik tasarım.
- **Oyun Sonu Ekranı:** Kaç turda doğru tahmin yapıldığı ve yeni oyuna başlama seçeneği.
- **Özel Bileşenler:** Kendi buton, kart, başlık ve metin bileşenleri.
- **Animasyonlu Arka Plan:** LinearGradient ve ImageBackground ile görsel zenginlik.

## Kurulum

1. **Projeyi klonlayın:**
   ```sh
   git clone https://github.com/kullaniciadi/KelimeTahmini.git
   cd KelimeTahmini
   ```

2. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   ```

3. **Android için:**
   ```sh
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

4. **iOS için (MacOS):**
   ```sh
   cd ios
   pod install
   cd ..
   npx react-native run-ios
   ```

## Kullanılan Teknolojiler

- React Native CLI
- react-native-linear-gradient
- react-native-vector-icons
- Custom Components (PrimaryButton, Card, Title, InstractionText, NumberContainer, GuessLogItem)

## Ekran Görüntüleri

| Başlangıç Ekranı | Oyun Ekranı | Oyun Sonu Ekranı |
|------------------|-------------|------------------|
| ![start](./screenshots/start.png) | ![game](./screenshots/game.png) | ![gameover](./screenshots/gameover.png) |

## Bilinen Sorunlar

- Ekran döndürmede resim boyutları için dinamik ayarlamalar yapılmıştır, ancak çok küçük veya çok büyük ekranlarda ek test önerilir.
- Eğer `"Text strings must be rendered within a <Text> component"` hatası alırsanız, kendi componentlerinizde stringleri mutlaka `<Text>` etiketi ile sarmalayın.

## Katkıda Bulunma

Katkıda bulunmak için lütfen bir fork oluşturun ve pull request gönderin.

