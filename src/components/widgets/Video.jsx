export default function Video(props) {
  return (
    <>
      {props.videos.map((video, index) => (
        <div key={index} className="sm:border-4 sm:border-double text-center text-gray-500 dark:text-gray-400">
          {video?.url && (
            <iframe
              width="560"
              height="315"
              src={video?.url}
              title={video?.title}
              className="aspect-video mx-auto pr-4 pl-4 m-4 rounded-lg"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          <h3 className="mb-1 mr-4 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {video?.title}
          </h3>
          {video?.description && <p class="mb-4 mr-4 ml-4">{video.description}</p>}
        </div>
      ))}
    </>
  );
}
