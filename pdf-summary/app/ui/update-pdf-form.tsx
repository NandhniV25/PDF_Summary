'use client';

import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { updatePdf } from '../lib/action';

export default function Form()
{
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updatePdf, initialState);
    return (
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <label htmlFor="file">Upload Pdf</label>
          <input type="file" name="file" id="file"/>
        <div className="mt-6 flex justify-end gap-4">
          <Button type="submit">Generate Summary</Button>
        </div>
        </div>
      </form>
    );
  }