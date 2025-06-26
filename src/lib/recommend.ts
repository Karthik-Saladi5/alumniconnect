// src/lib/recommend.ts
export function coverageMatch(
  studentSkills: string[],
  jobReqs: string[]
): number {
  if (jobReqs.length === 0) return 0;
  const studentSet = new Set(studentSkills.map((s) => s.toLowerCase()));
  const matches = jobReqs.reduce(
    (count, req) => (studentSet.has(req.toLowerCase()) ? count + 1 : count),
    0
  );
  return matches / jobReqs.length;
}
