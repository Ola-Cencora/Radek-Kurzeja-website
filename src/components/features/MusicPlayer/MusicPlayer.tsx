interface MusicPlayerProps {
  title: string;
  src: string;
  href: string;
}
const MusicPlayer: React.FC<MusicPlayerProps> = ({ title, src, href }) => {
  return (
    <iframe
      title={title}
      style={{ border: 0, width: "350px", height: "470px" }}
      src={src}
      seamless
    >
      <a href={href}>{title}</a>
    </iframe>
  );
};

export default MusicPlayer;
