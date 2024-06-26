const VideoComponent: React.FC = () => {
  const videoSrc = "../assets/bannerHome.mp4";

  return (
    <video autoPlay loop muted className="absolute w-full h-full object-cover">
      <source src={"video/bannerhome.mp4"} />
    </video>
  );
};

export default VideoComponent;
