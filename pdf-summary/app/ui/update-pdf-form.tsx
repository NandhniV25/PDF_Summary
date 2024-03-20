'use client';

import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { updatePdf } from '../lib/action';
// import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function Form()
{
    // const inputFileRef = useRef<HTMLInputElement>(null);
    // const [blob, setBlob] = useState<PutBlobResult | null>(null);
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
      // <form onSubmit={async (event) => {
      //   event.preventDefault();

      //   if (!inputFileRef.current?.files) {
      //     throw new Error("No file selected");
      //   }

      //   const file = inputFileRef.current.files[0];

      //   const response = await fetch(
      //     `/api/avatar/upload?filename=${file.name}`,
      //     {
      //       method: 'POST',
      //       body: file,
      //     },
      //   );

      //   const newBlob = (await response.json()) as PutBlobResult;

      //   setBlob(newBlob);
      // }}>
      //   <input name="file" ref={inputFileRef} type="file" required />
      //   <button type="submit">Upload</button>
      // </form>
    );
  }