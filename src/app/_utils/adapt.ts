import type { Job } from "../_types/recruitment/jobs";
import type { Recruitment } from "@/app/_types/recruitment/types";

export default function Adapt(r: Recruitment): Job {
  const exp =
    (r.minExperience === 0 && r.maxExperience === 0) ||
    (r.minExperience === null && r.maxExperience === null)
      ? "경력 무관"
      : `${r.minExperience}–${r.maxExperience}년`;
  const edu = r.educations?.includes("학력_무관")
    ? "학력 무관"
    : r.educations.join(", ");

  return {
    id: r.id,
    href: r.recruitmentUrl,
    company: r.companyName,
    title: r.title,
    location: r.locations.join(", "),
    experience: exp,
    contractType: r.employmentTypes.join(", "),
    education: edu,
    imageUrl: r.imageUrl ?? "/logo.png", //지금은 이미지를 받아올 수 없으므로 제목으로
    dday: r.deadlineType,
    views: 0,
    jobGroup: r.jobs[0] ?? "기타",
    bookmarked: false,
  };
}
