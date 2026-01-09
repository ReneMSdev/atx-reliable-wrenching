export const YearsOfExperience = (): string => {
  const startYear: number = 2016
  const currentYear: number = new Date().getFullYear()
  const years: number = currentYear - startYear
  return years.toString()
}
