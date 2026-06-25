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
    playlist3: [
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
      { name: "Tasakku Tasakku", source: "./Audios/Jakan-playList/Tasakku Tasakku - From _Vikram Vedha_.mp3" },
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
      { name: "Yethi Yethi", source: "./Audios/Jakan-playList/Yethi Yethi.mp3" }
    ]
  };

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

  // Only playlist3 button exists in HTML
  document.getElementById('playlist3').addEventListener('click', function () {
    initializePlaylist(playlists.playlist3, 'Jakan-Play List');
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
    if (currentPlaylist.length > 0) {
      currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
      playSong(currentSongIndex);
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentPlaylist.length > 0) {
      currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
      playSong(currentSongIndex);
    }
  });

  audio.addEventListener('ended', function () {
    if (currentPlaylist.length > 0) {
      currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
      playSong(currentSongIndex);
    }
  });
});
