
import * as React from 'react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { Video } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface RelatedVideosProps {
  videos: Video[];
  onVideoClick: (video: Video) => void;
  currentVideoId: string;
}

export function RelatedVideos({ videos, onVideoClick, currentVideoId }: RelatedVideosProps) {
  if (videos.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg bg-muted/50">
        <p className="text-sm text-foreground/60">No related videos</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <h3 className="mb-4 text-xl font-bold text-primary">Related Videos</h3>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {videos.map((video) => {
            const placeholderImage = PlaceHolderImages.find((p) => p.id === video.imageId);
            const isPlaying = video.id === currentVideoId;
            return (
              <button
                key={video.id}
                onClick={() => onVideoClick(video)}
                className={cn(
                  'group flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors hover:bg-muted/80',
                  isPlaying && 'bg-muted'
                )}
                disabled={isPlaying}
              >
                {placeholderImage && (
                  <div className="w-1/3 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={placeholderImage.imageUrl}
                      alt={video.title}
                      width={160}
                      height={90}
                      className="h-full w-full object-cover"
                      data-ai-hint={placeholderImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground/90 group-hover:text-primary">
                    {video.title}
                  </p>
                  <p className="mt-1 text-xs text-foreground/70 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
