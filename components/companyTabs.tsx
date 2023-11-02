'use client';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@radix-ui/react-tabs';
import AccordionDemo from './communicationTab';
import DemoReportAnIssue from './opportunitycard';

const CompanyTabs = () => {

  return (
    <Tabs defaultValue='Info' className='w-[95%]'>
      <TabsList className='grid w-full grid-cols-2 gap-5 '>
        <TabsTrigger
          className='rounded-md p-1  border border-dotted border-blue-800'
          value='Info'
        >
          Info
        </TabsTrigger>

        <TabsTrigger
          className='rounded-md p-1  border border-dotted border-blue-800'
          value='Communication'
        >
          Communication
        </TabsTrigger>
      </TabsList>
      <TabsContent value='Info' className='bg-white mt-5'>
        <DemoReportAnIssue />
      </TabsContent>
      <TabsContent value='Communication'>
        <AccordionDemo />
      </TabsContent>
    </Tabs>
  );
};

export default CompanyTabs;
