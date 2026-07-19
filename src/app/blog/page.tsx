import { redirect } from "next/navigation";

// The blog index lives on the homepage; posts are at /blog/<slug>.
export default function BlogIndex() {
  redirect("/#blog");
}
