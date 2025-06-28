export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
  isVerified: boolean;
  isPro?: boolean;
  proExpiry?: Date;
}

export interface Student {
  id: string;
  name: string;
  admissionNumber: string;
  class: string;
  grade: string;
  stream?: string;
  parentId: string;
  age: number;
  hobbies?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subjects: string[];
  qualifications: string[];
  experience: number;
  bio: string;
  gradeStreams: string[];
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: Student[];
}

export interface Result {
  id: string;
  studentId: string;
  subject: string;
  score: number;
  totalMarks: number;
  grade: string;
  remarks: string;
  term: string;
  year: number;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  dueDate: Date;
  uploadedBy: string;
  uploadedAt: Date;
  attachments?: string[];
}

export interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  class: string;
  uploadedBy: string;
  uploadedAt: Date;
  attachments?: string[];
}

export interface ForumMessage {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  timestamp: Date;
  replies?: ForumMessage[];
  parentId?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  description: string;
  coverImage?: string;
  downloadLink?: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface Application {
  id: string;
  type: 'student' | 'teacher' | 'other';
  fullName: string;
  email: string;
  phone: string;
  age: number;
  class?: string;
  hobbies?: string[];
  subjects?: string[];
  qualifications?: string[];
  experience?: number;
  bio?: string;
  jobType?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface AIChat {
  id: string;
  message: string;
  response: string;
  timestamp: Date;
  isPro?: boolean;
}

export interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  greeting: string;
}

export interface SchoolInfo {
  name: string;
  motto: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    poBox: string;
  };
  rules: string;
  logo?: string;
} 