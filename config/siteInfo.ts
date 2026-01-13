export type SiteInfo = {
  name: string
  email: string
  phone: string
  hoursWeekDays: string
  hoursSaturday: string
  links: {
    facebook: string
  }
}

export const siteInfo: SiteInfo = {
  name: 'ATX Reliable Wrenching',
  phone: '(512) 872 - 9651',
  hoursWeekDays: '8:00 AM - 5:00 PM',
  hoursSaturday: '9:00 AM - 4:00 PM',
  email: 'atxreliablewrenching@gmail.com',
  links: {
    facebook: 'https://www.facebook.com/profile.php?id=61567240719507',
  },
}
