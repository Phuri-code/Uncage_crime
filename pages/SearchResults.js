import { fetchData } from '../lib/utils';
import Moment from 'react-moment';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player/youtube';

export default function SearchResults({ videos }) {
  console.log(videos);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const videoURL = 'https://www.youtube.com/watch?v=' + modalData;

  const sortedVids = videos
    .sort((a, b) =>
      Number(
        new Date(b.snippet.videoPublishedAt) -
          Number(new Date(a.snippet.videoPublishedAt))
      )
    )
    .filter((vid) => vid.snippet.title.toLowerCase());

  return (
    <>
      <div className={`${styles.playlist_container} ${styles.search}`}>
        <div className={styles.main_container}>
            <h1>Search results</h1>
          {sortedVids
            .filter((v) => v.snippet.title !== 'Private video')
            .map((vid, id) => {
              return (
                <div className={styles.item_container}
                  key={id}>
                  <div className={styles.clip_container}>
                    <Image
                      className={styles.thumbnails}
                      src={vid.snippet.thumbnails.medium.url}
                      layout='fill'
                      objectFit='cover'
                      alt={vid.snippet.title}
                    />
                    <button
                      className={styles.playBtn}
                      onClick={() => {
                        setModalData(vid.snippet.resourceId.videoId);
                        console.log(modalData);
                        setModalIsOpen(true);
                      }}
                    >
                      <Image src='/images/play.svg' width='60' height='60' />
                    </button>
                  </div>
                  <div className={styles.details_container}>
                    <h3>{vid.snippet.title}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <Modal
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
            overlayAnimationIn: 'customEnterOverlayAnimation',
            overlayAnimationOut: 'customLeaveOverlayAnimation',
            modalAnimationIn: 'customEnterModalAnimation',
            modalAnimationOut: 'customLeaveModalAnimation',
          }}
          animationDuration={800}
        >
        <ReactPlayer
            playing={true}
            url={videoURL}
            width='100%'
            height='calc(100vh - 100px)'
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                },
              },
            }}
          />
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const keyword = useStore((state) => state.keyword);

  const { YOUTUBE_KEY } = process.env;
  const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbqKKcML7P4b4BDhaqdh_DA&maxResults=50&key=${YOUTUBE_KEY}&q=${keyword}`;

  async function getData() {
    const uploadsData = fetchData(uploadsURL);

    return {
      videos: await uploadsData,
    };
  }

  const { videos } = await getData();
  return {
    revalidate: 86400,
    props: {
      videos: videos.items,
    },
  };
}
