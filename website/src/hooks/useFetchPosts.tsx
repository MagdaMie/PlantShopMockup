import useSWR from 'swr';
import { RawPost } from "../types/types";

import { UseFetchPostsReturnType } from "../types/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetchPosts = (url:string):  UseFetchPostsReturnType => {
  const { data, error } = useSWR<RawPost[]>(url, fetcher);

  if (error) return { posts: null, error };
  if (!data) return { posts: null, loading: true };

const rawPosts = data.slice(0, 3)

  const posts = rawPosts.map((rawPost) => ({
    ...rawPost,
    author: "Mike",
    date: "24 May 2024",
    authorImg: `/author${rawPost.id}.jpg`,
    postImg: `/post${rawPost.id}.jpg`,
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