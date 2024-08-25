import { 
  BoltIcon, 
  ChartBarIcon, 
  Cog6ToothIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  category: string;
}

export const featureCards: FeatureCard[] = [
  { id: '1', title: 'Quick Actions', description: 'Perform common tasks with ease', icon: BoltIcon, category: 'Productivity', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '2', title: 'Analytics', description: 'Track your performance metrics', icon: ChartBarIcon, category: 'Business', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '3', title: 'Settings', description: 'Customize your dashboard experience', icon: Cog6ToothIcon, category: 'System', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '4', title: 'Team Management', description: 'Collaborate with your team members', icon: UserGroupIcon, category: 'Collaboration', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '5', title: 'Documents', description: 'Access and manage your files', icon: DocumentTextIcon, category: 'Productivity', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '6', title: 'Financials', description: 'Monitor your financial data', icon: CurrencyDollarIcon, category: 'Business', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '7', title: 'Chat', description: 'Communicate with your team in real-time', icon: ChatBubbleLeftRightIcon, category: 'Collaboration', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '8', title: 'Security', description: 'Manage your account security settings', icon: ShieldCheckIcon, category: 'System', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '9', title: 'Cloud Storage', description: 'Store and access your files from anywhere', icon: CloudArrowUpIcon, category: 'Productivity', createdAt: "2024-08-25", updatedAt: "2024-08-25" },
  { id: '10', title: 'Notifications', description: 'Stay updated with important alerts', icon: BellIcon, category: 'System', createdAt: "2024-08-25", updatedAt: "2024-08-25" }
];



export const categories = [
  'All',
  'Productivity',
  'Business',
  'System',
  'Collaboration'
];

export interface UserProgress {
  totalTasks: number;
  completedTasks: number;
}

export const userProgress: UserProgress = {
  totalTasks: 10,
  completedTasks: 4
};

export interface SidebarOption {
  name: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export const sidebarOptions: SidebarOption[] = [
  { name: 'Dashboard', icon: ChartBarIcon },
  { name: 'Projects', icon: DocumentTextIcon },
  { name: 'Team', icon: UserGroupIcon },
  { name: 'Settings', icon: Cog6ToothIcon }
];