import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContentDisplay } from '@/components/content-display';
import { studentResources, competitiveExams, motivationAndMentorship } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-2xl border-2 border-primary bg-card shadow-2xl">
        <header className="p-6 text-center md:p-8">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            LearnVerse
          </h1>
          <p className="mt-2 font-body text-lg text-foreground/90 sm:text-xl">
            Your Studygram Universe
          </p>
        </header>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

        <main className="p-4 sm:p-6">
          <Tabs defaultValue="student-resources" className="w-full">
            <TabsList className="grid w-full grid-cols-1 bg-muted sm:grid-cols-3">
              <TabsTrigger value="student-resources">Student Resources</TabsTrigger>
              <TabsTrigger value="competitive-exams">Competitive Exams</TabsTrigger>
              <TabsTrigger value="motivation">Motivation & Mentorship</TabsTrigger>
            </TabsList>
            <TabsContent value="student-resources" className="mt-6">
              <ContentDisplay data={studentResources} />
            </TabsContent>
            <TabsContent value="competitive-exams" className="mt-6">
              <ContentDisplay data={competitiveExams} />
            </TabsContent>
            <TabsContent value="motivation" className="mt-6">
              <ContentDisplay data={motivationAndMentorship} />
            </TabsContent>
          </Tabs>
        </main>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

        <footer className="p-4 text-center text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} LearnVerse. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
