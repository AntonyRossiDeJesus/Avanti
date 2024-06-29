const VideoComponent: React.FC = () => {
  const videoSrc = "video/bannerhome.mp4";

  return (
    <video
      autoPlay
      loop
      muted
      className="absolute w-full h-full object-cover opacity-40"
    >
      <source src={videoSrc} />
    </video>
  );
};

export default VideoComponent;
