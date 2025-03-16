import { Link } from "react-router-dom";
import posts from "../../../data/posts";
import Back from "../../Back/Back";
import BlogImg from "/images/blog2.jpg";
import HeadingText from "../../HeadingText/HeadingText";
import WhatsAppButton from "../../WhatsApp/WhatsAppButton";

const Blog = () => {
  return (
    <>
      <Back
        title="BLOG"
        image={BlogImg}
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magnam tenetur saepe voluptate."
      />

      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <HeadingText title={"Our"} subTitle={"Blog"} />
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Blog
          </h2> */}
          <p className="mb-12 text-center">
            Stay updated with the latest news and articles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {post.author} on{" "}
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-red-500 hover:text-red-600 transition duration-300"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Blog;
