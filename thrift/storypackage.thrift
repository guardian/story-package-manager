
struct StoryPackageItem {
  1: required string internalPageCode,
}

struct StoryPackage {
  1: required string id,
  2: required string title,
  3: required set<StoryPackageItem> items,
}
