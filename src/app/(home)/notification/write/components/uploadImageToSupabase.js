import { createClient } from '@/utils/supabase/client';

const uploadImageToSupabase = async (file) => {
  console.log('file', file);
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from('images')
    .upload(`images/${Date.now()}`, file);

  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/your-storage-bucket/${data.path}`;
  return imageUrl;
};
