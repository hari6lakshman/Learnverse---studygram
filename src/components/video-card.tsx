
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { VideoPlayer } from './video-player';
import { AspectRatio } from './ui/aspect-ratio';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const placeholderImage = PlaceHolderImages.find((p) => p.id === video.imageId);

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
      <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{video.title}</DialogTitle>
          <DialogDescription>{video.description}</DialogDescription>
        </DialogHeader>
        <VideoPlayer youtubeId={video.youtubeId} title={video.title} />
      </DialogContent>
    </Dialog>
  );
}
