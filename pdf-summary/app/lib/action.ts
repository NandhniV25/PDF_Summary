'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { text } from 'stream/consumers';
import { isUtf8 } from 'buffer';
import { UUID } from 'crypto';
import { unstable_noStore as noStore } from 'next/cache';

export type State = {
    errors?: {
      file?: string[];
    };
    message?: string | null;
  };

  export type LatestDocRaw = {
    id: UUID;
  };

export async function updatePdf(prevState: State, formData: FormData) {
  noStore();
  var savedId = ""
    // Insert data into the database
    try {
        var test = formData.get('file') as File
        var fileContent = await test.text()
        var fileContentAfterEncode = Buffer.from(fileContent, 'base64').toString();
        //var fileContentAfterEncode = new TextDecoder().decode(await test.arrayBuffer());
        console.log(fileContentAfterEncode)
        var id = await sql`
        insert into case_docs (file_name, file_content)
        values (${test.name}, ${fileContentAfterEncode})
        RETURNING id;`
        savedId = id.rows[0].id
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }

    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/summary/'+savedId);
    return redirect('/summary/'+savedId);
  }


