const TYPE_DEFINITION = `type SystemInfo {
  id: String!
  name: String!
  codename: String!
  language: String!
  type: String!
  lastModified: String!
}
interface ContentItem {
  system: SystemInfo!
}
type MultipleChoiceElementOption {
  name: String!
  codename: String
}
type TaxonomyTerm {
  name: String!
  codename: String
}
type Asset {
  name: String
  type: String
  size: Int
  description: String
  url: String
}
type Link {
  codename: String
  itemID: String
  urlSlug: String
  type: String
}
type TextElement {
  type: String!
  name: String!
  value: String
}
type NumberElement {
  type: String!
  name: String!
  value: String
  number: Int
}
type DateTimeElement {
  type: String!
  name: String!
  value: String
  datetime: String
}
type MultipleChoiceElement {
  type: String!
  name: String!
  value: String
  options: [MultipleChoiceElementOption]
}
type UrlSlugElement {
  type: String!
  name: String!
  value: String
  data: String
}
type TaxonomyElement {
  type: String!
  name: String!
  value: String
  taxonomyGroup: String
  taxonomyTerms: [TaxonomyTerm]
}
type AssetElement {
  type: String!
  name: String!
  value: String
  assets: [Asset]
}
type RichTextElement {
  type: String!
  name: String!
  value: String
  linkedItemCodenames: [String]
  links: [Link]
}

type PersonContentType implements ContentItem {
  system: SystemInfo!
  date_of_birth: DateTimeElement
  name: TextElement
  bio: RichTextElement
  privacy_options: MultipleChoiceElement
  avatar: AssetElement
}`;

module.exports = {
  TYPE_DEFINITION
}
