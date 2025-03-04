import PlaylistPage from "@/component/playlist";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = await createClient();

  const { data } = await supabase.from("playlist").select("*");

  return <PlaylistPage songList={data} />;
}
