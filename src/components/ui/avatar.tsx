// src/components/ui/avatar.tsx

export function Avatar({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        {children}
      </div>
    );
  }
  
  export function AvatarFallback({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
        {children}
      </div>
    );
  }
  