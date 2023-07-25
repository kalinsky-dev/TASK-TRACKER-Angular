export interface Task {
  name: string;
  description: string;
  hoursOfWork: string | null;
  takenByUser: string | null;
  inProgress: boolean;
  isFinished: boolean;
  _createdOn: string;
  _id: string;
  _ownerId: string;
}