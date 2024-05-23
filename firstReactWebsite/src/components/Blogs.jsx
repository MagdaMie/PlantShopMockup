// import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import useSWR from "swr"


const Blogs = () => {

    const fetcher = (url) => fetch(url).then(res => res.json())

    const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    if (error) return console.error(error);
    if (!data) return <div>Loading...</div>

    const posts = data.slice(0, 3)

    
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

    

    return(
        <div>
            {posts.map(post => (
                <BlogCard 
                key={post.id}
                title={post.title}
                body={post.body} />
                ))
            }
        </div>
    )
}

export default Blogs