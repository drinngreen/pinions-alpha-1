import React from 'react';
import { 
  Home, 
  Search, 
  Brain, 
  CheckCircle2, 
  Lightbulb,
  Users, 
  BarChart2, 
  BookOpen,
  User,
  Settings,
  Feather
} from 'lucide-react';
import Logo from './Logo';

const menuItems = [
  { icon: Home, label: 'Feed', notifications: 0 },
  { icon: Lightbulb, label: 'Insights', notifications: 2 },
  { icon: Brain, label: 'Think Tank', notifications: 0 },
  { icon: CheckCircle2, label: 'Fact Check', notifications: 1 },
  { icon: BarChart2, label: 'Analytics', notifications: 0 },
  { icon: Users, label: 'Circles', notifications: 0 },
  { icon: BookOpen, label: 'Learning', notifications: 0 },
  { icon: User, label: 'Profile', notifications: 0 },
  { icon: Settings, label: 'Settings', notifications: 0 },
];

export default function RightSidebar() {
  return (
    <aside className="fixed right-0 top-0 w-[220px] h-full glass-effect flex flex-col">
      <div className="flex justify-center pt-8 pb-6">
        <Logo className="h-20 w-20 hover-platypus" />
      </div>
      <div className="p-2 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <div className="relative">
                <item.icon className="h-5 w-5" />
                {item.notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full border border-white/10">
                    {item.notifications}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <button className="w-full bg-black text-white mt-4 py-2 px-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-black/80 transition-colors text-sm border border-white/10">
          <Feather className="h-4 w-4" />
          <span>Share Opinion</span>
        </button>

        <div className="mt-3 p-2 flex items-center space-x-2 hover:bg-white/5 rounded-lg cursor-pointer">
          <Logo className="h-8 w-8" />
          <div>
            <p className="font-medium text-white text-sm">Your Account</p>
            <p className="text-xs text-gray-400">@username</p>
          </div>
        </div>
      </div>
    </aside>
  );
}