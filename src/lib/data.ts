
export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  imageId: string;
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

export const studentResources: Category[] = [
  {
    name: 'Class 12',
    subjects: [
      {
        name: 'Physics',
        topics: [
          {
            name: 'Electrostatics',
            videos: [
              { id: 'v1', title: 'Introduction to Electric Charges', description: 'A foundational look at electric charges and their properties.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img1' },
              { id: 'v2', title: 'Coulomb\'s Law Explained', description: 'Understanding the forces between two point charges.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img2' },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        topics: [
          {
            name: 'Solutions',
            videos: [
                { id: 'v3', title: 'Types of Solutions', description: 'Exploring different types of solutions and their characteristics.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img3' },
            ],
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
                    videos: [
                        { id: 'v4', title: 'Basics of Trigonometric Ratios', description: 'Sine, Cosine, and Tangent explained with examples.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img4' },
                    ]
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
                        videos: [
                            { id: 'v5', title: 'The Gandhian Era', description: 'A deep dive into Mahatma Gandhi\'s role in India\'s freedom struggle.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img5' },
                        ]
                    }
                ]
            },
            {
                name: 'Polity',
                topics: [
                    {
                        name: 'Fundamental Rights',
                        videos: [
                            { id: 'v6', title: 'Understanding Articles 14-18', description: 'Detailed analysis of the Right to Equality.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img6' },
                        ]
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
                        videos: [
                            { id: 'v7', title: 'How to Manage Your Study Schedule', description: 'Effective time management techniques for aspirants.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img7' },
                            { id: 'v8', title: 'Balancing Prep with College/Job', description: 'Strategies for working professionals and students.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img8' },
                        ]
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
                        videos: [
                            { id: 'v9', title: 'The Power of Resilience', description: 'Inspirational stories of those who overcame setbacks.', youtubeId: 'dQw4w9WgXcQ', imageId: 'img9' },
                        ]
                    }
                ]
            }
        ]
    }
];
