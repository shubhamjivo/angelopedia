import { redirect } from "next/navigation";
import { PICTURES_HREF } from "@/lib/pictures";

export default function NewsInPictureIndex() {
  redirect(PICTURES_HREF);
}
