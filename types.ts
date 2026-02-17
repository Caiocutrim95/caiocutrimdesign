
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}
