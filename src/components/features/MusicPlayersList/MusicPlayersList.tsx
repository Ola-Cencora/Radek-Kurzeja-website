import MusicPlayer from "../MusicPlayer/MusicPlayer";
import styles from "./MusicPlayersList.module.scss";

const MusicPlayersList: React.FC = () => {
  return (
    <div className={styles.players}>
      <MusicPlayer
        albumTitle="Etiudy i sztuka dokumentu - 2023"
        title="Etiudy i sztuka dokumentu | Jerzy Ridan i inni | Zapis koncertu by
        Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/album=132470931/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/etiudy-i-sztuka-dokumentu-jerzy-ridan-i-inni-zapis-koncertu"
      />
      <MusicPlayer
        albumTitle="Ogród Botaniczny w Palermo - 2020"
        title="Ogród Botaniczny w Palermo by Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/album=1490750413/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/ogr-d-botaniczny-w-palermo"
      />
      <MusicPlayer
        albumTitle="Scena Robocza | Sygnał / Szum - 2018"
        title="Scena Robocza | Sygnał / Szum | Live 2018 by Piotr Dąbrowski / Radosław Kurzeja / Suavas Lewy"
        src="https://bandcamp.com/EmbeddedPlayer/album=4092020751/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/scena-robocza-sygna-szum-live-2018"
      />
      <MusicPlayer
        albumTitle="Noce - 2017"
        title="Noce by Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/album=3485050896/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/noce"
      />
      <MusicPlayer
        albumTitle="Live Set at Artefakt Cafe - 2015"
        title="Live Set at Artefakt Cafe by Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/track=2960766904/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/track/live-set-at-artefakt-cafe"
      />
      <MusicPlayer
        albumTitle="Nowa Apokalipsa - 2014"
        title="Nowa Apokalipsa by Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/album=2926629416/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/nowa-apokalipsa"
      />
      <MusicPlayer
        albumTitle="Lake or Sad War - 2012"
        title="Lake or Sad War by Radosław Kurzeja"
        src="https://bandcamp.com/EmbeddedPlayer/album=428669952/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/lake-or-sad-war"
      />
      <MusicPlayer
        albumTitle="Cold Heart Enterprise - 2007"
        title="Cold Heart Enterprise by Chudik Maradik and The Ground Black Pepper"
        src="https://bandcamp.com/EmbeddedPlayer/album=2871125479/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
        href="https://radoslaw-kurzeja.bandcamp.com/album/cold-heart-enterprise"
      />
    </div>
  );
};

export default MusicPlayersList;
