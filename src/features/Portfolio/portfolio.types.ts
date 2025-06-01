export interface PortfolioItemType {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // URL for the main/large image
  thumbnailUrl?: string; // Optional: URL for a smaller thumbnail
  category: string;
}