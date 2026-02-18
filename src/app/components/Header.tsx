import { Menu, CreditCard, User, HelpCircle } from 'lucide-react';

export function Header() {
  const navItems = [
    'Home',
    'Applications',
    'Start New Application',
    'Services',
    'AI Assistant',
    'Billing',
    'Profile',
    'Help & Support'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-wide">Ketdik</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm transition-all hover:text-white ${
                  item === 'Applications'
                    ? 'text-white font-medium'
                    : 'text-white/60'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
              EN
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all flex items-center gap-2">
              <User className="w-4 h-4" />
              Qadamcha Qadambekov
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}