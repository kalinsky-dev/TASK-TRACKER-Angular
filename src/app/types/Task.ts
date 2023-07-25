export interface Task {
  name: string;
  description: string;
  owner: string;
  inProgress: boolean;
  takenByUser: string | false;
  hoursOfWork: number | false;
  isFinished: boolean;
  _createdOn?: number;
  _id?: string;
  _ownerId?: string;
}