import { FaTools, FaCar, FaTint, FaCogs, FaBolt, FaLeaf, FaTruck, FaCarCrash } from 'react-icons/fa'
import { PiEngineBold } from 'react-icons/pi'

export const services = [
  {
    image: '/images/serviceImages/check-engine.jpg',
    title: 'Check Engine Light',
    description: `Check engine light on? Contact us and we'll come out to diagnose and repair the issue to get you back on the road.`,
    Icon: PiEngineBold,
  },
  {
    image: '/images/serviceImages/brake-repair.jpg',
    title: 'Brake Repair',
    description: `Tired of the squeaky or shaky brakes? We have some of the most competitive brake prices in Austin!`,
    Icon: FaCar,
  },
  {
    image: '/images/serviceImages/coolant-leak.jpg',
    title: 'Coolant Leak Repair',
    description: `Engine overheating? Do you see any fluid leaking? All it takes is booking an appointment and we'll get you back rolling!`,
    Icon: FaTint,
  },
  {
    image: '/images/serviceImages/suspension-repair.jpg',
    title: 'Suspension Diagnostics',
    description: `Have you noticed noises over bumps, shaking at high speeds, or squeaking when you turn? Give us a call and we'll get it fixed!`,
    Icon: FaCogs,
  },
  {
    image: '/images/serviceImages/electrical.jpg',
    title: 'Electrical Repairs',
    description: `Pesky rodents chewing on your wires or experiencing weird electrical mishaps? Schedule an appointment and we'll have a technician out to you ASAP.`,
    Icon: FaBolt,
  },
  {
    image: '/images/serviceImages/general-maintenance.jpg',
    title: 'General Maintenance',
    description: `Everything from oil changes and tire rotations to 100k-mile services and timing belts. We handle it all!`,
    Icon: FaTools,
  },
  {
    image: '/images/serviceImages/hybrid.jpg',
    title: 'Hybrid System Repair',
    description: `Anything from inverters to just a faulty plug, we can get your vehicle diagnosed and repaired in no time!`,
    Icon: FaLeaf,
  },
  {
    image: '/images/serviceImages/diesel.png',
    title: 'Diesel Repair',
    description: `Expert diesel repair shouldn't cost an arm and a leg. Get specialized service at competitive rates and get back on the road sooner.`,
    Icon: FaTruck,
  },
  {
    image: '/images/serviceImages/minor-body-damage.jpg',
    title: 'Minor Body Work',
    description: `Broken headlights or bumbers? No issue at all. Reach out and we can get you a quote.`,
    Icon: FaCarCrash,
  },
]
