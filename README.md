# JobTracker Projesi

Bu proje, işleri takip etmek için kullanılan bir React uygulamasıdır. Redux Toolkit ile state yönetimi sağlanmıştır.

## Başlangıç

Proje dosyalarını bilgisayarınıza indirmek ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Proje dosyalarını bilgisayarınıza klonlayın veya indirin.
2. Terminal veya komut istemcisini açın ve proje dizinine gidin.
3. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
4. Proje uygulamasını başlatmak için `npm start` komutunu kullanın.

## Kullanılan Teknolojiler

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [axios](https://axios-http.com/)
- [sass](https://sass-lang.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)
- [json-server](https://github.com/typicode/json-server)
- [uuid](https://www.npmjs.com/package/uuid)

## Componentler ve Sayfalar

- **Card.jsx:** İş kartı componenti.
- **Filter.jsx:** Filtre componenti.
- **Header.jsx:** Sayfa başlık componenti.
- **AddJob.jsx:** İş ekleme sayfası.
- **JobList.jsx:** İş listesi sayfası.

## Redux State Yönetimi

Proje, Redux Toolkit kullanılarak state yönetimi sağlamaktadır. `jobSlice.js` dosyasında action'lar, reducers ve initial state tanımlanmıştır.

## JSON Server ve Veritabanı

Proje, iş verilerini yönetmek için `json-server` ve `db.json` kullanmaktadır.

---

# Card Componenti

`Card` componenti, işleri temsil etmek için kullanılan bir componenttir. Her bir işin ayrıntılarını gösterir, düzenlenmesine ve silinmesine olanak tanır. Ayrıca, işin durumuna göre renkli bir etiket gösterir.

## Kullanılan Teknolojiler

- React
- Redux Toolkit
- react-redux

## Kullanılan Hooks ve Fonksiyonlar

- `useState`: Modal'ın açık/kapalı durumunu takip etmek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

## İşlevselliği ve Bileşenin Özellikleri

- `job` prop'u üzerinden gelen veriyi kullanarak her bir işin detaylarını gösterir.
- `isModalOpen` state'i, modal'ın açık veya kapalı olup olmadığını takip eder.
- `getClassName` fonksiyonu, işin durumuna bağlı olarak CSS sınıfını belirler.
- `spanColor` objesi, iş durumuna göre etiket rengini belirler.
- `handleDelete` fonksiyonu, "Sil" butonuna tıklandığında işi siler.
- `handleEdit` fonksiyonu, "Düzenle" butonuna tıklandığında modal'ı açar.
- `closeModal` fonksiyonu, modal'dan çıkış yapıldığında modal'ı kapatır.

## Detay Görüntüleme Özelliği

- Kartın üzerinde yer alan "Detay" butonuna tıklandığında, işin detay bilgilerini gösterir.
- `openDetails` fonksiyonu, detayları gösteren butona tıklanınca çalışır ve `selectedJob` state'ini günceller. Ayrıca, JobDetails bileşeni, seçilen işin detaylarını gösterir.
- Detay bilgileri, pozisyon ve şirket bilgilerini içerir.
- Detay görüntüleme özelliği, kartın içinde yer alır ve kullanıcıya işin mevcut durumu, lokasyonu, türü ve tarihi hakkında bilgi verir.

## Modal ve Düzenleme İşlemleri

- `Modal` bileşeni, iş düzenleme işlemleri için kullanılır.
- `Modal` bileşeni, `job` prop'u üzerinden gelen veriyi kullanarak iş detaylarını düzenleme imkanı tanır.
- `Modal` bileşeni, `closeModal` fonksiyonunu kullanarak kapatılabilir.

## Durum Renkleri

- `spanColor` objesi, iş durumuna bağlı olarak etiket rengini belirler ve bu renkler iş durumunu gösteren etikette kullanılır.

---

# Filter Bileşeni

`Filter` bileşeni, iş listesini filtreleme ve sıralama seçenekleri sunan bir bileşendir. Kullanıcıya işleri arama, duruma göre filtreleme, türe göre filtreleme ve sıralama imkanı tanır.

## Kullanılan Teknolojiler

- React
- Redux Toolkit
- react-redux
- useRef hook

## Kullanılan Hooks ve Fonksiyonlar

- `useRef`: Giriş alanlarına erişim sağlamak ve değerleri güncellemek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

## İşlevselliği ve Bileşenin Özellikleri

- Arama: Şirket isimleri arasında arama yapılabilir.
- Durum Filtresi: İş durumuna göre filtreleme seçeneği sunar.
- Tür Filtresi: İş türüne göre filtreleme seçeneği sunar.
- Sıralama: İşleri belirli bir sıraya göre sıralama seçeneği sunar.
- Filtreleri Temizleme: Uygulanan tüm filtreleri temizler.

## Filtreleme ve Sıralama Seçenekleri

- `statusOption`: İş durumu filtreleme seçeneklerini içeren bir dizi.
- `typeOption`: İş türü filtreleme seçeneklerini içeren bir dizi.
- `sortOption`: İşleri sıralama seçeneklerini içeren bir dizi.

## Fonksiyonlar

- `handleReset`: Tüm filtreleri temizler ve giriş alanlarını sıfırlar.

---

# Header Bileşeni

`Header` bileşeni, uygulama başlığını ve sayfa gezinme bağlantılarını içeren bir bileşendir. Kullanıcıyı iş listesi sayfasına yönlendirir ve yeni bir iş eklemek için iş ekleme sayfasına yönlendirir.

## Kullanılan Teknolojiler

- React
- react-router-dom

## İşlevselliği ve Bileşenin Özellikleri

- Uygulama başlığını gösterir.
- İş listesi sayfasına ve iş ekleme sayfasına yönlendiren gezinme bağlantıları içerir.

## Kullanılan React Router Dom Ögeleri

- `Link`: Sayfa yenilemeden gezinmeyi sağlayan genel bağlantı ögesi.
- `NavLink`: Aktif sayfa durumuna göre özel stiller eklemek ve gezinmeyi sağlamak için kullanılan özel bir bağlantı ögesi.

---

# Modal Bileşeni

`Modal` bileşeni, iş detaylarını düzenlemek için kullanılan bir modal penceresini temsil eder. Kullanıcıya iş pozisyonu, şirket adı, lokasyon, durum, tür ve tarih gibi ayrıntıları düzenleme imkanı tanır.

## Kullanılan Teknolojiler

- React
- react-redux
- useState hook

## Kullanılan Hooks ve Fonksiyonlar

- `useState`: Modal içindeki düzenlenmiş iş ayrıntılarını takip etmek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

## İşlevselliği ve Bileşenin Özellikleri

- `Modal` bileşeni, iş detaylarını düzenlemek için kullanılır.
- İş pozisyonu, şirket adı, lokasyon, durum, tür ve tarih gibi ayrıntıları düzenleme imkanı tanır.
- "Kaydet" butonu ile düzenlenmiş iş ayrıntılarını Redux üzerinden günceller.
- "İptal" butonu ile modal penceresini kapatır.

---

# Constants Dosyası

`constants.js` dosyası, projede kullanılan sabit verileri içerir. Bu sabitler, filtreleme seçenekleri ve sıralama seçenekleri gibi ögeleri tanımlar.

## Kullanılan Sabitler

### `statusOption`

İş durumu filtreleme seçeneklerini içeren dizi:

```javascript
export const statusOption = ["Mülakat", "Devam Ediyor", "Reddedildi"];
```

İş türü filtreleme seçeneklerini içeren dizi:

```javascript
export const typeOption = ["Tam Zamanlı", "Yarı Zamanlı", "Uzaktan", "Staj"];
```

İşleri sıralama seçeneklerini içeren dizi:

```javascript
export const sortOption = ["A-Z", "Z-A", "En Yeni", "En Eski"];
```

---

# AddJob Sayfası

`AddJob` sayfası, yeni bir iş eklemek için kullanılan bir formu temsil eder. Kullanıcıdan pozisyon, şirket, lokasyon, tarih, durum ve tür gibi bilgileri girmesini bekler.

## Kullanılan Teknolojiler

- React
- react-redux
- axios
- react-toastify
- useFormik hook
- Yup

## Kullanılan Hooks ve Fonksiyonlar

- `useNavigate`: React Router DOM kütüphanesinden sayfa yönlendirmesi için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.
- `useFormik`: Form yönetimi için kullanılan bir formik hook'u.

## Form Yönetimi ve Doğrulama

- `formik` nesnesi, formun başlangıç değerleri, doğrulama şeması ve submit işlemi gibi form yönetimi ile ilgili tüm işlevleri içerir.
- `validationSchema`: Yup kütüphanesi ile tanımlanan doğrulama kurallarını içerir.

## Form Gönderme ve API İşlemleri

- `onSubmit` fonksiyonu, form gönderildiğinde çalışan fonksiyondur.
- Form verileri bir `FormData` nesnesine eklenir ve axios ile API'ye gönderilir.
- Gönderme başarılı olduğunda Redux store güncellenir ve kullanıcı ana sayfaya yönlendirilir.
- `react-toastify` kütüphanesi ile bilgilendirme mesajları gösterilir.

## Form Hata Mesajları

- Hata mesajları, formun doğrulama şemasına uygun olmadığında görüntülenir.

---

# JobList Sayfası

`JobList` sayfası, iş listesini görüntülemek için kullanılan bir bileşeni içerir. Kullanıcıya filtreleme seçenekleri, iş sayısı, bilgisi ve her bir işi gösteren kartları içerir.

## Kullanılan Teknolojiler

- React
- axios
- react-redux
- react-toastify

## Kullanılan React Redux Elemanları

- `useSelector`: Redux store'dan veri seçmek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

## Kullanılan Diğer Elemanlar

- `useEffect`: Sayfa yüklendiğinde veya bağımlılıklar değiştiğinde çalışan bir React hook'u.
- `useState`: Bileşen içindeki state yönetimi için kullanılır.

## API İşlemleri ve Redux Store

- `useEffect` hook'u ile axios kullanılarak API'den iş listesi çekilir.
- Çekilen veri, Redux store'a `setJobs` eylemi ile set edilir.
- Hata durumunda ise `setError` eylemi tetiklenir.

## Modal ve Kartlar

- Her bir iş, `Card` bileşeni içinde kart olarak gösterilir.
- İş kartları üzerine tıklanınca, `Modal` bileşeni ile iş detayları görüntülenir.

## Filtreleme ve Toast Mesajları

- `Filter` bileşeni ile işleri filtreleme seçenekleri sunulur.
- `react-toastify` kütüphanesi ile bilgilendirme mesajları gösterilir.

## Hata Kontrolü

- API'den veri çekilirken olası hatalara karşı kontrol eklenmiştir.
- Hata durumunda kullanıcıya bilgi verilir.

---

# Redux - jobSlice

`jobSlice.js` dosyası, Redux store için bir dilim (slice) oluşturan `createSlice` fonksiyonu ile oluşturulmuştur. Bu dilim, işlemler ve state yönetimi ile ilgili özelleştirilmiş eylemleri içerir.

## Kullanılan Teknolojiler

- @reduxjs/toolkit

## State Yapısı

- `mainJobs`: Başlangıçtaki tüm iş listesini içerir.
- `jobs`: Filtrelenmiş veya sıralanmış iş listesini içerir.
- `initialized`: State'in başlangıç durumunu belirten bir flag.
- `isError`: API'den veri çekilirken oluşan hata durumunu belirten bir flag.

## Eylemler (Actions)

### `setJobs`

- Tüm iş listesini ve filtrelenmiş iş listesini günceller.
- `initialized` flag'ini true yapar ve `isError` flag'ini false yapar.

### `setError`

- Hata durumunda `initialized` flag'ini ve `isError` flag'ini true yapar.

### `addJob`

- Yeni bir işi state'e ekler.

### `deleteJob`

- Belirli bir işi state'den siler.

### `editJob`

- Belirli bir işi düzenler ve state'i günceller.

### `filterBySearch`

- Şirket adına göre işleri filtreler.

### `filterByStatus`

- Duruma göre işleri filtreler.

### `filterByType`

- Türüne göre işleri filtreler.

### `sortJobs`

- İşleri belirli bir kritere göre sıralar.

### `clearFilters`

- Filtreleri temizler ve orijinal iş listesini gösterir.

---

# Redux Store - store.js

`store.js` dosyası, Redux store'unun oluşturulduğu ve kullanıldığı bir konfigürasyon içerir.

## Kullanılan Teknolojiler

- @reduxjs/toolkit

## Redux Store Oluşturma

- `configureStore` fonksiyonu kullanılarak Redux store oluşturulur.
- `reducer` özelliği ile `jobSlice` reducer'ı belirtilir.

## Kullanılan Redux Slice

- `jobSlice` dosyası, işlemler ve state yönetimi ile ilgili özelleştirilmiş eylemleri içeren bir Redux slice (dilim) içerir.

---

# React Uygulaması - App.jsx

`App.jsx` dosyası, React uygulamasının ana bileşenini içerir. Sayfa yönlendirmeleri için `react-router-dom` kullanılarak, `JobList` ve `AddJob` sayfalarını içeren bir uygulama tasarlanmıştır.

## Kullanılan Teknolojiler

- React
- react-router-dom

## Ana Bileşen ve Sayfa Yönlendirmeleri

- `BrowserRouter` ile sayfa yönlendirmelerini destekleyen bir bileşen kullanılır.
- `Routes` ile uygulamanın farklı sayfalarını tanımlar.
- `Route` ile her bir sayfa tanımlanır ve bu sayfaların hangi bileşenleri içereceği belirtilir.

## Sayfalar

### `JobList`

- Ana sayfa olarak kullanılır.
- İş listesini gösteren bir bileşeni içerir.

### `AddJob`

- Yeni iş eklemek için kullanılır.
- İş eklemeye yönelik bir bileşeni içerir.

### `Header`

- Sayfa başlığını içerir.

---

# React Uygulaması - main.jsx

`main.jsx` dosyası, React uygulamasının başlangıç noktasını belirler. Uygulamanın render edildiği ana dosyadır.

## Başlangıç Noktası

- `ReactDOM.createRoot` fonksiyonu ile uygulamanın render edileceği kök (root) element belirlenir.
- `Provider` ile uygulamanın Redux store'u sağlanır.
- `App` bileşeni render edilir.
- `ToastContainer` ile uygulama içinde toast bildirimleri için bir bileşen sağlanır.

---

# style.scss Dosyası

Bu style.scss dosyası, iş takip uygulamasının görünümünü düzenlemek ve stiline özgü özellikleri belirlemek için kullanılan SCSS (Sassy CSS) dosyasıdır.

---

## `Responsive Preview`

![Responsive Design Preview](/public/images/responsive.png)

---

## `Deploy`

Projenin canlıya alınmış hali : [Career Hub]([https://your-deployed-app-link.com](https://careertrackr.netlify.app/)https://careertrackr.netlify.app/)

---
