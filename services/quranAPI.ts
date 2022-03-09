import axios from 'axios';

const quranAPIInstance = axios.create({
  baseURL: 'https://api.quran.sutanlab.id',
});

// handlers
const quranAPI = {
  getSurahList: () => {
    return quranAPIInstance.get('/surah');
  },
  getSurahByNumber: (surahNumber: string) => {
    return quranAPIInstance.get(`/surah/${surahNumber}`);
  },
  getAyahByNumber: (surahNumber: string, ayahNumber: string) => {
    return quranAPIInstance.get(`/surah/${surahNumber}/${ayahNumber}`);
  },
  getJuzByNumber: (juzNumber: string) => {
    return quranAPIInstance.get(`/juz/${juzNumber}`);
  },
}

export default quranAPI;
