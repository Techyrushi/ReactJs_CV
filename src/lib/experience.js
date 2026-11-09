import { ExperienceData } from "@/app/data";

const experienceStartDate = ExperienceData.reduce((earliest, experience) => {
  if (!earliest || experience.startDate < earliest) {
    return experience.startDate;
  }

  return earliest;
}, "");

export function getExperienceDuration(now = new Date()) {
  const [startYear, startMonth, startDay] = experienceStartDate
    .split("-")
    .map(Number);
  const startDate = new Date(Date.UTC(startYear, startMonth - 1, startDay));
  const completedMonths = Math.max(
    0,
    (now.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
      now.getUTCMonth() -
      startDate.getUTCMonth() -
      (now.getUTCDate() < startDate.getUTCDate() ? 1 : 0)
  );
  const years = Math.floor(completedMonths / 12);
  const months = completedMonths % 12;

  return months === 0 ? `${years}` : `${years}.${months}`;
}
