import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User, Tag } from 'lucide-react';
import blogPostsData from '../data/blogPostsData';
import './BlogArticle.css';

const SectionParagraph = ({ text }) => <p>{text}</p>;
const SectionListItem = ({ text }) => <li>{text}</li>;

// const BlogSection = ({ heading, paragraphs, list }) => (
//   <div className="blog-article-section">
//     {heading && <h2>{heading}</h2>}
//     {paragraphs && paragraphs.length > 0 && <SectionParagraph text={paragraphs[0]} />}
//     {paragraphs && paragraphs.length > 1 && <SectionParagraph text={paragraphs[1]} />}
//     {paragraphs && paragraphs.length > 2 && <SectionParagraph text={paragraphs[2]} />}
//     {paragraphs && paragraphs.length > 3 && <SectionParagraph text={paragraphs[3]} />}
//     {list && (
//       <ul className="blog-article-list">
//         {list.length > 0 && <SectionListItem text={list[0]} />}
//         {list.length > 1 && <SectionListItem text={list[1]} />}
//         {list.length > 2 && <SectionListItem text={list[2]} />}
//         {list.length > 3 && <SectionListItem text={list[3]} />}
//         {list.length > 4 && <SectionListItem text={list[4]} />}
//         {list.length > 5 && <SectionListItem text={list[5]} />}
//         {list.length > 6 && <SectionListItem text={list[6]} />}
//         {list.length > 7 && <SectionListItem text={list[7]} />}
//         {list.length > 8 && <SectionListItem text={list[8]} />}
//         {list.length > 9 && <SectionListItem text={list[9]} />}
//       </ul>
//     )}
//   </div>
// );
const BlogSection = ({ heading, paragraphs, list, html,table }) => (
  <div className="blog-article-section">

    {/* Render RAW HTML if provided */}
    {html && (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}

    {/* Normal structured rendering */}
    {!html && (
      <>
        {heading && <h2>{heading}</h2>}

        {paragraphs && paragraphs.map((p, i) => (
          <SectionParagraph key={i} text={p} />
        ))}

        {list && (
          <ul className="blog-article-list">
            {list.map((item, i) => (
              <SectionListItem key={i} text={item} />
            ))}
          </ul>
        )}

      </>
    )}
    {table && (
  <div className="blog-table-wrapper">
    <table className="blog-table">
      <thead>
        <tr>
          {table.headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

  </div>
);
const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPostsData[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const sections = post.sections || [];

  return (
    <main className="blog-article-page">
      {/* Hero Section */}
      <section className="blog-article-hero">
        <div className="container">
          <Link to="/blog" className="back-to-blog">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="blog-article-meta">
            <span className="blog-article-category">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="blog-article-date">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="blog-article-author">
              <User size={14} />
              QllmSoft Team
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-article-description">{post.description}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="blog-article-content">
        <div className="container">
          <div className="blog-article-layout">
            {/* Main Content */}
            <article className="blog-article-main">
              {sections[0] && <BlogSection {...sections[0]} />}
              {sections[1] && <BlogSection {...sections[1]} />}
              {sections[2] && <BlogSection {...sections[2]} />}
              {sections[3] && <BlogSection {...sections[3]} />}
              {sections[4] && <BlogSection {...sections[4]} />}
              {sections[5] && <BlogSection {...sections[5]} />}
            </article>

            {/* Sidebar */}
            <aside className="blog-article-sidebar">
              <div className="sidebar-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <div className="sidebar-cta">
                <h3>Ready to Start Your Project?</h3>
                <p>Let us discuss how QllmSoft can help transform your business with custom software solutions.</p>
                <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              </div>

              <div className="sidebar-contact">
                <h4>Quick Contact</h4>
                <p><strong>Email:</strong> info@qllmsoft.com</p>
                <p><strong>Phone:</strong> +92 334 8229288</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-article-cta">
        <div className="container">
          <h2>Need Expert Software Development?</h2>
          <p>Partner with QllmSoft for reliable, scalable, and innovative solutions.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </main>
  );
};

export default BlogArticle;
