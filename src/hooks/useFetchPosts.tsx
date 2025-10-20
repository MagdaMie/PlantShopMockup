import useSWR from "swr";
import { RawPost } from "../types/types";
import { UseFetchPostsReturnType } from "../types/types";
import author1 from "../assets/author1.jpg";
import author2 from "../assets/author2.jpg";
import author3 from "../assets/author3.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

const authorImages: { [id: number]: string } = {
  1: author1,
  2: author2,
  3: author3,
};

const postImages: { [id: number]: string } = {
  1: post1,
  2: post2,
  3: post3,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetchPosts = (url: string): UseFetchPostsReturnType => {
  const { data, error } = useSWR<RawPost[]>(url, fetcher);

  if (error) return { posts: null, error };
  if (!data) return { posts: null, loading: true };

  const rawPosts = data.slice(0, 3);

  const posts = rawPosts.map((rawPost) => ({
    ...rawPost,
    author: "Mike",
    date: "24 May 2024",
    authorImg: authorImages[rawPost.id],
    postImg: postImages[rawPost.id],
  }));

  return { posts, loading: false, error: null };

  // const [posts, setPosts] = useState([])

  // USING PROMISE, THEN AND CATCH

  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //         .then(response => {
  //             if(!response.ok) {
  //                 throw new Error('netwoek response was not ok')
  //             }
  //             return response.json()})
  //         .then(data => setPosts(data.slice(0, 3)))
  //         .catch(error => console.error('Error fetching posts:', error));
  // }, []);

  //USING ASYNC AND AWAIT

  //  useEffect(() => {
  //     const fetchPosts = async () => {
  //         try {
  //             const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //             if(!response.ok) {
  //                 throw new Error('network response was not okay')
  //             }
  //             const data = await response.json()
  //             setPosts(data.slice(0, 3))
  //         } catch(error) {
  //             console.error(error)
  //         }
  //     }
  //     fetchPosts()
  //  }, [])
};

export default useFetchPosts;
