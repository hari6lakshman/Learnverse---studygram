'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContentDisplay } from '@/components/content-display';
import {
  studentResources,
  competitiveExams,
  motivationAndMentorship,
} from '@/lib/data';

export default function Home() {
  const [selectedValue, setSelectedValue] = React.useState(
    'student-resources'
  );

  const renderContent = () => {
    switch (selectedValue) {
      case 'student-resources':
        return <ContentDisplay data={studentResources} />;
      case 'competitive-exams':
        return <ContentDisplay data={competitiveExams} />;
      case 'motivation':
        return <ContentDisplay data={motivationAndMentorship} />;
      default:
        return null;
    }
  };

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
          <div className="mb-6 w-full md:w-1/3 md:mx-auto">
            <Select onValueChange={setSelectedValue} defaultValue={selectedValue}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student-resources">
                  Student Resources
                </SelectItem>
                <SelectItem value="competitive-exams">
                  Competitive Exams
                </SelectItem>
                <SelectItem value="motivation">
                  Motivation & Mentorship
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-6">{renderContent()}</div>

        </main>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

        <footer className="p-4 text-center text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} LearnVerse. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
