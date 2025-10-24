import { DarkmodeToggle } from '@/components/common/darkmode-toggle';
import { House, User } from 'lucide-react';
import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export default function StudentRegisterLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <DarkmodeToggle />
      </div>
      <div className="flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-teal-500 flex p-2 items-center justify-center rounded-md">
            <User className="size-4" />
          </div>
          AT-TIN - Pendaftaran Santri Baru
        </div>
        {children}
      </div>
    </div>
  );
}
