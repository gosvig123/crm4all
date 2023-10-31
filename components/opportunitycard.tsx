'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import DatePicker from './datePicker';
export function DemoReportAnIssue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Opportunity info</CardTitle>
        <CardDescription>
          Update or view existing opportunities{' '}
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='area'>Account owner</Label>
            <Select defaultValue='billing'>
              <SelectTrigger id='area'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='team'>person 1</SelectItem>
                <SelectItem value='billing'>person 2</SelectItem>
                <SelectItem value='account'>Account</SelectItem>
                <SelectItem value='deployments'>
                  Deployments
                </SelectItem>
                <SelectItem value='support'>Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='security-level'>Due date</Label>
            <DatePicker />
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='subject'>Next action</Label>
          <Input
            id='subject'
            placeholder='What is the next action that needs to happen for this opportunity?'
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='description'>Notes</Label>
          <Textarea
            id='description'
            placeholder='Share context about the opportunity...'
          />
        </div>
      </CardContent>
      <CardFooter className='justify-between space-x-2'></CardFooter>
    </Card>
  );
}

export default DemoReportAnIssue;
