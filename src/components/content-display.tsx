
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Category } from '@/lib/data';
import { VideoCard } from './video-card';
import { BookOpen, ChevronsRight, FolderKanban } from 'lucide-react';

interface ContentDisplayProps {
  data: Category[];
}

export function ContentDisplay({ data }: ContentDisplayProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {data.map((category, index) => (
        <AccordionItem value={`category-${index}`} key={category.name} className="rounded-lg border bg-muted/50 px-4">
          <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
            <div className="flex items-center gap-3">
              <FolderKanban className="h-6 w-6" />
              {category.name}
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <Accordion type="multiple" className="space-y-2">
              {category.subjects.map((subject, subIndex) => (
                <AccordionItem value={`subject-${subIndex}`} key={subject.name} className="rounded-md border bg-card/80 px-4">
                  <AccordionTrigger className="text-lg font-semibold text-foreground/90">
                     <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5" />
                        {subject.name}
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-2">
                     <Accordion type="multiple" className="space-y-2">
                      {subject.topics.map((topic, topicIndex) => (
                         <AccordionItem value={`topic-${topicIndex}`} key={topic.name} className="rounded-md border-0 border-l-2 border-primary/50 bg-transparent px-4">
                           <AccordionTrigger className="font-medium text-foreground/80">
                                <div className="flex items-center gap-3">
                                    <ChevronsRight className="h-4 w-4" />
                                    {topic.name}
                                </div>
                            </AccordionTrigger>
                           <AccordionContent className="pt-4">
                             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                               {topic.videos.map((video) => (
                                 <VideoCard key={video.id} video={video} />
                               ))}
                             </div>
                           </AccordionContent>
                         </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
