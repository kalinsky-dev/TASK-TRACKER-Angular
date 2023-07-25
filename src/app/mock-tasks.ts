import { Task } from "./types/Task"

export const TASKS: Task[] = [
  {
    name: 'Bug_1',
    description: 'Bug when we start the module',
    owner: 'Kalin',
    inProgress: false,
    takenByUser: false,
    hoursOfWork: false,
    isFinished: false,
    _createdOn: 1,
    _id: '1',
    _ownerId: 'Kalin'
  },
  {
    name: 'Bug_2',
    description: 'Bug with the onboarding emails',
    owner: 'Ivancho',
    inProgress: false,
    takenByUser: 'Ivancho',
    hoursOfWork: 2,
    isFinished: true,
    _createdOn: 2,
    _id: '2',
    _ownerId: 'Ivancho'
  },
  {
    name: 'Bug_3',
    description: 'Bug with the Contact Us Page',
    owner: 'Ivancho',
    inProgress: false,
    takenByUser: false,
    hoursOfWork: false,
    isFinished: false,
    _createdOn: 3,
    _id: '3',
    _ownerId: 'Ivancho'
  },
]
