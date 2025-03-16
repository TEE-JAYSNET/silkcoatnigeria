import { useParams, Link } from "react-router-dom";
import posts from "../../../data/posts";
import ReactMarkdown from "react-markdown";
import Back from "../../Back/Back";
import blog1 from "/images/blog1.png";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Post Not Found
          </h2>
          <p className="mb-12">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="text-red-500 hover:text-red-600 transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Back
        title="More Details"
        image={blog1}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 text-sm mb-8">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
            <div className="prose prose-lg">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <div className="mt-8">
              <Link
                to="/blog"
                className="text-red-500 hover:text-red-600 transition duration-300"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
