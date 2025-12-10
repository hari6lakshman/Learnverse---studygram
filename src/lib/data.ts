
export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  imageId: string;
  relatedVideoIds?: string[];
}

export interface Topic {
  name:string;
  videos: Video[];
}

export interface Subject {
  name: string;
  topics: Topic[];
}

export interface Category {
  name: string;
  subjects: Subject[];
}

export const allVideos: Video[] = [
  { id: 'v1', title: 'Introduction to Electric Charges', description: 'A foundational look at electric charges and their properties.', youtubeId: 'Zv35EwiwGjU', imageId: 'img1', relatedVideoIds: ['v2'] },
  { id: 'v2', title: 'Coulomb\'s Law Explained', description: 'Understanding the forces between two point charges.', youtubeId: 'Zv35EwiwGjU', imageId: 'img2', relatedVideoIds: ['v1'] },
  { id: 'v3', title: 'Types of Solutions', description: 'Exploring different types of solutions and their characteristics.', youtubeId: 'Zv35EwiwGjU', imageId: 'img3' },
  { id: 'v4', title: 'Basics of Trigonometric Ratios', description: 'Sine, Cosine, and Tangent explained with examples.', youtubeId: 'Zv35EwiwGjU', imageId: 'img4' },
  { id: 'v5', title: 'The Gandhian Era', description: 'A deep dive into Mahatma Gandhi\'s role in India\'s freedom struggle.', youtubeId: 'Zv35EwiwGjU', imageId: 'img5' },
  { id: 'v6', title: 'Understanding Articles 14-18', description: 'Detailed analysis of the Right to Equality.', youtubeId: 'Zv35EwiwGjU', imageId: 'img6' },
  { id: 'v7', title: 'How to Manage Your Study Schedule', description: 'Effective time management techniques for aspirants.', youtubeId: 'Zv35EwiwGjU', imageId: 'img7', relatedVideoIds: ['v8'] },
  { id: 'v8', title: 'Balancing Prep with College/Job', description: 'Strategies for working professionals and students.', youtubeId: 'Zv35EwiwGjU', imageId: 'img8', relatedVideoIds: ['v7'] },
  { id: 'v9', title: 'The Power of Resilience', description: 'Inspirational stories of those who overcame setbacks.', youtubeId: 'Zv35EwiwGjU', imageId: 'img9' },
];

export const studentResources: Category[] = [
  {
    name: 'Class 12',
    subjects: [
      {
        name: 'Physics',
        topics: [
          {
            name: 'Electrostatics',
            videos: allVideos.filter(v => ['v1', 'v2'].includes(v.id)),
          },
        ],
      },
      {
        name: 'Chemistry',
        topics: [
          {
            name: 'Solutions',
            videos: allVideos.filter(v => ['v3'].includes(v.id)),
          },
        ],
      },
    ],
  },
  {
    name: 'Class 10',
    subjects: [
        {
            name: 'Mathematics',
            topics: [
                {
                    name: 'Trigonometry',
                    videos: allVideos.filter(v => ['v4'].includes(v.id)),
                }
            ]
        }
    ]
  }
];

export const competitiveExams: Category[] = [
    {
        name: 'UPSC Civil Services',
        subjects: [
            {
                name: 'Modern History',
                topics: [
                    {
                        name: 'Indian National Movement',
                        videos: allVideos.filter(v => ['v5'].includes(v.id)),
                    }
                ]
            },
            {
                name: 'Polity',
                topics: [
                    {
                        name: 'Fundamental Rights',
                        videos: allVideos.filter(v => ['v6'].includes(v.id)),
                    }
                ]
            }
        ]
    }
];

export const motivationAndMentorship: Category[] = [
    {
        name: 'Guidance from Toppers',
        subjects: [
            {
                name: 'Exam Strategy',
                topics: [
                    {
                        name: 'Time Management',
                        videos: allVideos.filter(v => ['v7', 'v8'].includes(v.id)),
                    }
                ]
            }
        ]
    },
    {
        name: 'Motivational Talks',
        subjects: [
            {
                name: 'Overcoming Failure',
                topics: [
                    {
                        name: 'Bounce Back Stronger',
                        videos: allVideos.filter(v => ['v9'].includes(v.id)),
                    }
                ]
            }
        ]
    }
];
