const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: false,
  lrcType: 3,
  audio: [
    {
      name: "ninelie",
      artist: "Aimer,EGOIST",
      url: "../music-db/music/ninelie.mp3",
      cover: "../music-db/cover/ninelie.jpg",
      lrc: "../music-db/lrcs/ninelie.lrc",
    },
    {
      name: "ninelie (instrumental)",
      artist: "澤野弘之",
      url: "../music-db/music/ninelie (instrumental).mp3",
      cover: "../music-db/cover/ninelie.jpg",
      lrc: "../music-db/lrcs/ninelie (instrumental).lrc",
    },
    {
      name: "Roll the Dice",
      artist: "西川貴教",
      url: "../music-db/music/Roll the Dice.mp3",
      cover:
        "http://p1.music.126.net/R2fvdHpPKr3y7tVMidCFnA==/109951163684085129.jpg",
      lrc: "../music-db/lrcs/Roll the Dice.lrc",
    },
    {
      name: "Dearest",
      artist: "浜崎あゆみ",
      url: "../music-db/music/Dearest.mp3",
      cover:
        "https://p3fx.kgimg.com/stdmusic/20150719/20150719080820866907.jpg",
      lrc: "../music-db/lrcs/Dearest.lrc",
    },
  ],
});
