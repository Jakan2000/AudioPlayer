document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById('myAudio');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSongDisplay = document.getElementById('currentSong');
  const songListContainer = document.getElementById('songList');

  const playlists = {
    playlist1: [
            { name: "Adivellakkaara Velaayi", source: "./Audios/new love songs/muthusamy (1).mp3" },
            { name: "Aiyayo Aanadhame", source: "./Audios/new love songs/muthusamy (2).mp3" },
            { name: "Ayyo Adi Aathe ", source: "./Audios/new love songs/muthusamy (3).mp3" },
            { name: "Azhagazhaga Thodukirathe", source: "./Audios/new love songs/muthusamy (4).mp3" },
            { name: "Azhage", source: "./Audios/new love songs/muthusamy (5).mp3" },
            { name: "Chalmaar", source: "./Audios/new love songs/muthusamy (6).mp3" },
            { name: "Chinna Machan", source: "./Audios/new love songs/muthusamy (7).mp3" },
            { name: "En Nenjil - Baana", source: "./Audios/new love songs/muthusamy (8).mp3" },
            { name: "muthusamy (9)", source: "./Audios/new love songs/muthusamy (9).mp3" },
            { name: "En Kannu Kulla", source: "./Audios/new love songs/muthusamy (10).mp3" },
            { name: "En Anbe", source: "./Audios/new love songs/muthusamy (11).mp3" },
            { name: "Heartukulla", source: "./Audios/new love songs/muthusamy (14).mp3" },
            { name: "Imaye Imaye", source: "./Audios/new love songs/muthusamy (15).mp3" },
            { name: "muthusamy (17)", source: "./Audios/new love songs/muthusamy (17).mp3" },
            { name: "Kadhal Aasai", source: "./Audios/new love songs/muthusamy (18).mp3" },
            { name: "Kalyaana Vayasu", source: "./Audios/new love songs/muthusamy (20).mp3" },
            { name: "muthusamy (21)", source: "./Audios/new love songs/muthusamy (21).mp3" },
            { name: "Kannaana Kanney", source: "./Audios/new love songs/muthusamy (23).mp3" },
            { name: "Laali Laali", source: "./Audios/new love songs/muthusamy (24).mp3" },
            { name: "Maacho", source: "./Audios/new love songs/muthusamy (26).mp3" },
            { name: "muthusamy (27)", source: "./Audios/new love songs/muthusamy (27).mp3" },
            { name: "muthusamy (28)", source: "./Audios/new love songs/muthusamy (28).mp3" },
            { name: "Manmadhane Nee", source: "./Audios/new love songs/muthusamy (29).mp3" },
            { name: "Minnazhgal Koothadam", source: "./Audios/new love songs/muthusamy (32).mp3" },
            { name: "muthusamy (33)", source: "./Audios/new love songs/muthusamy (33).mp3" },
            { name: "Neethane", source: "./Audios/new love songs/muthusamy (36).mp3" },
            { name: "muthusamy (37)", source: "./Audios/new love songs/muthusamy (37).mp3" },
            { name: "Oh Penne", source: "./Audios/new love songs/muthusamy (39).mp3" },
            { name: "Olaga Vaayaadi", source: "./Audios/new love songs/muthusamy (40).mp3" },
            { name: "OnnaVitta Yaarum Yenakilla", source: "./Audios/new love songs/muthusamy (42).mp3" },
            { name: "Oru Kan Jaadai", source: "./Audios/new love songs/muthusamy (43).mp3" },
            { name: "Oxygen", source: "./Audios/new love songs/muthusamy (44).mp3" },
            { name: "Po Nee Po The Pain Of Love", source: "./Audios/new love songs/muthusamy (46).mp3" },
            { name: "Usure Usure", source: "./Audios/new love songs/muthusamy (56).mp3" },
            { name: "muthusamy (59)", source: "./Audios/new love songs/muthusamy (59).mp3" },
            { name: "Vettu Pottu", source: "./Audios/new love songs/muthusamy (60).mp3" },
            { name: "Yaaru Iva", source: "./Audios/new love songs/muthusamy (61).mp3" },
            { name: "Yedho Ondru Ennai", source: "./Audios/new love songs/muthusamy (62).mp3" },
            { name: "Sandalee", source: "./Audios/new love songs/muthusamy (63).mp3" },
            { name: "muthusamy (65)", source: "./Audios/new love songs/muthusamy (65).mp3" },
            { name: "Kanaa Kangiren", source: "./Audios/new love songs/muthusamy (66).mp3" },
            // Add more songs as needed for Playlist 1
          ],
          playlist2: [
            { name: "Marana Mass", source: "./Audios/kuthu/01 - Marana Mass - SenSongsmp3.Co.mp3" },
            { name: "Yenga Annan", source: "./Audios/kuthu/01 - Yenga Annan.mp3" },
            { name: "Lo Lo Lo Local", source: "./Audios/kuthu/02 Lo Lo Lo Local.mp3" },
            { name: "Don'u Don'u Don'u", source: "./Audios/kuthu/03 Don'u Don'u Don'u (The Don's Romance).mp3" },
            { name: "Neduvaali", source: "./Audios/kuthu/03 Neduvaali - Rahul Nambiar, Mahathi.mp3" },
            { name: "03.Chilax", source: "./Audios/kuthu/03.Chilax.mp3" },
            { name: "03.Jingunamani", source: "./Audios/kuthu/03.Jingunamani.mp3" },
            { name: "Vada vada Paiyya", source: "./Audios/kuthu/03.Vada vada Paiyya-M.L.R Karthikeyan,Anitha,Watta Bottles.mp3" },
            { name: "Hey Yenmaama", source: "./Audios/kuthu/3 Hey Yenmaama - Karthik & Suchitra & Megha.mp3" },
            { name: "Papa Papa", source: "./Audios/kuthu/4-Papa Papa-SenSongsMp3.Co.mp3" },
            { name: "Kalasala Kalasala", source: "./Audios/kuthu/05 Kalasala Kalasala.mp3" },
            { name: "Sonna Puriyadhu", source: "./Audios/kuthu/05 Sonna Puriyadhu - Vijay Antony_ Veera Shankar.mp3" },
            { name: "Yeh Aatha", source: "./Audios/kuthu/5 Yeh Aatha - Tipu Anuradhasriram.mp3" },
            { name: "Sathikkadi", source: "./Audios/kuthu/28 Sathikkadi_-_IsaiAruvi.Net.mp3" },
            { name: "Yennadi Muniyamma", source: "./Audios/kuthu/56  Yennadi Muniyamma [Remix] - Karthik & Playes.mp3" },
            { name: "Aalaporan-Thamizhan", source: "./Audios/kuthu/Aalaporan-Thamizhan-MyPaatu.mp3" },
            { name: "AchchoPunnakai", source: "./Audios/kuthu/AchchoPunnakai.mp3" },
            { name: "Adchithooku", source: "./Audios/kuthu/Adchithooku_Full_Video_Song___Viswasam_Video_Songs___Ajith_Kumar,_Nayanthara___D_Imman___Siva(256k).mp3" },
            { name: "AchchoPunnakai", source: "./Audios/kuthu/Andhurundai_Kannazhagi-VmusiQ.Com.mp3" },
            { name: "Appa Amma Vilayatta", source: "./Audios/kuthu/Appa Amma Vilayatta.mp3" },
            { name: "Appadi Podu", source: "./Audios/kuthu/Appadi Podu  K.K. Anuradha  asriram.mp3" },
            { name: "Arjunar Villu", source: "./Audios/kuthu/Arjunar Villu - Sukhwinder Sing  Manikka Vinayagam(0).mp3" },
            { name: "verithanam", source: "./Audios/kuthu/bigil_verithanam_lyric_video_tamil_thalapathy_vijay_nayanthara_ar_rahman_atlee_ags_zsFYtBwtHCE_720p.mp3" },
            { name: "Chennai_City_Gangsta", source: "./Audios/kuthu/Chennai_City_Gangsta-StarMusiQ.Com.mp3" },
            { name: "Chill Bro", source: "./Audios/kuthu/Chill Bro Lyrical Video - Pattas - Dhanush - Vivek - Mervin - Sathya Jyothi Films.mp3" },
            { name: "Daddy Mummy", source: "./Audios/kuthu/Daddy Mummy-Villu_720p.mp3" },
            { name: "chumma_kizhi", source: "./Audios/kuthu/darbar_tamil_chumma_kizhi_lyric_video_rajinikanth_ar_murugadoss_anirudh_subaskaran_FdVuB1G2G_g_720p.mp4-.mp3" },
            { name: "Desi Girl", source: "./Audios/kuthu/Desi Girl - TamilTunes.com.mp3" },
            { name: "Elantha pazham", source: "./Audios/kuthu/Elantha pazham-Tippu,Anuradhasriram..mp3" },
            { name: "En Peru Meenakumari", source: "./Audios/kuthu/En Peru Meenakumari.mp3" },
            { name: "En Uchimanda", source: "./Audios/kuthu/En Uchimanda.mp3" },
            { name: "Ennaththa Solvenungo", source: "./Audios/kuthu/Ennaththa Solvenungo  - Udit Narayanan, Anuradha Sriram.mp3" },
            { name: "Erangi_Vandhu", source: "./Audios/kuthu/Erangi_Vandhu-StarMusiQ.Com.mp3" },
            { name: "Ethir Neechal", source: "./Audios/kuthu/Ethir Neechal(SenSongsMp3.Co).mp3" },
            { name: "Hara_Hara_Maha_Devaki", source: "./Audios/kuthu/Hara_Hara_Maha_Devaki_(KuttyWap.com).mp3" },
            { name: "inky_pinky", source: "./Audios/kuthu/inky_pinky_starmusiq_com.mp3" },
            { name: "Jalsa Jalsa", source: "./Audios/kuthu/Jalsa Jalsa-Baba Sehgal.Ritta.mp3" },
            { name: "hey_amigo", source: "./Audios/kuthu/kaappaan_hey_amigo_video_suriya_sayyeshaa_harris_jayaraj_kv_anand_MwtKJG_87fw_720p.mp3" },
            { name: "kadhal_tholviya_pethavan_nanu", source: "./Audios/kuthu/kadhal_tholviya_pethavan_nanu_full_song(256kbps).mp3" },
            { name: "Kadhalikathey", source: "./Audios/kuthu/Kadhalikathey_(KuttyWap.com).mp3" },
            { name: "Kai_Kai_Vaikkura", source: "./Audios/kuthu/Kai_Kai_Vaikkura.mp3" },
            { name: "Kannitheevu_Ponna", source: "./Audios/kuthu/Kannitheevu_Ponna.mp3" },
            { name: "KARIKALA KALAM", source: "./Audios/kuthu/KARIKALA KALAM.mp3" },
            { name: "Katthi", source: "./Audios/kuthu/Katthi_-_Santesh____Official_Lyrics_Video_2017.mp3" },
            { name: "Kattu Kattu", source: "./Audios/kuthu/Kattu Kattu - Manikkavinayagam & Sumangali.mp3" },
            { name: "Kerala Song", source: "./Audios/kuthu/Kerala Song.mp3" },
            { name: "Kodambakkam Area", source: "./Audios/kuthu/Kodambakkam Area - Tippu & Shobachandrasekaran.mp3" },
            { name: "Kuchi Mittai", source: "./Audios/kuthu/Kuchi Mittai.mp3" },
            { name: "Kudukku", source: "./Audios/kuthu/Kudukku_Lyric_Video__Love_Action_Drama_Song__Nivin_Pauly,Nayanthara_Vineeth_Sreenivasan_Shaan_Rahman(128kbps).mp3" },
            { name: "Kumbeda Ponna Thaivam", source: "./Audios/kuthu/Kumbeda Ponna Thaivam - Sangarmagatheavan &Malathi.mp3" },
            { name: "Lalaa_Kadai_Saanthi", source: "./Audios/kuthu/Lalaa_Kadai_Saanthi_(KuttyWap.com).mp3" },
            { name: "Local Boys", source: "./Audios/kuthu/Local Boys(SenSongsMp3.Co).mp3" },
            { name: "Maari_2_-_Rowdy_Baby_", source: "./Audios/kuthu/Maari_2_-_Rowdy_Baby_(Lyric_Video).mp3" },
            { name: "Maatikichu", source: "./Audios/kuthu/Maatikichu_(KuttyWap.com).mp3" },
            { name: "Machi Engalukku", source: "./Audios/kuthu/Machi Engalukku.mp3" },
            { name: "Madura-Jilla", source: "./Audios/kuthu/Madura-Jilla.mp3" },
            { name: "Mambazhamam Mambazham", source: "./Audios/kuthu/Mambazhamam Mambazham - Shankar Mahadevan & Ganga.mp3" },
            { name: "Manjasela Mandakani", source: "./Audios/kuthu/Manjasela Mandakani.mp3" },
            { name: "Mascara Pottu", source: "./Audios/kuthu/Mascara Pottu - TamilTunes.com.mp3" },
            { name: "May Madham", source: "./Audios/kuthu/May Madham.mp3" },
            { name: "Mersal-Arasan", source: "./Audios/kuthu/Mersal-Arasan-MyPaatu.mp3" },
            { name: "Morattu_Single", source: "./Audios/kuthu/Morattu_Single_Video_Song___Hiphop_Tamizha,_Anagha___Sundar_C(256kbps).mp3" },
            { name: "Naam Nadanthal Adhiradi", source: "./Audios/kuthu/Naam Nadanthal Adhiradi.Mp3" },
            { name: "Naan-Konjam-Karuppu", source: "./Audios/kuthu/Naan-Konjam-Karuppu.mp3" },
            { name: "Nakka-Mukka", source: "./Audios/kuthu/Nakka-Mukka.mp3" },
            { name: "Nenjai Kasaki", source: "./Audios/kuthu/Nenjai Kasaki-SenSongsMp3.Co.mp3" },
            { name: "Ninaithale Inikkum - Pia.. Pia..", source: "./Audios/kuthu/Ninaithale Inikkum - Pia.. Pia.. Video - Vijay Antony.mp3" },
            { name: "Oh Baby Oh", source: "./Audios/kuthu/Oh Baby Oh-SenSongsMp3.Co.mp3" },
            { name: "Ollikuchi", source: "./Audios/kuthu/Ollikuchi - Red - TamilWire.com.mp3" },
            { name: "Open The Tasmac", source: "./Audios/kuthu/Open The Tasmac(SenSongsMp3.Co).mp3" },
            { name: "Oru Kuchi Oru Kulfi", source: "./Audios/kuthu/Oru Kuchi Oru Kulfi.mp3" },
            { name: "oru_sattai_oru_balpam", source: "./Audios/kuthu/oru_sattai_oru_balpam_video_song_kanchana_3_raghava_lawrence_oviya_vedika_sun_pictures_Dw9EsKHPW6U_1080p.mp3" },
            { name: "Palaandhu_Palaandhu_Kuruvi", source: "./Audios/kuthu/Palaandhu_Palaandhu_Kuruvi.mp3" },
            { name: "Panna Thappula", source: "./Audios/kuthu/Panna Thappula - Pushpavana Kuppuswamy & Anuradhasriram.mp3" },
            { name: "PENNORUTHI", source: "./Audios/kuthu/PENNORUTHI.mp3" },
            { name: "Poondamalli", source: "./Audios/kuthu/Poondamalli.mp3" },
            { name: "Pudichiruka Illa Pudikalaya", source: "./Audios/kuthu/Pudichiruka Illa Pudikalaya.mp3" },
            { name: "rajathi_raja_kathrikka_kathrikka", source: "./Audios/kuthu/rajathi_raja_kathrikka_kathrikka_video_lawrence_karunaas_5nyiizZz828_720p.mp3" },
            { name: "Rangu_Rakkara", source: "./Audios/kuthu/Rangu_Rakkara_(KuttyWap.com).mp3" },
            { name: "Saarattu Vandiyila", source: "./Audios/kuthu/Saarattu Vandiyila.mp3" },
            { name: "Saitji", source: "./Audios/kuthu/Saitji_(KuttyWap.com).mp3" },
            { name: "Saree Ke Fall Sa-", source: "./Audios/kuthu/Saree Ke Fall Sa-(Mr-Jatt.com).mp3" },
            { name: "Selfie-Pulla", source: "./Audios/kuthu/Selfie-Pulla.mp3" },
            { name: "Senjitaley", source: "./Audios/kuthu/Senjitaley  Starmusiq.cc .mp3" },
            { name: "Nee Kadhalikkum Ponnu", source: "./Audios/kuthu/Tamilmp3world.Com - Nee Kadhalikkum Ponnu.mp3" },
            { name: "Thaarumaaru Thakkaalisoru", source: "./Audios/kuthu/Thaarumaaru Thakkaalisoru.mp3" },
            { name: "Theeratha_Vilayattu_Pillai_", source: "./Audios/kuthu/Theeratha_Vilayattu_Pillai_-_Theeratha_Vilaiyattu_Video__Yuvanshankar_Raja__Vishal.mp3" },
            { name: "Va Va Nilava Pudichi", source: "./Audios/kuthu/Va Va Nilava Pudichi.mp3" },
            { name: "Vettikattu", source: "./Audios/kuthu/Vettikattu-[TamilDaDa.Info].mp3" },
            { name: "Vroom Vroom", source: "./Audios/kuthu/Vroom Vroom - TamilTunes.com.mp3" },
            { name: "What-a-Karavaad", source: "./Audios/kuthu/What-a-Karavaad.mp3" },
            { name: "Why_This_Kolaveri", source: "./Audios/kuthu/Why_This_Kolaveri.mp3" },
            { name: "Wi Wi Wi Wi Wifi", source: "./Audios/kuthu/Wi Wi Wi Wi Wifi.mp3" },
            { name: "Yen Chellaperu Apple", source: "./Audios/kuthu/Yen Chellaperu Apple - A.V.Ramanan & Suchitra.mp3" },
            // Add more songs as needed for Playlist 2
          ],
          playlist3: [
            { name: "MARATHA VACHAVAN", source: "./Audios/Meloady/000ilasokjk (49).mp3" },
            { name: "Unnai Nenachen", source: "./Audios/Meloady/002.MP3" },
            { name: "02-Track", source: "./Audios/Meloady/02-Track.MP3" },
            { name: "Ooru Sanam", source: "./Audios/Meloady/07-Ooru Sanam.mp3" },
            { name: "09-Track", source: "./Audios/Meloady/09-Track.MP3" },
            { name: "AZHAKAN", source: "./Audios/Meloady/13.AZHAKAN.mp3" },
            { name: "kaaththirunthu kaaththirunthu", source: "./Audios/Meloady/020  kaaththirunthu kaaththirunthu.mp3" },
            { name: "Vellai Manam", source: "./Audios/Meloady/21.Vellai Manam (e).mp3" },
            { name: "SELAI KATTUM", source: "./Audios/Meloady/037 SELAI KATTUM.mp3" },
            { name: "Track 10", source: "./Audios/Meloady/44_artist - Track 10.mp3" },
            { name: "vandikkaran", source: "./Audios/Meloady/045 vandikkaran.MP3" },
            { name: "KALAI KALAI", source: "./Audios/Meloady/058 KALAI KALAI.mp3" },
            { name: "CHINNA MANI", source: "./Audios/Meloady/098 CHINNA MANI.mp3" },
            { name: "MALAIYORAM_VEESUM", source: "./Audios/Meloady/457   MALAIYORAM_VEESUM.mp3" },
            { name: "AADHORATHILEY", source: "./Audios/Meloady/AADHORATHILEY.mp3" },
            { name: "Amma Amma…", source: "./Audios/Meloady/Amma Amma….mp3" },
            { name: "En Uyir Kadhalae", source: "./Audios/Meloady/En+Uyir+Kadhalae+Tamil+Album+Song[Singamda.In].mp3" },
            { name: "Ennai Thottu", source: "./Audios/Meloady/Ennai Thottu - Swarnalatha.mp3" },
            { name: "Mandram", source: "./Audios/Meloady/Mandram.mp3" },
            { name: "Paadi Parantha", source: "./Audios/Meloady/MUTHU Melody (1).MP3" },
            { name: "ENKANNUKORU", source: "./Audios/Meloady/MUTHU Melody (2).mp3" },
            { name: "MUTHU Melody (3)", source: "./Audios/Meloady/MUTHU Melody (3).MP3" },
            { name: "MUTHU Melody (4)", source: "./Audios/Meloady/MUTHU Melody (4).mp3" },
            { name: "MUTHU Melody (5)", source: "./Audios/Meloady/MUTHU Melody (5).mp3" },
            { name: "KELADI KANMANI", source: "./Audios/Meloady/MUTHU Melody (6).mp3" },
            { name: "adiye adi chinna pulla", source: "./Audios/Meloady/MUTHU Melody (7).MP3" },
            { name: "ennai thottu", source: "./Audios/Meloady/MUTHU Melody (8).MP3" },
            { name: "muthu nagaiyai", source: "./Audios/Meloady/MUTHU Melody (9).MP3" },
            { name: "Nee Enge ", source: "./AudioPlayer/Audios/Meloady/MUTHU Melody (10).mp3" },
            { name: "Oru Naalum", source: "./Audios/Meloady/MUTHU Melody (11).mp3" },
            { name: "povomma", source: "./Audios/Meloady/MUTHU Melody (12).MP3" },
            { name: "MUTHU Melody (13)", source: "./Audios/Meloady/MUTHU Melody (13).MP3" },
            { name: "Muthu Super Songs (1)", source: "./Audios/Meloady/Muthu Super Songs (1).mp3" },
            { name: "Muthu Super Songs (2)", source: "./Audios/Meloady/Muthu Super Songs (2).mp3" },
            { name: "Muthu Super Songs (3)", source: "./Audios/Meloady/Muthu Super Songs (3).mp3" },
            { name: "ERUNKA  CHEDI", source: "./Audios/Meloady/Muthu Super Songs (4).mp3" },
            { name: "nagaya", source: "./Audios/Meloady/Muthu Super Songs (16).mp3" },
            { name: "Guruvayurappa", source: "./Audios/Meloady/Muthu Super Songs (23).mp3" },
            { name: "KURUKKU PAATHAI", source: "./Audios/Meloady/Muthu Super Songs (26).mp3" },
            { name: "Muthu Super Songs (28)", source: "./Audios/Meloady/Muthu Super Songs (28).mp3" },
            { name: "Mannakkum Malligai....", source: "./Audios/Meloady/Muthu Super Songs (31).mp3" },
            { name: "Muthu Super Songs (33)", source: "./Audios/Meloady/Muthu Super Songs (33).mp3" },
            { name: "Muthu Super Songs (45)", source: "./Audios/Meloady/Muthu Super Songs (45).mp3" },
            { name: "Muthu Super Songs (58)", source: "./Audios/Meloady/Muthu Super Songs (58).mp3" },
            { name: "Aalapol Velapol", source: "./Audios/Meloady/Muthu Super Songs (62).mp3" },
            { name: "Aathi Vaadaiyela", source: "./Audios/Meloady/Muthu Super Songs (65).mp3" },
            { name: "Enakena Pirandhava", source: "./Audios/Meloady/Muthu Super Songs (73).mp3" },
            { name: "Muthu Super Songs (74)", source: "./Audios/Meloady/Muthu Super Songs (74).mp3" },
            { name: "sollavo", source: "./Audios/Meloady/Muthu Super Songs (80).mp3" },
            { name: "Muthu Super Songs (81)", source: "./Audios/Meloady/Muthu Super Songs (81).mp3" },
            { name: "Muthu Super Songs (82)", source: "./Audios/Meloady/Muthu Super Songs (82).mp3" },
            { name: "Muthu Super Songs (83)", source: "./Audios/Meloady/Muthu Super Songs (83).mp3" },
            { name: "Muthu Super Songs (84)", source: "./Audios/Meloady/Muthu Super Songs (84).mp3" },
            { name: "Muthu Super Songs (85)", source: "./Audios/Meloady/Muthu Super Songs (85).mp3" },
            { name: "Muthu Super Songs (86)", source: "./Audios/Meloady/Muthu Super Songs (86).mp3" },
            { name: "Muthu Super Songs (87)", source: "./Audios/Meloady/Muthu Super Songs (87).mp3" },
            { name: "Muthumani Malai", source: "./Audios/Meloady/Muthu Super Songs (89).mp3" },
            { name: "Naan Yerikkara", source: "./Audios/Meloady/Muthu Super Songs (90).mp3" },
            { name: "KALAI", source: "./Audios/Meloady/muthusamy (1).mp3" },
            { name: "muthusamy (2)", source: "./Audios/Meloady/muthusamy (2).mp3" },
            { name: "Malaiyoram Veesum...", source: "./Audios/Meloady/muthusamy (3).mp3" },
            { name: "Swarnalatha", source: "./Audios/Meloady/muthusamy (4).mp3" },
            { name: "Vai", source: "./Audios/Meloady/muthusamy (5).mp3" },
            { name: "Mandram", source: "./Audios/Meloady/muthusamy (6).mp3" },
            { name: "Paadi Parantha", source: "./Audios/Meloady/muthusamy (7).mp3" },
            { name: "ENKANNUKORU", source: "./Audios/Meloady/muthusamy (8).mp3" },
            { name: "muthusamy (9)", source: "./Audios/Meloady/muthusamy (9).mp3" },
            { name: "muthusamy (10)", source: "./Audios/Meloady/muthusamy (10).mp3" },
            { name: "muthusamy (11)", source: "./Audios/Meloady/muthusamy (11).mp3" },
            { name: "KELADI KANMANI", source: "./Audios/Meloady/muthusamy (12).mp3" },
            { name: "adiye adi chinna pulla", source: "./Audios/Meloady/muthusamy (13).mp3" },
            { name: "ennai thottu", source: "./Audios/Meloady/muthusamy (14).mp3" },
            { name: "muthu nagaiyai", source: "./Audios/Meloady/muthusamy (15).mp3" },
            { name: "Nee Enge", source: "./Audios/Meloady/muthusamy (16).mp3" },
            { name: "Oru Naalum", source: "./Audios/Meloady/muthusamy (17).mp3" },
            { name: "povomma", source: "./Audios/Meloady/muthusamy (18).mp3" },
            { name: "muthusamy (19)", source: "./Audios/Meloady/muthusamy (19).mp3" },
            { name: "muthusamy (20)", source: "./Audios/Meloady/muthusamy (20).mp3" },
            { name: "muthusamy (21)", source: "./Audios/Meloady/muthusamy (21).mp3" },
            { name: "muthusamy (22)", source: "./Audios/Meloady/muthusamy (22).mp3" },
            { name: "ERUNKA  CHEDI", source: "./Audios/Meloady/muthusamy (23).mp3" },
            { name: "nagaya", source: "./Audios/Meloady/muthusamy (24).mp3" },
            { name: "Guruvayurappa", source: "./Audios/Meloady/muthusamy (25).mp3" },
            { name: "KURUKKU PAATHAI", source: "./Audios/Meloady/muthusamy (26).mp3" },
            { name: "muthusamy (27)", source: "./Audios/Meloady/muthusamy (27).mp3" },
            { name: "Mannakkum Malligai...", source: "./Audios/Meloady/muthusamy (28).mp3" },
            { name: "muthusamy (29)", source: "./Audios/Meloady/muthusamy (29).mp3" },
            { name: "muthusamy (30)", source: "./Audios/Meloady/muthusamy (30).mp3" },
            { name: "muthusamy (31)", source: "./Audios/Meloady/muthusamy (31).mp3" },
            { name: "muthusamy (32)", source: "./Audios/Meloady/muthusamy (32).mp3" },
            { name: "muthusamy (33)", source: "./Audios/Meloady/muthusamy (33).mp3" },
            { name: "Aalapol Velapol", source: "./Audios/Meloady/muthusamy (34).mp3" },
            { name: "Aathi Vaadaiyela", source: "./Audios/Meloady/muthusamy (35).mp3" },
            { name: "Enakena Pirandhava", source: "./Audios/Meloady/muthusamy (36).mp3" },
            { name: "muthusamy (37)", source: "./Audios/Meloady/muthusamy (37).mp3" },
            { name: "sollavo", source: "./Audios/Meloady/muthusamy (38).mp3" },
            { name: "muthusamy (39)", source: "./Audios/Meloady/muthusamy (39).mp3" },
            { name: "muthusamy (40)", source: "./Audios/Meloady/muthusamy (40).mp3" },
            { name: "muthusamy (41)", source: "./Audios/Meloady/muthusamy (41).mp3" },
            { name: "muthusamy (42)", source: "./Audios/Meloady/muthusamy (42).mp3" },
            { name: "muthusamy (43)", source: "./Audios/Meloady/muthusamy (43).mp3" },
            { name: "muthusamy (44)", source: "./Audios/Meloady/muthusamy (44).mp3" },
            { name: "muthusamy (45)", source: "./Audios/Meloady/muthusamy (45).mp3" },
            { name: "Muthumani Malai", source: "./Audios/Meloady/muthusamy (46).mp3" },
            { name: "Naan Yerikkara", source: "./Audios/Meloady/muthusamy (47).mp3" },
            { name: "POTTU_VACHA", source: "./Audios/Meloady/muthusamy (48).mp3" },
            { name: "muthusamy (49)", source: "./Audios/Meloady/muthusamy (49).mp3" },
            { name: "muthusamy (50)", source: "./Audios/Meloady/muthusamy (50).mp3" },
            { name: "poova", source: "./Audios/Meloady/muthusamy (51).mp3" },
            { name: "poove poochudava", source: "./Audios/Meloady/muthusamy (52).mp3" },
            { name: "Povoomaa", source: "./Audios/Meloady/muthusamy (53).mp3" },
            { name: "POTHI VACHA MALLI", source: "./Audios/Meloady/muthusamy (54).mp3" },
            { name: "raasathi", source: "./Audios/Meloady/muthusamy (55).mp3" },
            { name: "thanna vanda", source: "./Audios/Meloady/muthusamy (56).mp3" },
            { name: "muthusamy (57)", source: "./Audios/Meloady/muthusamy (57).mp3" },
            { name: "ALAPOL VELAPOL", source: "./Audios/Meloady/muthusamy (58).mp3" },
            { name: "muthusamy (59)", source: "./Audios/Meloady/muthusamy (59).mp3" },
            { name: "ENGA OORU KAVALKAR", source: "./Audios/Meloady/muthusamy (60).mp3" },
            { name: "muthusamy (61)", source: "./Audios/Meloady/muthusamy (61).mp3" },
            { name: "ADI AATTHAADI", source: "./Audios/Meloady/muthusamy (62).mp3" },
            { name: "muthusamy (63)", source: "./Audios/Meloady/muthusamy (63).mp3" },
            { name: "ERUNKA  CHEDI", source: "./Audios/Meloady/muthusamy (64).mp3" },
            { name: "muthusamy (65)", source: "./Audios/Meloady/muthusamy (65).mp3" },
            { name: "muthusamy (66)", source: "./Audios/Meloady/muthusamy (66).mp3" },
            { name: "muthusamy (67)", source: "./Audios/Meloady/muthusamy (67).mp3" },
            { name: "KAATUKUYIL PAATU CHOLI-SPB&S", source: "./Audios/Meloady/muthusamy (68).mp3" },
            { name: "Solaiyamma", source: "./Audios/Meloady/muthusamy (69).mp3" },
            { name: "kungummam", source: "./Audios/Meloady/muthusamy (70).mp3" },
            { name: "muthusamy (71)", source: "./Audios/Meloady/muthusamy (71).mp3" },
            { name: "muthusamy (72)", source: "./Audios/Meloady/muthusamy (72).mp3" },
            { name: "muthusamy (73)", source: "./Audios/Meloady/muthusamy (73).mp3" },
            { name: "muthusamy (74)", source: "./Audios/Meloady/muthusamy (74).mp3" },
            { name: "MALLIGAI  MOTTU", source: "./Audios/Meloady/muthusamy (75).mp3" },
            { name: "muthusamy (76)", source: "./Audios/Meloady/muthusamy (76).mp3" },
            { name: "Kattrae", source: "./Audios/Meloady/muthusamy (77).mp3" },
            { name: "Thenpandi", source: "./Audios/Meloady/muthusamy (78).mp3" },
            { name: "UNNA PAARTHA", source: "./Audios/Meloady/muthusamy (79).mp3" },
            { name: "muthusamy (80)", source: "./Audios/Meloady/muthusamy (80).mp3" },
            { name: "muthusamy (81)", source: "./Audios/Meloady/muthusamy (81).mp3" },
            { name: "Vellikolusu", source: "./Audios/Meloady/muthusamy (82).mp3" },
            { name: "muthusamy (83)", source: "./Audios/Meloady/muthusamy (83).mp3" },
            { name: "muthusamy (84)", source: "./Audios/Meloady/muthusamy (84).mp3" },
            { name: "SINTHYA VENMANI", source: "./Audios/Meloady/muthusamy (85).mp3" },
            { name: "siru kootula", source: "./Audios/Meloady/muthusamy (86).mp3" },
            { name: "MALLIGAIYEH", source: "./Audios/Meloady/muthusamy (87).mp3" },
            { name: "Ooraterinjukiten", source: "./Audios/Meloady/muthusamy (88).mp3" },
            { name: "muthusamy (89)", source: "./Audios/Meloady/muthusamy (89).mp3" },
            { name: "Solai Malai Opram", source: "./Audios/Meloady/muthusamy (90).mp3" },
            { name: "THENDREL  KATRE", source: "./Audios/Meloady/muthusamy (91).mp3" },
            { name: "Unnaithane", source: "./Audios/Meloady/muthusamy (92).mp3" },
            { name: "Vanamellam Senbahapoo", source: "./Audios/Meloady/muthusamy (93).mp3" },
            { name: "KAATHIRUNTHU", source: "./Audios/Meloady/muthusamy (94).mp3" },
            { name: "muthusamy (95)", source: "./Audios/Meloady/muthusamy (95).mp3" },
            { name: "MARATHA VACHAVAN", source: "./Audios/Meloady/muthusamy (96).mp3" },
            { name: "muthusamy (97)", source: "./Audios/Meloady/muthusamy (97).mp3" },
            { name: "Unnai Nenachen", source: "./Audios/Meloady/muthusamy (98).mp3" },
            { name: "muthusamy (99)", source: "./Audios/Meloady/muthusamy (99).mp3" },
            { name: "AATHADI", source: "./Audios/Meloady/muthusamy (100).mp3" },
            { name: "Ooru Sanam", source: "./Audios/Meloady/muthusamy (101).mp3" },
            { name: "muthusamy (102)", source: "./Audios/Meloady/muthusamy (102).mp3" },
            { name: "AZHAKAN", source: "./Audios/Meloady/muthusamy (103).mp3" },
            { name: "muthusamy (104)", source: "./Audios/Meloady/muthusamy (104).mp3" },
            { name: "Vellai Manam", source: "./Audios/Meloady/muthusamy (105).mp3" },
            
            { name: "muthusamy (106)", source: "./Audios/Meloady/muthusamy (106).mp3" },
            { name: "muthusamy (107)", source: "./Audios/Meloady/muthusamy (107).mp3" },
            { name: "NEE_POTTU_VACHA", source: "./Audios/Meloady/NEE_POTTU_VACHA___MANO___CH.MP3" },
            { name: "Ooraterinjukiten", source: "./Audios/Meloady/Ooraterinjukiten[yesudas].mp3" },
            { name: "sethura poo", source: "./Audios/Meloady/sethura poo.mp3" },
            // Add more songs as needed for Playlist 3
          ],
          playlist4: [
            { name: "Adada Adada", source: "./Audios/Jakan-playList/Adada Adada.mp3" },
            { name: "Adi Odi", source: "./Audios/Jakan-playList/Adi Odi - From _Atti Culture_.mp3" },
            { name: "Adiye", source: "./Audios/Jakan-playList/Adiye - From _Bachelor_.mp3" },
            { name: "Aga Naga", source: "./Audios/Jakan-playList/Aga Naga.mp3" },
            { name: "Akatsuki", source: "./Audios/Jakan-playList/Akatsuki.mp3" },
            { name: "Bad Eyes Villain Theme", source: "./Audios/Jakan-playList/Bad Eyes Villain Theme - Instrumental.mp3" },
            { name: "Balle Lakka", source: "./Audios/Jakan-playList/Balle Lakka.mp3" },
            { name: "Bananza (Belly Dancer)", source: "./Audios/Jakan-playList/Bananza (Belly Dancer).mp3" },
            { name: "Believer", source: "./Audios/Jakan-playList/Believer.mp3" },
            { name: "Bhagavan Rap", source: "./Audios/Jakan-playList/Bhagavan Rap.mp3" },
            { name: "Boombastic", source: "./Audios/Jakan-playList/Boombastic.mp3" },
            { name: "Chitti Dance Showcase", source: "./Audios/Jakan-playList/Chitti Dance Showcase.mp3" },
            { name: "Closer", source: "./Audios/Jakan-playList/Closer.mp3" },
            { name: "Cradles", source: "./Audios/Jakan-playList/Cradles.mp3" },
            { name: "Don't Let Me Down", source: "./Audios/Jakan-playList/Don't Let Me Down.mp3" },
            { name: "Don'u Don'u Don'u", source: "./Audios/Jakan-playList/Don'u Don'u Don'u (From _Maari_) - The Don's Romance.mp3" },
            { name: "En Jannal Vandha", source: "./Audios/Jakan-playList/En Jannal Vandha.mp3" },
            { name: "En Kadhal Solla", source: "./Audios/Jakan-playList/En Kadhal Solla.mp3" },
            { name: "Enemy", source: "./Audios/Jakan-playList/Enemy (with JID) - from the series Arcane League of Legends.mp3" },
            { name: "Ethir Neechal", source: "./Audios/Jakan-playList/Ethir Neechal.mp3" },
            { name: "Evanda Enakku Custody", source: "./Audios/Jakan-playList/Evanda Enakku Custody.mp3" },
            { name: "Falling", source: "./Audios/Jakan-playList/Falling.mp3" },
            { name: "Gangsta's Paradise", source: "./Audios/Jakan-playList/Gangsta's Paradise.mp3" },
            { name: "Go!", source: "./Audios/Jakan-playList/Go!.mp3" },
            { name: "Hall of Fame", source: "./Audios/Jakan-playList/Hall of Fame (feat. will.i.am).mp3" },
            { name: "Happy New Year", source: "./Audios/Jakan-playList/Happy New Year.mp3" },
            { name: "Hukum - Thalaivar Alappara", source: "./Audios/Jakan-playList/Hukum - Thalaivar Alappara.mp3" },
            { name: "I Ain't Worried", source: "./Audios/Jakan-playList/I Ain't Worried.mp3" },
            { name: "In Da Club", source: "./Audios/Jakan-playList/In Da Club.mp3" },
            { name: "INDUSTRY BABY", source: "./Audios/Jakan-playList/INDUSTRY BABY (feat. Jack Harlow).mp3" },
            { name: "Kaaka Kadha", source: "./Audios/Jakan-playList/Kaaka Kadha - From _Think Indie_.mp3" },
            { name: "Kadhal Kappal", source: "./Audios/Jakan-playList/Kadhal Kappal.mp3" },
            { name: "Kadhal Valarthen", source: "./Audios/Jakan-playList/Kadhal Valarthen.mp3" },
            { name: "Kannamma", source: "./Audios/Jakan-playList/Kannamma - From _Ispade Rajavum Idhaya Raniyum_.mp3" },
            { name: "Karu Karu Karupayi", source: "./Audios/Jakan-playList/Karu Karu Karupayi.mp3" },
            { name: "Karuthavanlaam Galeejaam", source: "./Audios/Jakan-playList/Karuthavanlaam Galeejaam (From _Velaikkaran_).mp3" },
            { name: "Kasu Panam", source: "./Audios/Jakan-playList/Kasu Panam - From _Soodhu Kavvum_.mp3" },
            { name: "Kodana Kodi", source: "./Audios/Jakan-playList/Kodana Kodi.mp3" },
            { name: "Lonely", source: "./Audios/Jakan-playList/Lonely.mp3" },
            { name: "Loosu Pennae", source: "./Audios/Jakan-playList/Loosu Pennae.mp3" },
            { name: "Maadeva", source: "./Audios/Jakan-playList/Maadeva.mp3" },
            { name: "Madai Thiranthu", source: "./Audios/Jakan-playList/Madai Thiranthu - Hit Track.mp3" },
            { name: "Manavaalan Thug", source: "./Audios/Jakan-playList/Manavaalan Thug - From _Thallumaala_.mp3" },
            { name: "Meesaya Murukku", source: "./Audios/Jakan-playList/Meesaya Murukku.mp3" },
            { name: "MEMORIES!", source: "./Audios/Jakan-playList/MEMORIES!.mp3" },
            { name: "Mind", source: "./Audios/Jakan-playList/Mind (feat. Kai).mp3" },
            { name: "Missing Me", source: "./Audios/Jakan-playList/Missing Me (From _Mahaan (Tamil)_).mp3" },
            { name: "Mockingbird", source: "./Audios/Jakan-playList/Mockingbird (Sped Up).mp3" },
            { name: "MONEY", source: "./Audios/Jakan-playList/MONEY.mp3" },
            { name: "My Indian Girls", source: "./Audios/Jakan-playList/My Indian Girls.mp3" },
            { name: "Naan Sonnadhum Mazhai", source: "./Audios/Jakan-playList/Naan Sonnadhum Mazhai.mp3" },
            { name: "Nadanthavaraikumey", source: "./Audios/Jakan-playList/Nadanthavaraikumey.mp3" },
            { name: "Nahna Na Nah", source: "./Audios/Jakan-playList/Nahna Na Nah.mp3" },
            { name: "Neethane", source: "./Audios/Jakan-playList/Neethane.mp3" },
            { name: "Neeye Oli", source: "./Audios/Jakan-playList/Neeye Oli.mp3" },
            { name: "Nenjinile Rebirth", source: "./Audios/Jakan-playList/Nenjinile Rebirth.mp3" },
            { name: "Oh Penne", source: "./Audios/Jakan-playList/Oh Penne.mp3" },
            { name: "Old Town Road", source: "./Audios/Jakan-playList/Old Town Road.mp3" },
            { name: "Otha Sollaala", source: "./Audios/Jakan-playList/Otha Sollaala.mp3" },
            { name: "P.I.M.P.", source: "./Audios/Jakan-playList/P.I.M.P..mp3" },
            { name: "Pakkam Vanthu", source: "./Audios/Jakan-playList/Pakkam Vanthu.mp3" },
            { name: "Pathala Pathala", source: "./Audios/Jakan-playList/Pathala Pathala (From _Vikram_).mp3" },
            { name: "Patta Patti", source: "./Audios/Jakan-playList/Patta Patti.mp3" },
            { name: "Pettai Rap", source: "./Audios/Jakan-playList/Pettai Rap.mp3" },
            { name: "Ponmagal Vandaal", source: "./Audios/Jakan-playList/Ponmagal Vandaal.mp3" },
            { name: "Rich Rich", source: "./Audios/Jakan-playList/Rich Rich (From _Mahaan_).mp3" },
            { name: "rockstar", source: "./Audios/Jakan-playList/rockstar (feat. 21 Savage).mp3" },
            { name: "Showkali", source: "./Audios/Jakan-playList/Showkali (From _Achcham Yenbadhu Madamaiyada_).mp3" },
            { name: "Singaar Singh Theme", source: "./Audios/Jakan-playList/Singaar Singh Theme - From _Petta_.mp3" },
            { name: "Single Pasanga", source: "./Audios/Jakan-playList/Single Pasanga.mp3" },
            { name: "Siragugal", source: "./Audios/Jakan-playList/Siragugal.mp3" },
            { name: "So Baby", source: "./Audios/Jakan-playList/So Baby (From _Doctor_).mp3" },
            { name: "Stan", source: "./Audios/Jakan-playList/Stan.mp3" },
            { name: "Stereo Hearts", source: "./Audios/Jakan-playList/Stereo Hearts (feat. Adam Levine).mp3" },
            { name: "Sudden Delight", source: "./Audios/Jakan-playList/Sudden Delight.mp3" },
            { name: "Takkaru Takkaru", source: "./Audios/Jakan-playList/Takkaru Takkaru.mp3" },
            { name: "Tasakku Tasakku", source: "./AudiosJakan-playList/Tasakku Tasakku - From _Vikram Vedha_.mp3" },
            { name: "Taxi Taxi", source: "./Audios/Jakan-playList/Taxi Taxi.mp3" },
            { name: "Thamarai Poovukkum", source: "./Audios/Jakan-playList/Thamarai Poovukkum (From _Pasumpon_).mp3" },
            { name: "Thathaka Theithare", source: "./Audios/Jakan-playList/Thathaka Theithare.mp3" },
            { name: "The Real Slim Shady", source: "./Audios/Jakan-playList/The Real Slim Shady.mp3" },
            { name: "Theemai Dhaan Vellum", source: "./Audios/Jakan-playList/Theemai Dhaan Vellum - Awakening the Monster.mp3" },
            { name: "Thrift Shop", source: "./Audios/Jakan-playList/Thrift Shop (feat. Wanz).mp3" },
            { name: "Thunder", source: "./Audios/Jakan-playList/Thunder.mp3" },
            { name: "Till I Collapse", source: "./Audios/Jakan-playList/Till I Collapse.mp3" },
            { name: "Toxic", source: "./Audios/Jakan-playList/Toxic.mp3" },
            { name: "Udhungada Sangu", source: "./Audios/Jakan-playList/Udhungada Sangu.mp3" },
            { name: "Understand", source: "./Audios/Jakan-playList/Understand.mp3" },
            { name: "Vaadi Pulla Vaadi", source: "./Audios/Jakan-playList/Vaadi Pulla Vaadi - From _Meesaya Murukku_.mp3" },
            { name: "Vaathi Coming", source: "./Audios/Jakan-playList/Vaathi Coming.mp3" },
            { name: "Vaathi Kabbadi", source: "./Audios/Jakan-playList/Vaathi Kabbadi - Background Score.mp3" },
            { name: "Vaathi Raid", source: "./Audios/Jakan-playList/Vaathi Raid.mp3" },
            { name: "Venmegam", source: "./Audios/Jakan-playList/Venmegam.mp3" },
            { name: "Vilayaadu Mankatha", source: "./Audios/Jakan-playList/Vilayaadu Mankatha.mp3" },
            { name: "Without Me", source: "./Audios/Jakan-playList/Without Me.mp3" },
            { name: "Worth It", source: "./Audios/Jakan-playList/Worth It (feat. Kid Ink).mp3" },
            { name: "XO Tour Llif3", source: "./Audios/Jakan-playList/XO Tour Llif3.mp3" },
            { name: "Yethi Yethi", source: "./Audios/Jakan-playList/Yethi Yethi.mp3" },]
  }

  let currentPlaylist = [];
  let currentPlaylistName = '';
  let currentSongIndex = 0;

  function displaySongList(playlist) {
    songListContainer.innerHTML = '';
    playlist.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song-item');
      songElement.textContent = `${index + 1}. ${song.name}`;
      songElement.addEventListener('click', () => playSong(index));
      songListContainer.appendChild(songElement);
    });
  }

  function playSong(index) {
    currentSongIndex = index;
    audio.src = currentPlaylist[currentSongIndex].source;
    audio.play();
    updateCurrentSongDisplay(currentPlaylist[currentSongIndex].name);
  }

  function updateCurrentSongDisplay(songName) {
    currentSongDisplay.innerText = `Now Playing (${currentPlaylistName}): ${songName}`;
  }

  function initializePlaylist(playlist, playlistName) {
    currentPlaylist = playlist;
    currentPlaylistName = playlistName;
    currentSongIndex = 0;
    displaySongList(currentPlaylist);
    playSong(currentSongIndex);
  }

  document.getElementById('playlist1').addEventListener('click', function () {
    initializePlaylist(playlists.playlist1, 'Muthu-Love Songs');
  });

  document.getElementById('playlist2').addEventListener('click', function () {
    initializePlaylist(playlists.playlist2, 'Muthu-Kuthu');
  });

  document.getElementById('playlist3').addEventListener('click', function () {
    initializePlaylist(playlists.playlist3, 'Muthu-Old Melody');
  });

  document.getElementById('playlist4').addEventListener('click', function () {
    initializePlaylist(playlists.playlist4, 'Jakan-Play List');
  });

  playBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  pauseBtn.addEventListener('click', function () {
    audio.pause();
  });

  stopBtn.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    currentSongDisplay.innerText = "No song selected";
  });

  prevBtn.addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentSongIndex);
  });

  nextBtn.addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    playSong(currentSongIndex);
  });

  function playFirstSong() {
    if (currentPlaylist.length > 0) {
      playSong(currentSongIndex);
    }
  }

  audio.addEventListener('ended', function () {
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    playSong(currentSongIndex);
  });
});
