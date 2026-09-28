import Link from "next/link";
import { ChevronTitle } from "@/components/ui/ChevronTitle";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import {
  SECTION_LABELS,
  listStories,
  storyPath,
  type Story,
  type StorySection,
} from "@/lib/stories";

const BOARDS: StorySection[] = ["beauty-talks", "featured", "specials", "opinions"];

function storiesFor(section: StorySection) {
  const [lead, ...rest] = listStories({ section });
  return lead ? { section, lead, rest: rest.slice(0, 3) } : null;
}

function StoryRail({ stories }: { stories: Story[] }) {
  return (
    <ul role="list" className="flex min-w-0 flex-col gap-3">
      {stories.map((story) => (
        <li key={story.slug}>
          <Link href={storyPath(story)} className="group flex items-start gap-3">
            <CoverImage
              src={story.image}
              alt=""
              className="aspect-[3/2] w-[92px] shrink-0"
              sizes="92px"
            />
            <span className="min-w-0 font-heading text-[15px] font-medium leading-snug text-heading group-hover:text-accent">
              {story.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SectionBoard() {
  const boards = BOARDS.map(storiesFor).filter((board) => board !== null);

  return (
    <section id="sections" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
          {boards.map((board, index) => (
            <article
              key={board.section}
              className={`min-w-0 ${
                index % 2 === 1 ? "md:border-l md:border-hairline md:pl-8" : "md:pr-8"
              } ${index >= 2 ? "md:border-t md:border-hairline md:pt-8" : ""}`}
            >
              <ChevronTitle
                href={`/news?section=${board.section}`}
                label={SECTION_LABELS[board.section]}
              />
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-5">
                <Link href={storyPath(board.lead)} className="group block min-w-0">
                  <CoverImage
                    src={board.lead.image}
                    alt={board.lead.title}
                    className="aspect-[3/2] w-full"
                    imageClassName="transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1023px) 100vw, 320px"
                  />
                  <h3 className="mt-3 font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                    {board.lead.title}
                  </h3>
                </Link>
                <StoryRail stories={board.rest} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
