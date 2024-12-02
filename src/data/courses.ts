export type ContentType = 'video' | 'practice' | 'quiz' | 'article';

export interface Lesson {
  id: number;
  title: string;
  contentType: ContentType;
  duration: number;
  contentUrl: string;
  description: string;
  isCompleted?: boolean;
  thumbnail?: string;
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  isCompleted?: boolean;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorImage: string;
  description: string;
  coverImage: string;
  image: string;
  previewVideo?: string;
  price: number;
  rating: number;
  studentsCount: number;
  category: string;
  subCategory: string;
  duration: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  language: string;
  features: string[];
  updatedAt: string;
  units: Unit[];
  progress?: number;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'HTML5 و CSS3 للمبتدئين',
    instructor: 'أحمد محمد',
    instructorImage: '/images/courses/instructors/instructor1.jpg',
    description: 'تعلم أساسيات تطوير الويب باستخدام HTML5 و CSS3 مع التطبيقات العملية. ستتعلم كيفية بناء مواقع ويب جذابة ومتجاوبة من الصفر.',
    coverImage: '/images/courses/covers/course_001.jpg',
    image: '/images/courses/covers/course_001.jpg',
    previewVideo: '/videos/courses/previews/web-development.mp4',
    price: 0,
    rating: 4.8,
    studentsCount: 1250,
    category: 'البرمجة',
    subCategory: 'تطوير الويب',
    duration: '12 ساعة',
    level: 'مبتدئ',
    language: 'العربية',
    features: [
      'شهادة إتمام',
      'تمارين عملية',
      'دعم فني',
      'موارد للتحميل'
    ],
    updatedAt: '2024-01-15',
    units: [
      {
        id: 1,
        title: 'مقدمة في HTML5',
        description: 'تعرف على أساسيات HTML5 وكيفية هيكلة صفحات الويب',
        lessons: [
          {
            id: 1,
            title: 'ما هو HTML5؟',
            contentType: 'video',
            duration: 15,
            contentUrl: '/videos/courses/web-development/html5/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_002.jpg',
            description: 'مقدمة عن HTML5 وأهميته في تطوير الويب'
          },
          {
            id: 2,
            title: 'هيكل الصفحة في HTML5',
            contentType: 'video',
            duration: 20,
            contentUrl: '/videos/courses/web-development/html5/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_003.jpg',
            description: 'تعلم كيفية بناء هيكل صفحة ويب باستخدام HTML5'
          }
        ]
      },
      {
        id: 2,
        title: 'أساسيات CSS3',
        description: 'تعلم كيفية تنسيق صفحات الويب باستخدام CSS3',
        lessons: [
          {
            id: 3,
            title: 'مقدمة في CSS3',
            contentType: 'video',
            duration: 15,
            contentUrl: '/videos/courses/web-development/css3/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_004.jpg',
            description: 'مقدمة عن CSS3 وأهميته في تصميم صفحات الويب'
          },
          {
            id: 4,
            title: 'نموذج الصندوق في CSS',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/web-development/css3/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_005.jpg',
            description: 'فهم نموذج الصندوق وكيفية استخدامه في التصميم'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'JavaScript الحديثة',
    instructor: 'محمد أحمد',
    instructorImage: '/images/courses/instructors/instructor2.jpg',
    description: 'تعلم JavaScript الحديثة من الصفر. يغطي هذا الكورس المفاهيم الأساسية والمتقدمة في JavaScript مع التركيز على ES6+.',
    coverImage: '/images/courses/covers/course_006.jpg',
    image: '/images/courses/covers/course_006.jpg',
    previewVideo: '/videos/courses/previews/javascript.mp4',
    price: 199,
    rating: 4.9,
    studentsCount: 850,
    category: 'البرمجة',
    subCategory: 'تطوير الويب',
    duration: '15 ساعة',
    level: 'متوسط',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم مباشر',
      'تحديثات مجانية'
    ],
    updatedAt: '2024-01-20',
    units: [
      {
        id: 1,
        title: 'أساسيات JavaScript',
        description: 'تعلم المفاهيم الأساسية في JavaScript',
        lessons: [
          {
            id: 1,
            title: 'المتغيرات والثوابت',
            contentType: 'video',
            duration: 20,
            contentUrl: '/videos/courses/javascript/basics/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_007.jpg',
            description: 'تعلم كيفية التعامل مع المتغيرات والثوابت في JavaScript'
          },
          {
            id: 2,
            title: 'أنواع البيانات',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/javascript/basics/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_008.jpg',
            description: 'فهم أنواع البيانات المختلفة في JavaScript'
          }
        ]
      },
      {
        id: 2,
        title: 'ES6+ ميزات',
        description: 'تعرف على الميزات الحديثة في JavaScript',
        lessons: [
          {
            id: 3,
            title: 'Arrow Functions',
            contentType: 'video',
            duration: 20,
            contentUrl: '/videos/courses/javascript/es6/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_009.jpg',
            description: 'تعلم كيفية استخدام Arrow Functions'
          },
          {
            id: 4,
            title: 'Destructuring',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/javascript/es6/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_010.jpg',
            description: 'فهم وتطبيق Destructuring في JavaScript'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'React.js للمحترفين',
    instructor: 'سارة أحمد',
    instructorImage: '/images/courses/instructors/instructor3.jpg',
    description: 'تعلم تطوير تطبيقات الويب التفاعلية باستخدام React.js. يغطي هذا الكورس المفاهيم المتقدمة مثل Hooks وContext API والـ Redux.',
    coverImage: '/images/courses/covers/course_011.jpg',
    image: '/images/courses/covers/course_011.jpg',
    previewVideo: '/videos/courses/previews/react.mp4',
    price: 299,
    rating: 4.9,
    studentsCount: 750,
    category: 'البرمجة',
    subCategory: 'تطوير الويب',
    duration: '20 ساعة',
    level: 'متقدم',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم مباشر',
      'تحديثات مجانية',
      'ملفات المصدر'
    ],
    updatedAt: '2024-01-25',
    units: [
      {
        id: 1,
        title: 'React Hooks',
        description: 'تعلم استخدام React Hooks لبناء تطبيقات أكثر فعالية',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في React Hooks',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/react/hooks/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_012.jpg',
            description: 'فهم أساسيات React Hooks وكيفية استخدامها'
          },
          {
            id: 2,
            title: 'Custom Hooks',
            contentType: 'video',
            duration: 30,
            contentUrl: '/videos/courses/react/hooks/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_013.jpg',
            description: 'تعلم كيفية إنشاء واستخدام Custom Hooks'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Node.js و Express.js',
    instructor: 'عمر خالد',
    instructorImage: '/images/courses/instructors/instructor4.jpg',
    description: 'تعلم تطوير خدمات الويب باستخدام Node.js و Express.js. يغطي هذا الكورس بناء API وقواعد البيانات والأمان.',
    coverImage: '/images/courses/covers/course_014.jpg',
    image: '/images/courses/covers/course_014.jpg',
    previewVideo: '/videos/courses/previews/nodejs.mp4',
    price: 249,
    rating: 4.7,
    studentsCount: 620,
    category: 'البرمجة',
    subCategory: 'تطوير الويب',
    duration: '18 ساعة',
    level: 'متوسط',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم فني',
      'تحديثات مجانية',
      'كود المصدر'
    ],
    updatedAt: '2024-01-22',
    units: [
      {
        id: 1,
        title: 'أساسيات Node.js',
        description: 'تعلم المفاهيم الأساسية في Node.js',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في Node.js',
            contentType: 'video',
            duration: 20,
            contentUrl: '/videos/courses/nodejs/basics/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_015.jpg',
            description: 'فهم أساسيات Node.js وبيئة التشغيل'
          },
          {
            id: 2,
            title: 'نظام الوحدات في Node.js',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/nodejs/basics/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_016.jpg',
            description: 'تعلم كيفية استخدام نظام الوحدات في Node.js'
          }
        ]
      },
      {
        id: 2,
        title: 'Express.js Framework',
        description: 'بناء تطبيقات الويب باستخدام Express.js',
        lessons: [
          {
            id: 3,
            title: 'مقدمة في Express.js',
            contentType: 'video',
            duration: 22,
            contentUrl: '/videos/courses/nodejs/express/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_017.jpg',
            description: 'تعلم أساسيات Express.js وكيفية إنشاء خادم ويب'
          },
          {
            id: 4,
            title: 'Middleware في Express.js',
            contentType: 'video',
            duration: 28,
            contentUrl: '/videos/courses/nodejs/express/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_018.jpg',
            description: 'فهم وتطبيق Middleware في Express.js'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'تطوير تطبيقات الموبايل مع Flutter',
    instructor: 'ليلى محمد',
    instructorImage: '/images/courses/instructors/instructor5.jpg',
    description: 'تعلم تطوير تطبيقات الموبايل لنظامي Android و iOS باستخدام Flutter. يغطي هذا الكورس UI/UX وإدارة الحالة وقواعد البيانات المحلية.',
    coverImage: '/images/courses/covers/course_019.png',
    image: '/images/courses/covers/course_019.png',
    previewVideo: '/videos/courses/previews/flutter.mp4',
    price: 349,
    rating: 4.8,
    studentsCount: 480,
    category: 'البرمجة',
    subCategory: 'تطوير تطبيقات الموبايل',
    duration: '25 ساعة',
    level: 'متوسط',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم مباشر',
      'تحديثات مجانية',
      'كود المصدر',
      'تطبيقات كاملة'
    ],
    updatedAt: '2024-01-28',
    units: [
      {
        id: 1,
        title: 'أساسيات Flutter',
        description: 'تعلم المفاهيم الأساسية في Flutter وDart',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في Flutter',
            contentType: 'video',
            duration: 30,
            contentUrl: '/videos/courses/flutter/basics/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_020.png',
            description: 'فهم أساسيات Flutter وبيئة التطوير'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'الذكاء الاصطناعي وتعلم الآلة',
    instructor: 'د. كريم حسن',
    instructorImage: '/images/courses/instructors/instructor6.jpg',
    description: 'تعلم أساسيات الذكاء الاصطناعي وتعلم الآلة باستخدام Python. يغطي هذا الكورس النظريات الأساسية والتطبيقات العملية.',
    coverImage: '/images/courses/covers/course_015.jpg',
    image: '/images/courses/covers/course_015.jpg',
    previewVideo: '/videos/courses/previews/ai-ml.mp4',
    price: 399,
    rating: 4.9,
    studentsCount: 320,
    category: 'الذكاء الاصطناعي',
    subCategory: 'تعلم الآلة',
    duration: '30 ساعة',
    level: 'متقدم',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم مباشر',
      'تحديثات مجانية',
      'كود المصدر',
      'بيئة تطوير متكاملة'
    ],
    updatedAt: '2024-01-30',
    units: [
      {
        id: 1,
        title: 'مقدمة في الذكاء الاصطناعي',
        description: 'فهم أساسيات الذكاء الاصطناعي وتطبيقاته',
        lessons: [
          {
            id: 1,
            title: 'ما هو الذكاء الاصطناعي؟',
            contentType: 'video',
            duration: 35,
            contentUrl: '/videos/courses/ai/intro/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_016.jpg',
            description: 'مقدمة شاملة عن الذكاء الاصطناعي وتطبيقاته في العالم الحقيقي'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'تحليل البيانات مع Python',
    instructor: 'رنا محمود',
    instructorImage: '/images/courses/instructors/instructor7.jpg',
    description: 'تعلم تحليل البيانات باستخدام Python ومكتبات مثل Pandas و NumPy. يشمل الكورس تحليل وتصور البيانات واستخراج الرؤى منها.',
    coverImage: '/images/courses/covers/course_017.jpg',
    image: '/images/courses/covers/course_017.jpg',
    previewVideo: '/videos/courses/previews/data-analysis.mp4',
    price: 299,
    rating: 4.8,
    studentsCount: 450,
    category: 'تحليل البيانات',
    subCategory: 'Python',
    duration: '25 ساعة',
    level: 'متوسط',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'مشاريع عملية',
      'دعم فني',
      'تحديثات مجانية',
      'ملفات البيانات',
      'تمارين تفاعلية'
    ],
    updatedAt: '2024-01-27',
    units: [
      {
        id: 1,
        title: 'أساسيات Python لتحليل البيانات',
        description: 'تعلم أساسيات Python المستخدمة في تحليل البيانات',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في Pandas',
            contentType: 'video',
            duration: 30,
            contentUrl: '/videos/courses/data-analysis/pandas/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_018.jpg',
            description: 'تعلم استخدام مكتبة Pandas لمعالجة وتحليل البيانات'
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'تصميم واجهات المستخدم UI/UX',
    instructor: 'نور علي',
    instructorImage: '/images/courses/instructors/instructor8.jpg',
    description: 'تعلم تصميم واجهات المستخدم وتجربة المستخدم باستخدام Figma. يغطي الكورس مبادئ التصميم والنماذج الأولية والتصميم التفاعلي.',
    coverImage: '/images/courses/covers/course_019.png',
    image: '/images/courses/covers/course_019.png',
    previewVideo: '/videos/courses/previews/ui-ux.mp4',
    price: 249,
    rating: 4.9,
    studentsCount: 580,
    category: 'التصميم',
    subCategory: 'UI/UX',
    duration: '20 ساعة',
    level: 'مبتدئ',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'ملفات التصميم',
      'دعم مباشر',
      'تحديثات مجانية',
      'مكتبة العناصر',
      'نماذج قابلة للتحميل'
    ],
    updatedAt: '2024-01-29',
    units: [
      {
        id: 1,
        title: 'مبادئ تصميم واجهات المستخدم',
        description: 'تعلم المبادئ الأساسية لتصميم واجهات المستخدم',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في UI/UX',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/ui-ux/basics/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_020.png',
            description: 'فهم الفرق بين UI و UX وأهميتهما في التصميم'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'التسويق الرقمي الشامل',
    instructor: 'سمر عبد الله',
    instructorImage: '/images/courses/instructors/instructor9.jpg',
    description: 'كورس شامل في التسويق الرقمي يغطي وسائل التواصل الاجتماعي، SEO، إعلانات Google و Facebook، وتحليلات البيانات التسويقية.',
    coverImage: '/images/courses/covers/course_011.jpg',
    image: '/images/courses/covers/course_011.jpg',
    previewVideo: '/videos/courses/previews/digital-marketing.mp4',
    price: 299,
    rating: 4.9,
    studentsCount: 750,
    category: 'التسويق',
    subCategory: 'التسويق الرقمي',
    duration: '35 ساعة',
    level: 'متوسط',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'دراسات حالة',
      'أدوات تسويقية',
      'تحديثات مجانية',
      'نماذج جاهزة',
      'دعم مباشر'
    ],
    updatedAt: '2024-02-01',
    units: [
      {
        id: 1,
        title: 'أساسيات التسويق الرقمي',
        description: 'مقدمة شاملة في التسويق الرقمي واستراتيجياته',
        lessons: [
          {
            id: 1,
            title: 'مدخل إلى التسويق الرقمي',
            contentType: 'video',
            duration: 30,
            contentUrl: '/videos/courses/marketing/digital/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_012.jpg',
            description: 'فهم أساسيات التسويق الرقمي وأهميته في عالم اليوم'
          },
          {
            id: 2,
            title: 'تحديد الجمهور المستهدف',
            contentType: 'video',
            duration: 25,
            contentUrl: '/videos/courses/marketing/digital/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_013.jpg',
            description: 'كيفية تحديد وفهم جمهورك المستهدف'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'إدارة المشاريع الاحترافية',
    instructor: 'د. طارق السيد',
    instructorImage: '/images/courses/instructors/instructor10.jpg',
    description: 'تعلم إدارة المشاريع باحترافية باستخدام منهجيات Agile و Scrum. يشمل الكورس إدارة الفرق، الميزانيات، والجداول الزمنية.',
    coverImage: '/images/courses/covers/course_014.jpg',
    image: '/images/courses/covers/course_014.jpg',
    previewVideo: '/videos/courses/previews/project-management.mp4',
    price: 349,
    rating: 4.8,
    studentsCount: 480,
    category: 'إدارة الأعمال',
    subCategory: 'إدارة المشاريع',
    duration: '40 ساعة',
    level: 'متقدم',
    language: 'العربية',
    features: [
      'شهادة PMP معتمدة',
      'نماذج وقوالب',
      'دراسات حالة',
      'تدريب عملي',
      'اختبارات تجريبية',
      'منتدى للمناقشة'
    ],
    updatedAt: '2024-02-02',
    units: [
      {
        id: 1,
        title: 'أساسيات إدارة المشاريع',
        description: 'مقدمة في مبادئ وأساسيات إدارة المشاريع',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في إدارة المشاريع',
            contentType: 'video',
            duration: 35,
            contentUrl: '/videos/courses/business/pm/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_015.jpg',
            description: 'فهم المبادئ الأساسية لإدارة المشاريع'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'التصميم الجرافيكي الاحترافي',
    instructor: 'ياسمين محمد',
    instructorImage: '/images/courses/instructors/instructor11.jpg',
    description: 'تعلم التصميم الجرافيكي باستخدام Adobe Creative Suite. يشمل الكورس Photoshop، Illustrator، وInDesign مع مشاريع عملية.',
    coverImage: '/images/courses/covers/course_016.jpg',
    image: '/images/courses/covers/course_016.jpg',
    previewVideo: '/videos/courses/previews/graphic-design.mp4',
    price: 279,
    rating: 4.9,
    studentsCount: 620,
    category: 'التصميم',
    subCategory: 'التصميم الجرافيكي',
    duration: '45 ساعة',
    level: 'مبتدئ',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'ملفات المصدر',
      'مكتبة تصاميم',
      'دعم مباشر',
      'مشاريع عملية',
      'تحديثات مجانية'
    ],
    updatedAt: '2024-02-03',
    units: [
      {
        id: 1,
        title: 'أساسيات التصميم الجرافيكي',
        description: 'تعلم المبادئ الأساسية للتصميم الجرافيكي',
        lessons: [
          {
            id: 1,
            title: 'مبادئ التصميم',
            contentType: 'video',
            duration: 30,
            contentUrl: '/videos/courses/design/graphics/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_017.jpg',
            description: 'فهم مبادئ التصميم الأساسية: اللون، التكوين، والتناسق'
          },
          {
            id: 2,
            title: 'مقدمة في Photoshop',
            contentType: 'video',
            duration: 40,
            contentUrl: '/videos/courses/design/graphics/lesson2.mp4',
            thumbnail: '/images/courses/covers/course_018.jpg',
            description: 'تعلم أساسيات استخدام Adobe Photoshop'
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'تحليل وإدارة الأعمال',
    instructor: 'د. أحمد فؤاد',
    instructorImage: '/images/courses/instructors/instructor12.jpg',
    description: 'كورس شامل في تحليل وإدارة الأعمال يغطي التخطيط الاستراتيجي، تحليل السوق، وإدارة الموارد البشرية والمالية.',
    coverImage: '/images/courses/covers/course_019.png',
    image: '/images/courses/covers/course_019.png',
    previewVideo: '/videos/courses/previews/business-analysis.mp4',
    price: 399,
    rating: 4.8,
    studentsCount: 420,
    category: 'إدارة الأعمال',
    subCategory: 'تحليل الأعمال',
    duration: '50 ساعة',
    level: 'متقدم',
    language: 'العربية',
    features: [
      'شهادة معتمدة',
      'دراسات حالة',
      'نماذج تحليلية',
      'استشارات فردية',
      'موارد إضافية',
      'تحديثات مستمرة'
    ],
    updatedAt: '2024-02-04',
    units: [
      {
        id: 1,
        title: 'التخطيط الاستراتيجي',
        description: 'تعلم كيفية وضع وتنفيذ الخطط الاستراتيجية للأعمال',
        lessons: [
          {
            id: 1,
            title: 'مقدمة في التخطيط الاستراتيجي',
            contentType: 'video',
            duration: 45,
            contentUrl: '/videos/courses/business/strategy/lesson1.mp4',
            thumbnail: '/images/courses/covers/course_020.png',
            description: 'فهم أساسيات التخطيط الاستراتيجي وأهميته للمؤسسات'
          }
        ]
      }
    ]
  }
];

// تحديث التصنيفات
const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'programming', name: 'البرمجة' },
  { id: 'marketing', name: 'التسويق' },
  { id: 'design', name: 'التصميم' },
  { id: 'business', name: 'إدارة الأعمال' },
  { id: 'database', name: 'قواعد البيانات' }
];
