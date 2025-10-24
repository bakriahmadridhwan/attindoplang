
export default function VideoComponent() {
  return (
    <div className='pt-10 lg:pt-20 px-4 lg:px-0' id='video'>
      <video
        className="aspect-auto lg:aspect-video w-full h-full"
        src="assets/video/lima.mp4"
        loop
        autoPlay
        muted
        playsInline
      />
    </div>
  )
}
