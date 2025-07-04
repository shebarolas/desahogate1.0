export type EntryMode = "PRIVATE" | "PUBLIC" | "BOTH";

interface SelectionState {
  journal: boolean;
  posts: boolean;
}

export function getEntryMode(selections: SelectionState): EntryMode | null {
  const { journal, posts } = selections;

  if (journal && posts) return "BOTH";
  if (journal) return "PRIVATE";
  if (posts) return "PUBLIC";
  return null;
}