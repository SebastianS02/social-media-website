import { auth } from '../../utils/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Post() {
    //Form state
    const [post, setPost] = useState({description: ""});

    //Submit post
    const submitPost = async (e) => {
        e.preventDefault();
    }

    return(
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form onSubmit={submitPost}> 
                <h1 className="text-2x1 font-bold">Create a New Post</h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description</h3>
                    <textarea 
                        value={post.description}
                        onChange={(e) => setPost({...post, description: e.target.value})}
                        className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm"
                    ></textarea>
                    <p>{post.description.length}/300</p>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm"
                >Submit</button>
            </form>
        </div>
    )
}