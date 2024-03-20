'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
      file?: string[];
    };
    message?: string | null;
  };

export async function updatePdf(prevState: State, formData: FormData) {

    // Insert data into the database
    try {
        var test = formData.get('file') as File
        console.log(await test.text())
      
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/');
    redirect('/');
  }