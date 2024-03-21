export const isTeacher = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_CLERK_TEACHER_ID;
};
