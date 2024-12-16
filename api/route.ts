import { supabase } from '../utils/supabaseClient';

interface FormData {
  Name: string;
  Phone_No: string;
  Email: string;
  Message: string;
}

export const postData = async (data: FormData) => {
  try {
    const { data: result, error } = await supabase
      .from('HGIT') 
      .insert([data]);

    if (error) {
      console.log('Details have not been sent:');
      //console.error(error);
    } else {
      console.log('Details have been sent:', result);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};
