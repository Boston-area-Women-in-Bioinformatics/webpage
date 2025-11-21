export interface CommitteeMember {
  name: string;
  title?: string;
  photo?: string;
}

export interface Committee {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon?: string;
  chairs?: CommitteeMember[];
  members?: CommitteeMember[];
}
