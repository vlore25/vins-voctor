import { MetadataRoute } from 'next'
import winesData from './const/wines'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vinsvoctor.com'
 
  const wineUrls = winesData.map((wine) => ({
    url: `${baseUrl}/vins/${wine.id}`,
    lastModified: new Date(),
  }))
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vins`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...wineUrls,
  ]
}