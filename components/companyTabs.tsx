// CompanyTabs.tsx

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@radix-ui/react-tabs';

const CompanyTabs = () => {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        Make changes to your account here.
      </TabsContent>
      <TabsContent value='password'>
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default CompanyTabs;
