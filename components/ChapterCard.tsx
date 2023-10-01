import { TChapter } from "@/constants";
import { useMemo } from "react";

type TChapterCardProps = {
  chapter: TChapter;
};

const ChapterCard = (props: TChapterCardProps) => {
  const {
    bgUrl,
    num,
    scaledImageUrl,
    title,
    videoUrl
  } = props.chapter;

  const defaultCharacterClassNames = `absolute transition-transform duration-200 bottom-2 left-0`;
  const hoveredCharacterClassNames = `group-hover:scale-150 group-hover:-translate-y-1/4`;
  const containerClassNames = "min-w-[155px] h-[85px] py-2 px-3 tablet:min-w-[504px] tablet:h-[280px] tablet:py-11 tablet:px-12 rounded-xl bg-cover bg-no-repeat relative group overflow-visible";

  const classNames = useMemo(() => {
    const classNames = {
      container: [containerClassNames].join(' '),
      character: [defaultCharacterClassNames, hoveredCharacterClassNames].join(' ')
    };
    
    if (!videoUrl) {
      classNames.character = [defaultCharacterClassNames].join(' ');
      classNames.container = [containerClassNames, 'bg-transparent overflow-hidden'].join(' ');
    }
    return classNames;
  }, [videoUrl]);

  return (
    <div
      className={classNames.container}
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
    >
      <p className="text-white text-[6px] tablet:text-base font-bold mb-1">
        Chapter {num}:
      </p>
      <p className="text-white text-2xs tablet:text-2xl font-bold">
        {title}
      </p>
      {scaledImageUrl && (
        <img className={classNames.character} src={scaledImageUrl} />
      )}
      {!videoUrl && (<div className="h-full w-full absolute top-0 left-0 flex place-items-center">
        <p className="text-white font-bold text-xl/none tablet:text-4xl/7 text-center w-full">
          Arriving<br />
          soon
        </p>
      </div>)}
    </div>
  );
};

export default ChapterCard;
