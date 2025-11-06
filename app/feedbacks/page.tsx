import React from 'react'

const page = () => {

    // const handleAddFeedback = (title, description) => {
    //     // logic to add feedback
    // }

    // const handleUpvote = (feedbackId) => {
    //     // logic to upvote feedback
    // }

    // const handleDelete = (feedbackId) => {
    //     // logic to delete feedback
    // }

  return (
    <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Feedbacks</h1>
        <form className="mb-6">
            <input type="text" placeholder="Title" className="mb-2 p-2 w-full border border-gray-300 rounded" />
            <textarea placeholder="Description" className="mb-2 p-2 w-full border border-gray-300 rounded"></textarea>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer">Add Feedback</button>
        </form>
        <div className="space-y-4">
            <div className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-semibold">Feedback Title 1</h2>
                <p className="mb-2">This is a description of the feedback.</p>
                <div className="flex items-center justify-between">
                    <span>Upvotes: 10</span>
                    <div>
                        <button className="mr-2 p-1 bg-green-500 text-white rounded hover:bg-green-600">Upvote</button>
                        <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-semibold">Feedback Title 2</h2>
                <p className="mb-2">This is another description of feedback.</p>
                <div className="flex items-center justify-between">
                    <span>Upvotes: 5</span>
                    <div>
                        <button className="mr-2 p-1 bg-green-500 text-white rounded hover:bg-green-600">Upvote</button>
                        <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-semibold">Feedback Title 3</h2>
                <p className="mb-2">This is another description of feedback.</p>
                <div className="flex items-center justify-between">
                    <span>Upvotes: 5</span>
                    <div>
                        <button className="mr-2 p-1 bg-green-500 text-white rounded hover:bg-green-600">Upvote</button>
                        <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
