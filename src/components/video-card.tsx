
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Video } from '@/lib/data';
import { allVideos } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { VideoPlayer } from './video-player';
import { AspectRatio } from './ui/aspect-ratio';
import { RelatedVideos } from './related-videos';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [currentVideo, setCurrentVideo] = React.useState(video);
  const placeholderImage = PlaceHolderImages.find((p) => p.id === video.imageId);

  const relatedVideos = currentVideo.relatedVideoIds
    ?.map(id => allVideos.find(v => v.id === id))
    .filter((v): v is Video => !!v) || [];

  React.useEffect(() => {
    setCurrentVideo(video);
  }, [video]);

  const handleRelatedVideoClick = (relatedVideo: Video) => {
    setCurrentVideo(relatedVideo);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group flex h-full transform-gpu cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
          <CardHeader className="p-0">
            {placeholderImage && (
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-lg">
                <Image
                  src={placeholderImage.imageUrl}
                  alt={video.title}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={placeholderImage.imageHint}
                />
              </AspectRatio>
            )}
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-4">
            <h3 className="font-body text-md font-semibold text-foreground/90 group-hover:text-primary">
              {video.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-foreground/70 line-clamp-2">
              {video.description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-6xl border-primary bg-card p-4">
         <DialogHeader className="sr-only">
          <DialogTitle>{currentVideo.title}</DialogTitle>
          <DialogDescription>{currentVideo.description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <VideoPlayer key={currentVideo.id} youtubeId={currentVideo.youtubeId} title={currentVideo.title} />
          </div>
          <div className="md:col-span-1">
             <RelatedVideos 
              videos={relatedVideos} 
              onVideoClick={handleRelatedVideoClick} 
              currentVideoId={currentVideo.id}
             />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
