import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag, ChevronRight, User } from "lucide-react";
import { supabase } from "@/lib/supabase";
import ShareMenu from "@/components/berita/ShareMenu";
import type { Metadata } from "next";
import { cache } from "react";

export const revalidate = 60; // Revalidate every 60 seconds

const SITE_URL = "https://fonijakarta.web.id";

const getArticle = cache(async (slug: string) => {
  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .eq("slug", slug)
    .single();

  return { data, error };
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: article } = await getArticle(slug);

  if (!article) {
    return {
      title: "Berita Tidak Ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_URL}/berita/${slug}`;
  const title = article.title as string;
  const description = (article.excerpt as string) || title;
  const image = article.image as string;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "id_ID",
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: article.published_at as string,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shareUrl = `${SITE_URL}/berita/${slug}`;

  const { data: article, error } = await getArticle(slug);

  if (error) {
    console.error("Failed to fetch article:", error);
    notFound();
  }

  if (!article) {
    notFound();
  }

  // Format date
  const formattedDate = new Date(article.published_at).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.published_at,
    dateModified: article.created_at,
    author: { "@type": "Organization", name: "Redaksi FONI DKI" },
    publisher: {
      "@type": "Organization",
      name: "FONI Pengprov DKI Jakarta",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/LOGO_FONI_DKI.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-38 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-foni-navy transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/berita" className="hover:text-foni-navy transition-colors">Berita</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 truncate">{article.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-foni-navy uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-sm font-bold text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {formattedDate}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Redaksi FONI DKI</div>
                <div className="text-sm text-slate-500">Official Publisher</div>
              </div>
            </div>
            
            <ShareMenu title={article.title} url={shareUrl} />
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-4xl overflow-hidden bg-slate-100 mb-12 shadow-lg border border-slate-200">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none mb-16">
          {/* Excerpt as lead paragraph */}
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Main Content Rendered as HTML */}
          <div 
            className="text-slate-700 leading-loose space-y-6 [&>p]:mb-6 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content ?? "" }} 
          />
        </div>

        {/* Tags */}
        <div className="flex items-center gap-4 py-8 border-t border-slate-200">
          <Tag className="w-5 h-5 text-slate-400" />
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-bold text-slate-600">FONI DKI</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-bold text-slate-600">Orienteering</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-bold text-slate-600">{article.category}</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/berita" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-foni-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Indeks Berita
          </Link>
        </div>
      </article>
    </div>
  );
}
