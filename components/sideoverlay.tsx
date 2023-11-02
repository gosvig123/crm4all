import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import CompanyTabs from './companyTabs';
export function Overlay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open</Button>
      </SheetTrigger>
      <SheetContent className='min-w-[55rem] max-w-[screen]'>
        <SheetHeader>
          <CompanyTabs />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Overlay;
